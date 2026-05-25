import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FishCrestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 96 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 33c10-17 31-22 52-8l14-10-3 18 3 18-14-10c-21 14-42 9-52-8Z" />
      <path d="M31 22 26 10l9 5 7-8 3 11" />
      <path d="M35 36c6 5 17 5 25-1" />
      <path d="M43 25c5 4 12 4 18 0" />
      <circle cx="28" cy="31" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CrownSketchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M11 47h42" />
      <path d="M16 43 12 18l13 12 8-17 8 17 13-12-4 25Z" />
      <path d="M20 51h24" />
    </svg>
  );
}

export function NodeGraphIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m20 19 25 6M20 19l9 26M45 25 29 45M45 25l-2 24M29 45l14 4" />
      <circle cx="20" cy="19" r="5" />
      <circle cx="45" cy="25" r="5" />
      <circle cx="29" cy="45" r="5" />
      <circle cx="43" cy="49" r="5" />
      <circle cx="13" cy="42" r="4" />
      <path d="m13 42 16 3" />
    </svg>
  );
}

export function ParchmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 8h25c6 0 9 4 7 10l-2 6v30H18Z" />
      <path d="M43 8c-4 2-5 6-3 10 2 3 7 3 10 0" />
      <path d="M24 24h16M24 33h15M24 42h11" />
      <path d="M15 54c5-2 10-2 15 0" />
    </svg>
  );
}

export function LinkGlyphIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M25 35c-4 4-10 4-14 0s-4-10 0-14l7-7c4-4 10-4 14 0 2 2 3 4 3 7" />
      <path d="M39 29c4-4 10-4 14 0s4 10 0 14l-7 7c-4 4-10 4-14 0-2-2-3-4-3-7" />
      <path d="m24 40 16-16" />
    </svg>
  );
}

export function BGCCoinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="36" cy="36" r="27" />
      <circle cx="36" cy="36" r="21" strokeDasharray="3 5" />
      <path d="M25 45V26h13c5 0 8 2 8 6 0 3-2 5-5 5 4 1 6 3 6 6 0 4-3 6-9 6H25Z" />
      <path d="M31 34h7M31 42h8" />
      <path d="M27 22 24 14l8 4 5-7 4 8 8-4-2 8" />
    </svg>
  );
}
