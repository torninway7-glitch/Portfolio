import { tickerItems } from "@/lib/content";

/**
 * Acid marquee strip. The item list is rendered twice and the track slides
 * exactly -50%, so the loop has no visible seam.
 */
export function Ticker() {
  const run = (
    <ul className="flex shrink-0 items-center">
      {tickerItems.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="chrome px-5 text-[11px] font-bold">{item}</span>
          <span aria-hidden="true" className="text-black/50">
            ▸
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-b border-black/20 bg-acid text-black">
      <div className="marquee-track flex w-max">
        {run}
        <div aria-hidden="true" className="flex">
          {run}
        </div>
      </div>
    </div>
  );
}
