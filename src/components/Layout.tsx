import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';

/**
 * Site shell. Wrap every route with this.
 * The document must be <html lang="he" dir="rtl"> for the RTL layout to work.
 */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-primary focus:shadow-lift"
      >
        דלג לתוכן
      </a>

      <Header />

      <main id="main" className="flex-1">
        {children}
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Layout;
