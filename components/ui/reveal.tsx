/**
 * Scroll reveal wrapper — a server component that only tags an element.
 *
 * The animation itself lives in `.reveal` in globals.css and runs on a CSS
 * view() timeline. Deliberately not JS-driven: an opacity:0 initial state that
 * waits on an IntersectionObserver leaves the whole page blank whenever the
 * observer doesn't fire, and this page's services, work and pricing copy is
 * the product. Browsers without scroll-driven timeline support simply get the
 * content, unanimated.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
