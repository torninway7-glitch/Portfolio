import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "invert";
  className?: string;
};

/**
 * Brutalist button: hard corners, 1px border, no easing curves that feel soft.
 * `invert` is for use on top of an acid-filled block.
 */
export function Button({ href, children, variant = "solid", className = "" }: Props) {
  const styles = {
    solid:
      "bg-acid text-black border-acid hover:bg-ink hover:border-ink active:translate-y-px",
    ghost:
      "bg-transparent text-ink border-rule hover:border-acid hover:text-acid active:translate-y-px",
    invert:
      "bg-black text-acid border-black hover:bg-transparent hover:text-black hover:border-black active:translate-y-px",
  }[variant];

  return (
    <Link
      href={href}
      className={`chrome inline-flex items-center gap-2 border px-6 py-3.5 text-xs font-bold transition-colors duration-100 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
