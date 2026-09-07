/** `// 01 ───── บริการ` — the zine's section rubric. */
export function SectionHeader({
  index,
  title,
  lead,
  id,
}: {
  index: string;
  title: string;
  lead?: string;
  id: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span lang="en" className="chrome text-acid text-xs">
          {"//"} {index}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-rule" />
      </div>

      <h2
        id={id}
        className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>

      {lead ? (
        <p className="mt-4 max-w-2xl text-base text-dim md:text-lg">{lead}</p>
      ) : null}
    </div>
  );
}
