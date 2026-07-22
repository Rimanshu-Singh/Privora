import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl";
};

const maxWidthClass = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
  maxWidth = "5xl",
}: PageShellProps) {
  return (
    <main className="flex-1 bg-surface px-6 pb-20 pt-20 sm:pt-24 lg:px-10">
      <div className={`mx-auto ${maxWidthClass[maxWidth]}`}>
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <p className="eyebrow">{eyebrow}</p>
            )}
            <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.04] text-primary sm:text-6xl">
              {title}
            </h1>
            {description && (
              <div className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</div>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
        {children}
      </div>
    </main>
  );
}
