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
    <div className="flexflex-col items-center rounded-2xl bg-white border-2 border-[#f8a3c9] p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-2xl w-full h-[60dvh]">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-[#f8a3c9] text-center mb-2 italic uppercase">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className=" leading-relaxed text-base sm:text-lg whitespace-pre-line font-[Montserrat-Ligth]">
            {paragraph}
          </p>
        ))}

        {list && list.length > 0 && (
          <ul className="list-disc pl-5 sm:pl-8 space-y-2 mt-4 text-gray-700 text-base sm:text-lg">
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
        <div className={`mt-6 p-4 rounded-lg border-2 ${callout.bgColor || 'bg-blue-50'} ${callout.borderColor || 'border-blue-300'}`}>
          <p className={`font-semibold ${callout.textColor || 'text-blue-900'}`}>
            {callout.text}
          </p>
        </div>
      )}
    </div>
  );
}
