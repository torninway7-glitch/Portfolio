"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span lang="en" className="chrome text-base font-bold text-ink">
            {site.name}
          </span>
          <span lang="en" className="chrome hidden text-[10px] text-dim sm:inline">
            {site.issue}
          </span>
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-dim transition-colors duration-100 hover:text-acid"
            >
              <span aria-hidden="true" className="text-rule">
                [
              </span>{" "}
              {item.label}{" "}
              <span aria-hidden="true" className="text-rule">
                ]
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="chrome hidden border border-acid bg-acid px-5 py-2.5 text-[11px] font-bold text-black transition-colors duration-100 hover:bg-ink hover:border-ink sm:inline-flex sm:items-center sm:gap-2"
          >
            คุยกับเรา <ArrowRight size={13} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            className="border border-rule p-2.5 text-ink transition-colors duration-100 hover:border-acid hover:text-acid md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="เมนูมือถือ"
          className="border-t border-rule bg-bg md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-rule px-5 py-4 text-base text-ink transition-colors duration-100 hover:bg-panel hover:text-acid"
            >
              {item.label}
              <span aria-hidden="true" className="chrome text-xs text-dim">
                →
              </span>
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="chrome flex items-center justify-center gap-2 bg-acid px-5 py-4 text-xs font-bold text-black"
          >
            คุยกับเรา <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
