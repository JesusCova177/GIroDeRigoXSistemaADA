import { Target, Zap, TrendingUp } from "lucide-react";

interface PhaseImportanceCardProps {
  content: {
    sections: {
      title: string;
      text: string;
      icon?: string;
    }[];
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
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
