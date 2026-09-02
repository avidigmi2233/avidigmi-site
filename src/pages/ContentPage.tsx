import { Fragment, useEffect, useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SmartLink } from '@/components/SmartLink';
import { ContactForm } from '@/components/ContactForm';
import { getContentPage, loadPageBlocks, type Block } from '@/data/pages';

/**
 * Renders every non-blog page (services, about, projects, legal, thank-you)
 * from the 1:1 content extracted off the WordPress site.
 *
 * INTEGRATION NOTE for the Lovable agent:
 * mount one route per entry in `contentPages` (route field), and set
 * <title>/<meta name="description"> from `page.title` / `page.description`.
 * Also register 301 redirects from `legacyRedirects` so the old WordPress
 * URLs keep resolving.
 */
export function ContentPage({ slug }: { slug: string }) {
  const page = getContentPage(slug);
  const [blocks, setBlocks] = useState<Block[] | null>(null);

  useEffect(() => {
    if (!page) return;
    let alive = true;
    setBlocks(null);
    loadPageBlocks(page.slug)
      .then((b) => alive && setBlocks(b))
      .catch(() => alive && setBlocks([]));
    return () => {
      alive = false;
    };
  }, [page]);

  if (!page) return null;

  const isLegal = ['regulations', 'privacy', 'accessibility'].includes(page.slug);
  const [heading, rest] = splitHero(blocks ?? []);

  return (
    <>
      {/* hero */}
      <header className="bg-gradient-hero py-14 text-primary-foreground md:py-20">
        <div className="container-avi max-w-4xl space-y-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            {heading ?? page.navLabel}
          </h1>
          {page.description && (
            <p className="mx-auto max-w-2xl text-base text-primary-foreground/80 md:text-lg">
              {page.description}
            </p>
          )}
        </div>
      </header>

      {/* body */}
      <section className="section">
        <div className={isLegal ? 'container-avi max-w-4xl' : 'container-avi max-w-5xl'}>
          {blocks === null ? (
            <div className="flex justify-center py-16" role="status" aria-live="polite">
              <Loader2 className="size-8 animate-spin text-secondary" />
              <span className="sr-only">טוען…</span>
            </div>
          ) : (
            <div className="prose-avi">{renderBlocks(rest)}</div>
          )}
        </div>
      </section>

      {/* lead form — present on every page of the original site */}
      {!isLegal && (
        <section className="section bg-muted" id="contact-form">
          <div className="container-avi max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold text-primary md:text-4xl">
              לשיחת ייעוץ בחינם לגבי האתר הבא שלך:
            </h2>
            <Card className="mt-8 shadow-card">
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {isLegal && (
        <section className="section bg-muted">
          <div className="container-avi text-center">
            <Button asChild size="lg" className="bg-gradient-brand font-bold">
              <SmartLink href="/">
                חזרה לעמוד הבית
                <ArrowLeft className="size-5" aria-hidden="true" />
              </SmartLink>
            </Button>
          </div>
        </section>
      )}
    </>
  );
}

/** pull the first h1/h2 out to use as the hero heading */
function splitHero(blocks: Block[]): [string | null, Block[]] {
  const i = blocks.findIndex((b) => b.type === 'h1' || b.type === 'h2');
  if (i === -1) return [null, blocks];
  const b = blocks[i];
  const text = 'text' in b ? b.text : null;
  return [text, [...blocks.slice(0, i), ...blocks.slice(i + 1)]];
}

function renderBlocks(blocks: Block[]) {
  const nodes: JSX.Element[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length === 0) return;
    nodes.push(
      <ul key={`ul-${key}`}>
        {list.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  blocks.forEach((b, i) => {
    if (b.type === 'li') {
      list.push(b.text);
      return;
    }
    flushList(String(i));

    switch (b.type) {
      case 'img':
        nodes.push(
          <img
            key={i}
            src={b.src}
            alt={b.alt}
            loading="lazy"
            className="mx-auto rounded-xl shadow-card"
          />,
        );
        break;
      case 'h1':
      case 'h2':
        nodes.push(<h2 key={i}>{b.text}</h2>);
        break;
      case 'h3':
      case 'h4':
        nodes.push(<h3 key={i}>{b.text}</h3>);
        break;
      case 'h5':
      case 'h6':
        nodes.push(<h4 key={i}>{b.text}</h4>);
        break;
      default:
        nodes.push(<p key={i}>{b.text}</p>);
    }
  });

  flushList('end');
  return <Fragment>{nodes}</Fragment>;
}

export default ContentPage;
