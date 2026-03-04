interface IntroCardContent {
  title: string;
  image?: string;
  paragraphs: string[];
  list?: string[];
  footer?: string;
  callout?: {
    text: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
  };
}

import { ChevronRight } from "lucide-react";

interface IntroCardProps {
  content: IntroCardContent;
}

export function IntroCard({ content }: IntroCardProps) {
  const { title, image, paragraphs, list, footer, callout } = content;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      <div className=" items-center justify-center gap-4 sm:mb-6">
        <p
          className="tracking-wide text-2xl font-timberwolf font-black text-[#31563c] text-center not-italic uppercase mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="space-y-4 self-start ml-4">
        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed self-start text-justify text-[#31563c] whitespace-pre-line text-md font-montserrat font-semibold"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}

        {list && list.length > 0 && (
          <ul className="list-disc text-[#31563c] font-montserrat font-medium self-startspace-y-2 ml-8 mt-4 text-base ">
            {list.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {footer && (
        <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc] mt-4">
          <p className="text-md font-montserrat font-light text-[#41563F] mx-1">
            {footer}
          </p>
        </div>
      )}

      {callout && (
        <div className="flex items-center font-normal text-md text-center rounded-lg px-3 py-2 bg-[#ebf3dc] mt-3">
          <p className="text-md font-montserrat font-light text-[#41563F] mx-1">
            {callout.text}
          </p>
          <ChevronRight className="w-5 h-5 text-[#31563c] flex-shrink-0" />
        </div>
      )}

      {image && (
        <div className="w-full flex justify-center mb-6 p-4 rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[400px] h-auto object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
