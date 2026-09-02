import { cn } from '@/lib/utils';

type Props = {
  title: string;
  subtitle?: string;
  inverted?: boolean;
  align?: 'center' | 'start';
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  inverted = false,
  align = 'center',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl space-y-4',
        align === 'center' ? 'text-center' : 'text-start',
        className,
      )}
    >
      <h2
        className={cn(
          'text-3xl font-extrabold md:text-4xl lg:text-5xl',
          inverted ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base leading-relaxed md:text-lg',
            inverted ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
