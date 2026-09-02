import { ArrowLeft, CheckCircle2, Search, Sparkles, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SmartLink } from '@/components/SmartLink';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import {
  featuredProjects,
  hero,
  landingPillars,
  services,
  siteTypes,
  testimonials,
} from '@/data/site';
import { recentPosts } from '@/data/posts';

export function Home() {
  const posts = recentPosts(6);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 start-1/4 size-[38rem] rounded-full bg-accent/20 blur-3xl"
        />
        <div className="container-avi relative flex min-h-[78vh] flex-col items-center justify-center gap-6 py-20 text-center md:py-28">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.15] md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <h2 className="max-w-3xl text-base font-normal text-primary-foreground/80 md:text-xl">
            {hero.subtitle}
          </h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-mint text-base font-bold text-primary shadow-glow transition-smooth hover:opacity-90"
            >
              <SmartLink href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-base font-bold text-primary-foreground transition-smooth hover:bg-primary-foreground/10"
            >
              <SmartLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</SmartLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- SUCCESS NUMBERS ---------------- */}
      <section className="section bg-muted">
        <div className="container-avi">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60 shadow-card transition-smooth hover:shadow-lift">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <img
                    src={t.logo}
                    alt={`הלוגו של ${t.name}`}
                    className="h-16 w-auto max-w-[70%] object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold text-primary">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.kind}</p>
                  <p className="text-3xl font-extrabold text-secondary">{t.result}</p>
                  <p className="text-xs text-muted-foreground">
                    תקופת זמן: {t.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-gradient-brand font-bold">
              <SmartLink href="/success-stories">
                לסיפורי הצלחה נוספים
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="section">
        <div className="container-avi space-y-16">
          {featuredProjects.map((p, i) => (
            <article
              key={p.brand}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <figure className="overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-smooth hover:scale-105"
                  loading="lazy"
                />
              </figure>

              <div className="space-y-5">
                <h2 className="text-3xl font-extrabold text-primary md:text-4xl">{p.title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{p.description}</p>
                <Button asChild size="lg" className="bg-gradient-brand font-bold">
                  <SmartLink href={p.href}>
                    {p.cta}
                    <ArrowLeft className="size-5" aria-hidden="true" />
                  </SmartLink>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- SITE TYPES ---------------- */}
      <section className="section bg-gradient-hero text-primary-foreground">
        <div className="container-avi">
          <SectionHeading
            title="הגיע הזמן לבנות את הנוכחות שלך בדיגיטל!"
            subtitle="בין אם אתם מייצגים מותג יוקרתי, מוכרים מוצרים אונליין, או מספקים שירותים נדרשים — יש אתר שמתאים בדיוק לכם."
            inverted
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteTypes.map((t) => (
              <Card
                key={t.title}
                className="group overflow-hidden border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm transition-smooth hover:bg-primary-foreground/10"
              >
                <img
                  src={t.image}
                  alt={t.alt}
                  width={768}
                  height={488}
                  className="aspect-[768/488] w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-bold text-accent">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/80">
                    {t.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent/50 bg-transparent font-bold text-accent transition-smooth hover:bg-accent hover:text-primary"
                  >
                    <SmartLink href={t.href}>{t.cta}</SmartLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LEAD FORM ---------------- */}
      <section className="section" id="contact-form">
        <div className="container-avi max-w-3xl">
          <SectionHeading title="לשיחת ייעוץ בחינם לגבי האתר הבא שלך:" />
          <Card className="mt-8 shadow-card">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- PORTFOLIO CTA ---------------- */}
      <section className="section bg-muted">
        <div className="container-avi text-center">
          <SectionHeading title="פרויקטים נבחרים" />
          <Button asChild size="lg" className="mt-8 bg-gradient-brand font-bold">
            <SmartLink href="/projects">
              למעבר לצפייה בתיק העבודות
              <ArrowLeft className="size-5" aria-hidden="true" />
            </SmartLink>
          </Button>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="section">
        <div className="container-avi">
          <SectionHeading
            title="כדי לקדם את העסק שלך תוכל להשתמש בבניית אתרים ובעוד מגוון דרכים"
            subtitle="אך הפתרון הזה לא יתאים לכל עסק ולכל מטרה — לכל עסק מתאים כלי אחר."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <SmartLink key={s.title} href={s.href} className="group block">
                <Card className="h-full overflow-hidden border-border/60 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-lift">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <CardContent className="flex items-center justify-between gap-2 p-5">
                    <h3 className="text-lg font-bold text-primary">{s.title}</h3>
                    <ArrowLeft
                      className="size-5 shrink-0 text-secondary transition-smooth group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </CardContent>
                </Card>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="section bg-gradient-hero text-primary-foreground">
        <div className="container-avi text-center">
          <SectionHeading
            title="בניית אתרים שעובדים לעסק שלך - למה שתבחר דווקא בנו?"
            subtitle="בעידן שבו הנוכחות הדיגיטלית קובעת את מידת ההצלחה של עסקים, בניית אתר מקצועי היא לא מותרות אלא צורך הכרחי."
            inverted
          />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-mint font-bold text-primary shadow-glow"
            >
              <SmartLink href="/contact">לשיחת ייעוץ בחינם</SmartLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent font-bold text-primary-foreground hover:bg-primary-foreground/10"
            >
              <SmartLink href="/projects">לצפייה בעבודות</SmartLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- SEO SECTION ---------------- */}
      <section className="section">
        <div className="container-avi grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
              קידום אתרים SEO בגוגל – הדרך שלך לבלוט במנועי החיפוש
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              קידום SEO הוא לא רק להופיע בגוגל – זה להפוך את האתר שלך לכלי עבודה חזק שמביא לידים
              איכותיים, יוצר אמון עם הלקוחות, ומשפר את תדמית המותג.
            </p>
            <Button asChild size="lg" className="bg-gradient-brand font-bold">
              <SmartLink href="/seo">
                לקריאה נוספת על קידום האתר שלך
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src="/img/sections/seo.png"
              alt="קידום אתרים SEO - תמונה לסקשן"
              width={1024}
              height={576}
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ---------------- LANDING PAGE SECTION ---------------- */}
      <section className="section bg-muted">
        <div className="container-avi grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="order-2 overflow-hidden rounded-2xl shadow-lift lg:order-1">
            <img
              src="/img/sections/landing.webp"
              alt="דף נחיתה שמביא תוצאות לעסק - תמונה לסקשן"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </figure>

          <div className="order-1 space-y-6 lg:order-2">
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
              בעזרת דף נחיתה שמביא תוצאות
            </h2>
            <ul className="space-y-4">
              {landingPillars.map((p, i) => {
                const Icon = [Search, Sparkles, Target][i] ?? CheckCircle2;
                return (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-primary">{p.title}</h3>
                  </li>
                );
              })}
            </ul>
            <Button asChild size="lg" className="bg-gradient-brand font-bold">
              <SmartLink href="/landing-page">
                קריאה נוספת על דף נחיתה לעסק שלי
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- RECENT POSTS ---------------- */}
      <section className="section">
        <div className="container-avi">
          <SectionHeading title="אולי יעניין אותך גם:" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <SmartLink key={post.slug} href={`/${post.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col overflow-hidden border-border/60 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-lift">
                  {post.hero && (
                    <img
                      src={post.hero}
                      alt={post.title}
                      width={300}
                      height={200}
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
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="section bg-muted">
        <div className="container-avi grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <figure className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src="/img/sections/about.webp"
              alt="אבי דיגמי - בונה אתרים"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </figure>

          <div className="space-y-5">
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">שלום אני אבי דיגמי</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              מתמחה בבניית אתרים ודפי נחיתה שמייצרים תוצאות אמיתיות לעסקים. עם חקר שוק, ניתוח
              מתחרים וניסיון שיווקי עשיר — אני בונה נוכחות דיגיטלית שעובדת מהיום הראשון.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <TrendingUp className="size-5" aria-hidden="true" />
              <span className="font-bold">תוצאות מוכחות אצל עשרות לקוחות</span>
            </div>
            <Button asChild size="lg" className="bg-gradient-brand font-bold">
              <SmartLink href="/about">
                למידע נוסף
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
