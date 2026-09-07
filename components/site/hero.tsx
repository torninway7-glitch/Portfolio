import { ArrowRight } from "lucide-react";
import { Backdrop } from "@/components/ui/backdrop";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <Backdrop />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 md:px-8 md:pt-32 md:pb-24">
        {/* The Thai half sits outside `.chrome`: its letter-spacing detaches
            Thai tone marks and lets the line break mid-syllable. */}
        <p className="flex items-start gap-2.5 text-[11px] text-acid">
          <span
            aria-hidden="true"
            className="caret mt-[0.5em] inline-block size-1.5 shrink-0 rounded-full bg-acid"
          />
          <span>
            <span lang="en" className="chrome">
              {"//"} SYSTEM ONLINE
            </span>
            <span className="ml-2 text-xs">— รับงานเดือนนี้อีก 2 โปรเจกต์</span>
          </span>
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(2.25rem,8vw,5.5rem)] font-bold leading-[1.12] tracking-tight">
          เราสร้าง <span className="text-acid">AI</span> ที่ใช้งานได้จริง
          <br className="hidden sm:block" /> ไม่ใช่แค่เดโม
          {/* Keeps the caret from orphaning onto its own line when the
              headline wraps on narrow screens. */}
          <span className="whitespace-nowrap">
            สวยๆ
            <span aria-hidden="true" className="caret caret-box ml-3" />
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg text-dim md:text-xl">
          เอเจนซี่ AI ที่พาโปรเจกต์ไปจนถึงวันที่มีคนใช้จริงทุกวัน
          ตั้งแต่คุยโจทย์ครั้งแรกจนส่งมอบซอร์สโค้ดให้เป็นของคุณ
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#contact">
            เริ่มโปรเจกต์ <ArrowRight size={14} aria-hidden="true" />
          </Button>
          <Button href="#work" variant="ghost">
            ดูผลงาน →
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-l border-rule md:mt-24 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-b border-rule px-5 py-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  lang="en"
                  className="block font-mono text-3xl font-bold text-acid md:text-4xl"
                >
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-sm leading-snug text-dim">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
