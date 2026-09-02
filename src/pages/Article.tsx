import { useEffect, useState } from 'react';
import { ArrowLeft, CalendarDays, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SmartLink } from '@/components/SmartLink';
import { SectionHeading } from '@/components/SectionHeading';
import { categoryLabels, getPost, loadPostBody, posts, type Post } from '@/data/posts';
import { site } from '@/data/site';

/**
 * Single blog article.
 *
 * INTEGRATION NOTE for the Lovable agent:
 * route this at the catch-all `/:slug` (AFTER all static routes), and read the
 * param with the project's router. Slugs are the ORIGINAL Hebrew URLs from
 * WordPress — keep them exactly as-is so Google's indexed links keep resolving.
 * Render <title>/<meta> from `post.seoTitle` and `post.description`.
 */
export function Article({ slug }: { slug: string }) {
  const post = getPost(slug);
  const [body, setBody] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!post) return;
    let alive = true;
    setBody(null);
    setFailed(false);
    loadPostBody(post)
      .then((html) => alive && setBody(html))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [post]);

  if (!post) return <ArticleNotFound />;

  const related = posts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <>
      {/* hero */}
      <header className="bg-gradient-hero py-14 text-primary-foreground md:py-20">
        <div className="container-avi max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25"
              >
                {categoryLabels[c]}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{post.title}</h1>

          {post.description && (
            <p className="text-base text-primary-foreground/80 md:text-lg">{post.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-5 text-sm text-primary-foreground/70">
            {post.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden="true" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('he-IL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {post.readingMinutes} דקות קריאה
            </span>
          </div>
        </div>
      </header>

      {/* body */}
      <article className="section">
        <div className="container-avi max-w-4xl">
          {post.hero && (
            <img
              src={post.hero}
              alt={post.title}
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-lift"
              loading="eager"
            />
          )}

          {/* article HTML is sanitised at build time and fetched from /content/posts */}
          {body === null && !failed && (
            <div className="flex justify-center py-16" role="status" aria-live="polite">
              <Loader2 className="size-8 animate-spin text-secondary" />
              <span className="sr-only">טוען את המאמר…</span>
            </div>
          )}
          {failed && (
            <p className="py-16 text-center text-muted-foreground">
              לא הצלחנו לטעון את תוכן המאמר. נסו לרענן את הדף.
            </p>
          )}
          {body !== null && (
            <div className="prose-avi" dangerouslySetInnerHTML={{ __html: body }} />
          )}

          {/* inline CTA */}
          <Card className="mt-14 overflow-hidden border-none bg-gradient-hero text-primary-foreground shadow-lift">
            <CardContent className="flex flex-col items-center gap-5 p-8 text-center md:p-10">
              <h2 className="text-2xl font-extrabold md:text-3xl">
                רוצה אתר שעובד לעסק שלך מהיום הראשון?
              </h2>
              <p className="max-w-xl text-primary-foreground/80">
                נדבר על המטרות שלך ואבנה לך נוכחות דיגיטלית שמביאה תוצאות.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-mint font-bold text-primary shadow-glow"
              >
                <SmartLink href="/contact">
                  לשיחת ייעוץ בחינם
                  <ArrowLeft className="size-5" aria-hidden="true" />
                </SmartLink>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* related */}
      {related.length > 0 && (
        <section className="section bg-muted">
          <div className="container-avi">
            <SectionHeading title="אולי יעניין אותך גם:" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RelatedCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function RelatedCard({ post }: { post: Post }) {
  return (
    <SmartLink href={`/${post.slug}`} className="group block h-full">
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
          <h3 className="text-lg font-bold leading-snug text-primary">{post.title}</h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-secondary">
            לקריאה
            <ArrowLeft
              className="size-4 transition-smooth group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </span>
        </CardContent>
      </Card>
    </SmartLink>
  );
}

function ArticleNotFound() {
  return (
    <div className="container-avi flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-extrabold text-primary">הדף לא נמצא</h1>
      <p className="text-muted-foreground">
        ייתכן שהכתובת השתנתה. אפשר לחזור לעמוד הבית או לעיין בבלוג של {site.name}.
      </p>
      <div className="flex gap-3">
        <Button asChild className="bg-gradient-brand font-bold">
          <SmartLink href="/">לעמוד הבית</SmartLink>
        </Button>
        <Button asChild variant="outline">
          <SmartLink href="/blog">למאמרים</SmartLink>
        </Button>
      </div>
    </div>
  );
}

export default Article;
