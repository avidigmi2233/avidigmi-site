/**
 * Router-agnostic link.
 *
 * INTEGRATION NOTE for the Lovable agent:
 * rewire the two lines marked below to the project's actual router —
 *   • Vite + react-router-dom  ->  import { Link } from 'react-router-dom';  <Link to={href} …>
 *   • TanStack Start           ->  import { Link } from '@tanstack/react-router'; <Link to={href} …>
 * Everything else in the codebase imports from here, so this is the only file to change.
 */
import { forwardRef, type AnchorHTMLAttributes } from 'react';

export type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const isExternal = (href: string) =>
  /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');

export const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  ({ href, children, ...props }, ref) => {
    if (isExternal(href)) {
      return (
        <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }

    // ↓↓↓ swap for the project's router Link ↓↓↓
    return (
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
    );
    // ↑↑↑ swap for the project's router Link ↑↑↑
  },
);

SmartLink.displayName = 'SmartLink';

export default SmartLink;
