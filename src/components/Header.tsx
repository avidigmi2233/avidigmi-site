import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SmartLink } from '@/components/SmartLink';
import { mainNav, site } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-smooth',
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lift'
          : 'bg-primary/80 backdrop-blur-sm',
      )}
    >
      <nav
        className="container-avi flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="ניווט ראשי"
      >
        {/* logo */}
        <SmartLink href="/" className="flex shrink-0 items-center" aria-label={site.name}>
          <img
            src={site.logo}
            alt={`${site.name} — ${site.tagline}`}
            width={150}
            height={44}
            className="h-9 w-auto object-contain md:h-11"
            loading="eager"
          />
        </SmartLink>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <SmartLink
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 transition-smooth hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        {/* desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden shrink-0 bg-gradient-mint font-bold text-primary shadow-glow transition-smooth hover:opacity-90 lg:inline-flex"
        >
          <SmartLink href="/contact">
            <Phone className="size-4" aria-hidden="true" />
            לשיחת ייעוץ בחינם
          </SmartLink>
        </Button>

        {/* mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="פתיחת תפריט"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[88vw] max-w-sm border-none bg-primary p-0">
            <div className="flex h-16 items-center justify-between px-4">
              <img
                src={site.logo}
                alt={site.name}
                className="h-9 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
                aria-label="סגירת תפריט"
              >
                <X className="size-5" />
              </Button>
            </div>

            <ul className="flex flex-col gap-1 px-4 pb-6 pt-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <SmartLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-smooth hover:bg-primary-foreground/10"
                  >
                    {item.label}
                  </SmartLink>
                </li>
              ))}
              <li className="mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-mint font-bold text-primary shadow-glow"
                >
                  <SmartLink href="/contact" onClick={() => setOpen(false)}>
                    <Phone className="size-4" aria-hidden="true" />
                    לשיחת ייעוץ בחינם
                  </SmartLink>
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Header;
