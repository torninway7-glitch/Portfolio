import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p
          aria-hidden="true"
          className="chrome overflow-hidden text-[10px] whitespace-nowrap text-rule select-none"
        >
          {"═".repeat(160)}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <p lang="en" className="chrome text-base font-bold">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-dim">
              เอเจนซี่ AI ที่ส่งมอบระบบใช้งานจริง ไม่ใช่เดโม
            </p>
          </div>

          <nav aria-label="เมนูท้ายหน้า">
            <p className="chrome text-[10px] text-dim">เมนู</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/80 transition-colors duration-100 hover:text-acid"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="chrome text-[10px] text-dim">ติดต่อ</p>
            <ul lang="en" className="mt-4 space-y-2.5 font-mono text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink/80 transition-colors duration-100 hover:text-acid"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-ink/80 transition-colors duration-100 hover:text-acid"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-dim">LINE {site.line}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p lang="en" className="chrome text-[10px] text-dim">
            © 2026 {site.name} — ALL SYSTEMS NOMINAL
          </p>
          <p lang="en" className="chrome text-[10px] text-dim">
            {site.issue}
          </p>
        </div>
      </div>
    </footer>
  );
}
