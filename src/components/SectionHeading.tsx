import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 max-w-3xl", className)}>
      {eyebrow ? (
        <p className="field-label mb-3 inline-flex items-center gap-2">
          <span aria-hidden="true">◇</span>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-3 text-sm leading-7 text-cream/80 sm:text-base">{children}</div>
      ) : null}
    </div>
  );
}
