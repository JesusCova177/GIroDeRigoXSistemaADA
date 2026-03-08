import { CheckCircle2 } from "lucide-react";
import { CardDecoration } from "./CardDecoration";

export interface PocketBottleSection {
  title: string;
  description?: string;
  chipLabel?: string;
  image?: string;
  note?: string;
}

export interface PocketBottleCardContent {
  sections: PocketBottleSection[];
}

interface PocketBottleCardProps {
  content: PocketBottleCardContent;
}

export function PocketBottleCard({ content }: PocketBottleCardProps) {
  const { sections } = content;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto w-full">
      <div className="w-full flex flex-col gap-10">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-timberwolf font-black text-[#41563F] italic uppercase text-center">
              {section.title}
            </h2>

            {section.description && (
              <p className="text-sm sm:text-base text-[#41563F] font-montserrat text-center leading-relaxed">
                {section.description}
              </p>
            )}

            {section.chipLabel && (
              <div className="mt-2 mb-2">
                <span className="inline-flex items-center gap-2 bg-[#d7e0d3]/80 px-3 py-1.5 rounded-lg text-[15px] text-[#41563F] font-montserrat font-semibold shadow-sm border border-[#c4cfbe]/50">
                  <CheckCircle2 className="w-4 h-4 text-[#556e52]" />
                  {section.chipLabel}
                </span>
              </div>
            )}

            {(section.image || section.note) && (
              <div className="w-full bg-[#eef3e9] rounded-2xl px-6 py-6 flex flex-col items-center gap-4">
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-[260px] h-auto object-contain"
                  />
                )}
                {section.note && (
                  <p className="text-sm sm:text-base text-[#41563F] font-montserrat text-center leading-relaxed whitespace-pre-line">
                    {section.note}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <CardDecoration />
    </div>
  );
}
