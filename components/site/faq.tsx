import { SectionHeader } from "@/components/ui/section-header";
import { faqs } from "@/lib/content";

/** Native <details> disclosure — no JS, no hydration, keyboard-accessible. */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-b border-rule scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader index="05" id="faq-title" title="คำถามที่ถูกถามบ่อย" />

        <div className="border-t border-rule">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold transition-colors duration-100 hover:text-acid md:text-xl">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="chrome shrink-0 pt-1.5 text-sm text-acid"
                >
                  <span className="group-open:hidden">[+]</span>
                  <span className="hidden group-open:inline">[−]</span>
                </span>
              </summary>
              <p className="max-w-3xl pb-7 text-[15px] text-dim md:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
