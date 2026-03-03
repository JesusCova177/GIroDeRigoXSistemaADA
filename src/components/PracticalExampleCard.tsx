import { CheckCircle2, ChevronRight } from "lucide-react";

export interface FrameBlock {
  condition?: string;
  items?: string[];
  showCheckmarks?: boolean;
  image?: string | string[];
  imagePosition?: "top" | "bottom";
  renderMode?: "chips" | "paragraphs";
}

export interface PracticalExampleContent {
  title?: string;
  subtitle?: string;
  introText?: string;
  mainCondition?: string;
  frameBlocks: FrameBlock[];
  footerText?: string;
}

interface PracticalExampleCardProps {
  content: PracticalExampleContent;
}

export function PracticalExampleCard({ content }: PracticalExampleCardProps) {
  const { title, subtitle, introText, mainCondition, frameBlocks, footerText } =
    content || {};

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6 w-full flex flex-col items-center">
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

      {/* Intro Texts */}
      <div className="space-y-4 mb-4 text-center w-full px-2">
        {introText && (
          <p
            className="text-base text-[#41563F] text-justify font-montserrat font-semibold leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: introText }}
          />
        )}
        {mainCondition && (
          <p className="text-[15px] text-[#41563F] font-montserrat font-medium">
            {mainCondition}
          </p>
        )}
      </div>
      {/* Frame / Block Container */}
      {frameBlocks && frameBlocks.length > 0 && (
        <div className="w-full bg-[#E9EBE4] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-4 shadow-inner">
          {frameBlocks.map((block, index) => {
            const renderImage = () => {
              if (!block.image) return null;
              return (
                <div className="flex justify-center items-center gap-4 mt-2 mb-2">
                  {Array.isArray(block.image) ? (
                    block.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt="Logo"
                        className="h-32 sm:h-20 object-contain mix-blend-multiply"
                      />
                    ))
                  ) : (
                    <img
                      src={block.image}
                      alt="Logo"
                      className="h-24 object-contain mix-blend-multiply"
                    />
                  )}
                </div>
              );
            };

            return (
              <div key={index} className="flex flex-col items-center gap-4">
                {/* Block Title/Condition */}
                {block.condition && (
                  <h4 className="text-lg font-montserrat font-bold text-[#41563F] text-center whitespace-pre-line">
                    {block.condition}
                  </h4>
                )}

                {/* Top Image Render */}
                {block.imagePosition === "top" && renderImage()}

                {/* Items */}
                {block.items && block.items.length > 0 && (
                  <>
                    {block.renderMode === "paragraphs" ? (
                      <div className="space-y-4 text-left w-full">
                        {block.items.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className="text-base text-[#41563F] font-montserrat leading-relaxed"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center items-center gap-2">
                        {block.items.map((item, itemIndex) => {
                          if (item.trim() === "+") {
                            return (
                              <span
                                key={itemIndex}
                                className="text-2xl font-montserrat font-black text-[#41563F] mx-1"
                              >
                                +
                              </span>
                            );
                          }

                          return (
                            <span
                              key={itemIndex}
                              className="inline-flex items-center gap-2 bg-[#d7e0d3]/80 px-3 py-1.5 rounded-lg text-[15px] text-[#41563F] font-montserrat font-semibold shadow-sm border border-[#c4cfbe]/50"
                            >
                              {block.showCheckmarks && (
                                <CheckCircle2 className="w-[18px] h-[18px] text-[#556e52] flex-shrink-0" />
                              )}
                              <span
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}

                {/* Bottom Image Render (Default) */}
                {block.imagePosition !== "top" && renderImage()}
              </div>
            );
          })}
        </div>
      )}

      {footerText && (
        <div className="mt-4 w-full flex items-center font-normal text-sm text-center rounded-lg px-3 py-2 bg-[#ebf3dc]">
          <div className="flex-1">
            <p className="text-sm text-center font-light font-montserrat text-[#31563c] whitespace-pre-line">
              {footerText}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#31563c] flex-shrink-0" />
        </div>
      )}
    </div>
  );
}
