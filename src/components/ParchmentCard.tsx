import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ParchmentCardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "plain" | "dark" | "gold";
};

export function ParchmentCard({
  className,
  tone = "plain",
  children,
  ...props
}: ParchmentCardProps) {
  return (
    <div
      className={cn(
        "parchment-card rounded-md border p-5 transition duration-200",
        tone === "dark" && "forest-panel text-cream",
        tone === "gold" && "border-gold/70 bg-parchment-light",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
