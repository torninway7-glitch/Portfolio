import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/content";

/** Steps printed as terminal output under a fake shell invocation. */
export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-b border-rule scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          index="03"
          id="process-title"
          title="ทำงานกันยังไง"
          lead="สี่ขั้น มีจุดให้ถอยได้ทุกขั้น คุณไม่ต้องผูกมัดทั้งก้อนตั้งแต่วันแรก"
        />

        <div className="border border-rule bg-panel">
          <div
            aria-hidden="true"
            className="flex items-center gap-2 border-b border-rule px-4 py-3"
          >
            <span className="size-2.5 rounded-full bg-hot/70" />
            <span className="size-2.5 rounded-full bg-dim/40" />
            <span className="size-2.5 rounded-full bg-acid/70" />
            <span lang="en" className="chrome ml-3 text-[10px] text-dim">
              ailab — how-we-work.sh
            </span>
          </div>

          <div className="p-5 md:p-9">
            <p lang="en" className="chrome text-xs text-dim">
              <span className="text-acid">$</span> ./start-project.sh
            </p>

            <ol className="mt-8 border-t border-l border-rule">
              {processSteps.map((step, i) => (
                <Reveal
                  key={step.command}
                  className="border-b border-r border-rule"
                >
                  <li className="grid grid-cols-1 gap-x-8 gap-y-3 p-5 md:grid-cols-12 md:p-7">
                    <div className="md:col-span-4">
                      <p lang="en" className="chrome text-[11px] text-acid">
                        [{String(i + 1).padStart(2, "0")}] {step.command}
                      </p>
                      <h3 className="mt-2.5 text-xl font-bold md:text-2xl">{step.title}</h3>
                      <p className="mt-1 text-sm text-dim">{step.duration}</p>
                    </div>
                    <p className="text-[15px] text-dim md:col-span-8">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <p lang="en" className="chrome mt-8 text-xs text-dim">
              <span className="text-acid">$</span> exit 0{" "}
              <span aria-hidden="true" className="caret caret-box ml-1" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
