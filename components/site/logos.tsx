import { clients } from "@/lib/content";

export function Logos() {
  return (
    <section aria-label="ลูกค้าที่ร่วมงาน" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <p className="chrome shrink-0 text-[10px] text-dim">ทำงานร่วมกับ</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {clients.map((name) => (
              <li
                key={name}
                lang="en"
                className="chrome text-sm font-bold text-dim/70 transition-colors duration-100 hover:text-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
