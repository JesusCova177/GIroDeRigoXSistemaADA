export interface HighlightBlockContent {
  title?: string;
  subtitle?: string;
  topText?: string;
  middleText?: string;
  bottomText?: string;
}

interface HighlightBlockCardProps {
  content: HighlightBlockContent;
}

export function HighlightBlockCard({ content }: HighlightBlockCardProps) {
  const { title, subtitle, topText, middleText, bottomText } = content || {};

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="mb-8 w-full flex flex-col items-center">
        {title && (
          <h2
            className="text-2xl text-center font-timberwolf font-black text-[#41563F] italic uppercase mb-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <h3
            className="text-2xl font-montserrat font-black text-[#F04E96] text-center uppercase"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>

      {/* Main Content Box */}
      <div className="w-full bg-[#E9EBE4] rounded-[2rem] p-6 sm:p-10 flex flex-col shadow-inner divide-y-2 divide-[#d7e0d3]">
        {/* Top Text */}
        {topText && (
          <div className="py-6 flex justify-center items-center">
            <p
              className="text-lg sm:text-xl text-[#41563F] font-montserrat font-medium text-center leading-relaxed"
              dangerouslySetInnerHTML={{ __html: topText }}
            />
          </div>
        )}

        {/* Middle Text */}
        {middleText && (
          <div className="py-6 flex justify-center items-center">
            <p
              className="text-lg sm:text-xl text-[#41563F] font-montserrat font-medium text-center leading-relaxed"
              dangerouslySetInnerHTML={{ __html: middleText }}
            />
          </div>
        )}

        {/* Bottom Text */}
        {bottomText && (
          <div className="py-6 flex justify-center items-center">
            <p
              className="text-2xl sm:text-3xl text-[#F04E96] font-montserrat font-black italic text-center uppercase leading-snug"
              dangerouslySetInnerHTML={{ __html: bottomText }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
