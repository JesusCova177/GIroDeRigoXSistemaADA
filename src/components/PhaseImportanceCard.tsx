import { ChevronRight } from "lucide-react";
import { CardDecoration } from "./CardDecoration";

interface PhaseImportanceCardProps {
  content: {
    title?: string;
    intro?: string;
    sections: {
      title: string;
      content: string;
      icon?: string;
    }[];
    sectionsTitle?: string;
    callout?: { text: string };
    footer?: string | { title: string; message: string };
  };
}

export function PhaseImportanceCard({ content }: PhaseImportanceCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto ">
      {content.title && (
        <span
          className="text-2xl font-timberwolf text-center font-black mb-6 uppercase italic text-[#31563C] tracking-wider"
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
      )}

      {content.intro && (
        <div className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line font-montserrat ">
          {content.intro}
        </div>
      )}

      {content.sectionsTitle && (
        <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-black text-[#31563C] italic mb-4 uppercase">
          {content.sectionsTitle}
        </h3>
      )}

      <div className="space-y-6 sm:space-y-8">
        {content.sections.map((section, index) => (
          <div key={index} className="relative pl-2">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0">
                <div className="flex font-timberwolf items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F04E96] text-white font-black text-lg sm:text-xl italic shadow-md transform -rotate-6 border-2 border-white ring-2 ring-[#F04E96]/20 overflow-hidden">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat not-italic font-black text-[#31563C] mt-1 uppercase leading-tight">
                {section.title}
              </h3>
            </div>
            <div className="pl-12 sm:pl-14">
              <p className="leading-relaxed self-start text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {content.callout && (
        <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc] mt-6">
          <p className="text-md text-center font-light flex-1 font-montserrat  text-[#31563c] flex-shrink-0">
            <span className="font-bold font-timberwolf block mb-1">
              Regla táctica:
            </span>
            {content.callout.text}
          </p>
        </div>
      )}

      {content.footer && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc]">
            <p className="text-md text-center font-light flex-1 font-montserrat  text-[#31563c] flex-shrink-0">
              {typeof content.footer === "string"
                ? content.footer
                : content.footer.message}
            </p>
            <ChevronRight className="w-5 h-5 text-[#31563c] flex-shrink-0" />
          </div>
        </div>
      )}

      <CardDecoration />
    </div>
  );
}
