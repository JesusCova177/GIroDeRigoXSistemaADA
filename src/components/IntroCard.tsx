interface IntroCardContent {
  title: string;
  paragraphs: string[];
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
  const { title, paragraphs, callout } = content;

  return (
    <div className="flex rounded-2xl bg-white p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex-col">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-[#31563C] text-center mb-2 italic uppercase">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index === 0 ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base"}
            dangerouslySetInnerHTML={{ __html: paragraph.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-gray-900">$1</strong>'
            )}}
          />
        ))}

        {callout && (
          <div className={`bg-gradient-to-r ${callout.bgColor || 'from-green-50 to-emerald-50'} border-l-4 ${callout.borderColor || 'border-green-500'} p-3 sm:p-4 rounded-r-xl my-4 sm:my-6`}>
            <p className={`${callout.textColor || 'text-green-900'} font-semibold text-sm sm:text-base`}>
              {callout.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
