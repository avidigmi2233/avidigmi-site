import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SmartLink } from '@/components/SmartLink';
import { Button } from '@/components/ui/button';
import { footerNav, site } from '@/data/site';
import { recentPosts } from '@/data/posts';

const socials = [
  { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: site.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: site.social.linkedin, label: 'Linkedin', Icon: Linkedin },
];

export function Footer() {
  const latest = recentPosts(3);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-avi grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* brand + socials */}
        <div className="space-y-5">
          <SmartLink href="/" className="inline-flex" aria-label={site.name}>
            <img
              src={site.logo}
              alt={`${site.name} — ${site.tagline}`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </SmartLink>
          <p className="text-sm text-primary-foreground/70">
            {site.name} — {site.tagline}
          </p>
          <ul className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <SmartLink
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-smooth hover:bg-accent hover:text-primary"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        {/* navigation */}
        <FooterColumn title="ניווט באתר" items={footerNav.navigation} />

        {/* more + legal */}
        <div className="space-y-8">
          <FooterColumn title="עוד באתר" items={footerNav.more} />
          <FooterColumn title="מדריכים ותוכן" items={footerNav.content} />
        </div>

        {/* latest posts + contact */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-base font-bold text-accent">מעניין לקרוא</h3>
            <ul className="space-y-3">
              {latest.map((post) => (
                <li key={post.slug}>
                  <SmartLink
                    href={`/${post.slug}`}
                    className="text-sm leading-snug text-primary-foreground/75 transition-smooth hover:text-accent"
                  >
                    {post.title}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-accent">דברו איתנו</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <SmartLink
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-primary-foreground/75 transition-smooth hover:text-accent"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </SmartLink>
              </li>
              <li>
                <SmartLink
                  href={site.social.instagram}
                  className="inline-flex items-center gap-2 text-primary-foreground/75 transition-smooth hover:text-accent"
                >
                  <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                  לשליחת הודעה ישירה
                </SmartLink>
              </li>
            </ul>
            <Button
              asChild
              className="mt-5 w-full bg-gradient-mint font-bold text-primary shadow-glow transition-smooth hover:opacity-90"
            >
              <SmartLink href="/contact">אני רוצה שנדבר!</SmartLink>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <p className="container-avi py-5 text-center text-xs text-primary-foreground/60">
          כל הזכויות שמורות ל{site.legalName} ©
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-base font-bold text-accent">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <SmartLink
              href={item.href}
              className="text-sm text-primary-foreground/75 transition-smooth hover:text-accent"
            >
              {item.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
