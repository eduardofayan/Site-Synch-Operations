import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-5 py-2.5 text-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary via-primary to-accent text-white shadow-[0_10px_40px_-10px_rgba(242,106,33,0.8)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(255,154,61,0.8)]",
  ghost: "glass text-foreground hover:-translate-y-0.5 hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", size = "md", external, className = "" }: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
