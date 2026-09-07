import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { work } from "@/lib/content";

/**
 * The article-list layout lifted straight from the CYBER·ZINE reference:
 * full-bleed rows, category tag, big headline, HOT! badge, BY_ byline.
 */
export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-b border-rule scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          index="02"
          id="work-title"
          title="ผลงานที่ขึ้นระบบจริงแล้ว"
          lead="ทุกตัวเลขด้านล่างวัดจากการใช้งานหลังส่งมอบ ไม่ใช่ผลจากห้องทดลอง"
        />

        <ul className="border-t border-rule">
          {work.map((item, i) => (
            <li key={item.title}>
              <Reveal>
                <a
                  href="#contact"
                  className="group grid grid-cols-1 items-start gap-x-8 gap-y-4 border-b border-rule py-8 transition-colors duration-100 hover:bg-panel md:grid-cols-12 md:py-10"
                >
                  <div className="flex items-center gap-3 md:col-span-2">
                    <span lang="en" className="chrome text-xs text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Tag>{item.tag}</Tag>
                    {item.hot ? <Tag tone="hot">HOT!</Tag> : null}
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="text-xl font-bold leading-snug transition-colors duration-100 group-hover:text-acid md:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p lang="en" className="chrome mt-3 text-[10px] text-dim">
                      BY_<span className="font-sans normal-case tracking-normal">{item.client}</span>
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <span
                      lang="en"
                      className="block font-mono text-3xl font-bold text-acid"
                    >
                      {item.metric}
                    </span>
                    <span className="mt-1 block text-sm text-dim">{item.metricLabel}</span>
                  </div>

                  <div className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight
                      size={22}
                      aria-hidden="true"
                      className="text-rule transition-colors duration-100 group-hover:text-acid"
                    />
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
