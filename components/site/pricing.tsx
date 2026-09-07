import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-b border-rule scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          index="04"
          id="pricing-title"
          title="แพ็กเกจและราคา"
          lead="ราคาก้อนตายตัวที่ตกลงกันก่อนเริ่มงาน ไม่มีบิลตามชั่วโมงที่บานปลาย"
        />

        <div className="grid grid-cols-1 border-t border-l border-rule lg:grid-cols-3">
          {plans.map((plan) => {
            const hot = plan.hot === true;

            return (
              <Reveal
                key={plan.name}
                className={`border-r border-b border-rule ${hot ? "bg-acid text-black" : ""}`}
              >
                <div className="flex h-full flex-col p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <span lang="en" className="chrome text-sm font-bold">
                      {plan.name}
                    </span>
                    {hot ? (
                      <span
                        lang="en"
                        className="chrome border border-black bg-black px-2 py-0.5 text-[10px] leading-none text-hot"
                      >
                        HOT!
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-7 text-sm ${hot ? "text-black/70" : "text-dim"}`}
                  >
                    {plan.unit}
                  </p>
                  <p
                    lang="en"
                    className={`font-mono text-4xl font-bold ${hot ? "text-black" : "text-acid"}`}
                  >
                    {plan.price}
                  </p>
                  <p className={`mt-2 text-sm ${hot ? "text-black/70" : "text-dim"}`}>
                    {plan.duration}
                  </p>

                  <p
                    className={`mt-6 border-t pt-6 text-[15px] ${
                      hot ? "border-black/20 text-black/80" : "border-rule text-dim"
                    }`}
                  >
                    {plan.pitch}
                  </p>

                  <ul className="mt-6 space-y-3 text-[15px]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className={`chrome shrink-0 pt-0.5 text-[11px] ${
                            hot ? "text-black/50" : "text-acid"
                          }`}
                        >
                          ▸
                        </span>
                        <span className={hot ? "text-black/90" : "text-ink/90"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 pt-2">
                    <Button
                      href="#contact"
                      variant={hot ? "invert" : "ghost"}
                      className="w-full justify-center"
                    >
                      เลือกแพ็กเกจนี้
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-dim">
          ราคาข้างต้นยังไม่รวมภาษีมูลค่าเพิ่ม และไม่รวมค่า API กับค่าเซิร์ฟเวอร์
          ที่คุณจ่ายให้ผู้ให้บริการโดยตรง เราประเมินตัวเลขส่วนนี้ให้ตั้งแต่ขั้นคุยโจทย์
        </p>
      </div>
    </section>
  );
}
