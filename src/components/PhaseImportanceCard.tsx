import { Target, Zap, TrendingUp } from "lucide-react";

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
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "target":
        return <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#f89fc7]" />;
      case "zap":
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#f89fc7]" />;
      case "trending":
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#f89fc7]" />;
      default:
        return <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#f89fc7]" />;
    }
  };

  return (
    <div className="flex rounded-2xl bg-white  border-l-4 border-blue-500 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex-col">
      {content.title && (
        <h2 className="text-2xl sm:text-3xl font-titling font-black mb-6 sm:mb-8 uppercase italic">
          {content.title}
        </h2>
      )}

      {content.intro && (
        <div className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
          {content.intro}
        </div>
      )}

      {content.sectionsTitle && (
        <h3 className="text-lg sm:text-xl md:text-2xl font-titling font-black text-[#31563C] italic mb-4 uppercase">
          {content.sectionsTitle}
        </h3>
      )}

      <div className="space-y-4 sm:space-y-6">
        {content.sections.map((section, index) => (
          <div key={index}>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-1">{getIcon(section.icon)}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-titling font-black text-[#31563C] italic">
                {section.title}
              </h3>
            </div>
            <div className="pl-0 sm:pl-9">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          </div>
        ))}

      </div>
      
      {content.callout && (
        <div className="mt-6 sm:mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
           <p className="text-gray-800 font-medium">
             <span className="font-bold block mb-1">Regla táctica:</span>
             {content.callout.text}
           </p>
        </div>
      )}

      {content.footer && (
         <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
               <p className="text-sm sm:text-base font-black text-yellow-900 uppercase italic text-center tracking-wide leading-relaxed">
                 {typeof content.footer === 'string' ? content.footer : content.footer.message}
               </p>
            </div>
         </div>
      )}
    </div>
  );
}
