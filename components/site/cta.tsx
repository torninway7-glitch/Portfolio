import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

export function Cta() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="border-b border-rule bg-acid text-black scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p lang="en" className="chrome text-[11px] text-black/60">
          {"//"} 06 — ติดต่อ
        </p>

        <h2
          id="cta-title"
          className="mt-5 max-w-4xl text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.14] tracking-tight"
        >
          เล่าโจทย์ให้ฟัง 90 นาที แล้วเราจะบอกตรงๆ ว่าคุ้มทำไหม
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-black/70">
          ไม่มีค่าใช้จ่าย ไม่มีการตามตื้อ ถ้าเราคิดว่าโจทย์ของคุณยังไม่ควรใช้ AI
          เราจะบอกแบบนั้นตั้งแต่ครั้งแรกที่คุย
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${site.email}`}
            className="chrome inline-flex items-center justify-center gap-2 border border-black bg-black px-6 py-3.5 text-xs font-bold text-acid transition-colors duration-100 hover:bg-transparent hover:text-black active:translate-y-px"
          >
            ส่งบรีฟทางอีเมล <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a
            href="https://line.me/R/ti/p/~ailab"
            className="chrome inline-flex items-center justify-center gap-2 border border-black/40 px-6 py-3.5 text-xs font-bold text-black transition-colors duration-100 hover:border-black hover:bg-black hover:text-acid active:translate-y-px"
          >
            คุยผ่าน LINE {site.line}
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-y-6 border-t border-black/20 pt-8 sm:grid-cols-3">
          <div>
            <dt className="chrome text-[10px] text-black/60">EMAIL</dt>
            <dd lang="en" className="mt-1.5 font-mono text-sm font-bold">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="chrome text-[10px] text-black/60">LINE</dt>
            <dd lang="en" className="mt-1.5 font-mono text-sm font-bold">
              {site.line}
            </dd>
          </div>
          <div>
            <dt className="chrome text-[10px] text-black/60">TEL</dt>
            <dd lang="en" className="mt-1.5 font-mono text-sm font-bold">
              <a href={`tel:${site.phone}`} className="hover:underline">
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
