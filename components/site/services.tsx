import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-b border-rule scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          index="01"
          id="services-title"
          title="เราทำอะไรให้ได้บ้าง"
          lead="หกอย่างที่เราทำซ้ำมาจนรู้ว่าตรงไหนพัง และตรงไหนคุ้มที่จะลงแรง"
        />

        {/* Shared-border grid: outer edges on the container, inner edges on
            each cell, so the whole block reads as one drawn table. */}
        <div className="grid grid-cols-1 border-t border-l border-rule sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.tag}
              className="group border-r border-b border-rule"
            >
              <div className="h-full p-7 transition-colors duration-100 group-hover:bg-panel md:p-9">
                <div className="flex items-center justify-between">
                  <span lang="en" className="chrome text-xs text-acid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Tag>{service.tag}</Tag>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-[15px] text-dim">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
