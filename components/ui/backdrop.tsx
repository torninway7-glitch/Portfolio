/** Purely decorative CRT layers. Never interactive, never announced. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="noise absolute inset-0" />
      <div className="scanlines absolute inset-0 opacity-60" />
      <div className="scanbeam absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-acid/[0.07] to-transparent" />
    </div>
  );
}
