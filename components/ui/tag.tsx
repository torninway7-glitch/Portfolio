/** Bracketed zine tag: [ RAG ]. Latin-only content by convention. */
export function Tag({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "acid" | "hot";
}) {
  const color =
    tone === "acid"
      ? "text-acid border-acid/40"
      : tone === "hot"
        ? "text-hot border-hot/50"
        : "text-dim border-rule";

  return (
    <span
      lang="en"
      className={`chrome inline-flex items-center border px-2 py-0.5 text-[10px] leading-none ${color}`}
    >
      {children}
    </span>
  );
}
