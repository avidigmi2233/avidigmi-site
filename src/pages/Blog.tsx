import { useMemo, useState } from 'react';
import { ArrowLeft, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SmartLink } from '@/components/SmartLink';
import { SectionHeading } from '@/components/SectionHeading';
import { allCategories, categoryLabels, posts, type PostCategory } from '@/data/posts';
import { cn } from '@/lib/utils';

/** Blog index — replaces the WordPress archive at /בלוג-בניית-אתרים/ */
export function Blog() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<PostCategory | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat = active === 'all' || p.categories.includes(active);
      if (!inCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }, [query, active]);

  const cats = allCategories.filter((c) => posts.some((p) => p.categories.includes(c)));

  return (
    <>
      <header className="bg-gradient-hero py-16 text-primary-foreground md:py-20">
        <div className="container-avi">
          <SectionHeading
            title="מעניין לקרוא"
            subtitle="מדריכים, טיפים ותובנות על בניית אתרים, דפי נחיתה וקידום אורגני — מהשטח."
            inverted
          />
        </div>
      </header>

      <section className="section">
        <div className="container-avi space-y-10">
          {/* filters */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-sm">
              <Search
                className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="חיפוש מאמר…"
                className="pe-10"
                aria-label="חיפוש מאמר"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <CategoryChip active={active === 'all'} onClick={() => setActive('all')}>
                הכל ({posts.length})
              </CategoryChip>
              {cats.map((c) => (
                <CategoryChip key={c} active={active === c} onClick={() => setActive(c)}>
                  {categoryLabels[c]} ({posts.filter((p) => p.categories.includes(c)).length})
                </CategoryChip>
              ))}
            </div>
          </div>

          {/* grid */}
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              לא נמצאו מאמרים שתואמים את החיפוש.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <SmartLink key={post.slug} href={`/${post.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col overflow-hidden border-border/60 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-lift">
                    {post.hero && (
                      <img
                        src={post.hero}
                        alt={post.title}
                        className="aspect-[3/2] w-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <CardContent className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories.map((c) => (
                          <Badge key={c} variant="secondary" className="text-[11px]">
                            {categoryLabels[c]}
                          </Badge>
                        ))}
                      </div>

                      <h2 className="text-lg font-bold leading-snug text-primary">{post.title}</h2>
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {post.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="size-3.5" aria-hidden="true" />
                          {post.readingMinutes} דק׳
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-secondary">
                          לקריאה
                          <ArrowLeft
                            className="size-4 transition-smooth group-hover:-translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </SmartLink>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-avi text-center">
          <SectionHeading
            title="רוצה אתר שמביא תוצאות?"
            subtitle="בוא נדבר על העסק שלך ונבנה נוכחות דיגיטלית שעובדת."
          />
          <Button asChild size="lg" className="mt-8 bg-gradient-brand font-bold">
            <SmartLink href="/contact">
              לשיחת ייעוץ בחינם
              <ArrowLeft className="size-5" aria-hidden="true" />
            </SmartLink>
          </Button>
        </div>
      </section>
    </>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-4 py-1.5 text-sm font-medium transition-smooth',
        active
          ? 'border-transparent bg-gradient-brand text-primary-foreground shadow-card'
          : 'border-border bg-background text-muted-foreground hover:border-secondary hover:text-secondary',
      )}
    >
      {children}
    </button>
  );
}

export default Blog;
