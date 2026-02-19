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
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white border-l-4 border-blue-500 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 overflow-y-auto h-[60vh] shadow-xl">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-titling font-black text-[#31563C] text-center mb-2 italic uppercase">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

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
