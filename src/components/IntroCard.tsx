interface IntroCardContent {
  title: string;
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

interface IntroCardProps {
  content: IntroCardContent;
}

export function IntroCard({ content }: IntroCardProps) {
  const { title, paragraphs, list, footer, callout } = content;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl w-full">
      <div className=" items-center justify-center gap-4 sm:mb-6">
        <p
          className="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-builttitling font-black text-[#F04E96] text-center italic uppercase mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="space-y-4 self-start ml-4">
        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed self-start text-[#31563c] text-[clamp(0.8rem,3vw,1rem)] md:text-[clamp(1rem,2vw,2rem)] whitespace-pre-line font-montserrat "
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}

        {list && list.length > 0 && (
          <ul className="list-disc pl-5 self-start sm:pl-8 space-y-2 ml-8 mt-4 text-gray-700 text-base sm:text-lg">
            {list.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {footer && (
        <div className="mt-8 pt-4 border-t border-gray-100">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
            <p className="text-sm sm:text-base font-black text-yellow-900 uppercase italic text-center tracking-wide leading-relaxed">
              {footer}
            </p>
          </div>
        </div>
      )}

      {callout && (
        <div
          className={`mt-6 p-4 rounded-lg border-2 ${callout.bgColor || "bg-blue-50"} ${callout.borderColor || "border-blue-300"}`}
        >
          <p
            className={`font-semibold ${callout.textColor || "text-blue-900"}`}
          >
            {callout.text}
          </p>
        </div>
      )}
    </div>
  );
}
