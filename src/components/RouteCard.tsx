interface RouteHeader {
  distance: string;
  ascent: string;
  maxAlt: string;
  label: string;
}

interface RouteSection {
  icon: string;
  title: string;
  content: string;
}

interface RouteCardContent {
  variant: string;
  header: RouteHeader;
  intro: string;
  sections: RouteSection[];
}

interface RouteCardProps {
  content: RouteCardContent;
}

export function RouteCard({ content }: RouteCardProps) {
  const { header, intro, sections, variant } = content;

  const isCanã = variant === 'cana';
  const accentColor = isCanã ? '#d97706' : '#e11d48';
  const borderColor = isCanã ? 'border-amber-500' : 'border-rose-500';
  const badgeBg = isCanã ? 'bg-amber-50' : 'bg-rose-50';
  const badgeText = isCanã ? 'text-amber-800' : 'text-rose-800';
  const badgeBorder = isCanã ? 'border-amber-200' : 'border-rose-200';
  const statBg = isCanã ? 'bg-amber-50' : 'bg-rose-50';
  const statText = isCanã ? 'text-amber-700' : 'text-rose-700';

  return (
    <div className={`flex rounded-2xl bg-white border-l-4 ${borderColor} p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex-col`}>
      <div className="mb-4 sm:mb-5">
        <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full border ${badgeBg} ${badgeText} ${badgeBorder} mb-3`}>
          {header.label}
        </span>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div className={`text-base sm:text-lg font-black font-titling italic ${statText}`}>{header.distance}</div>
            <div className="text-xs text-gray-500 mt-0.5">distancia</div>
          </div>
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div className={`text-base sm:text-lg font-black font-titling italic ${statText}`}>{header.ascent}</div>
            <div className="text-xs text-gray-500 mt-0.5">ascenso</div>
          </div>
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div className={`text-base sm:text-lg font-black font-titling italic ${statText}`}>{header.maxAlt}</div>
            <div className="text-xs text-gray-500 mt-0.5">alt. máx.</div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic border-l-4 pl-3 py-1"
          style={{ borderColor: accentColor }}>
          {intro}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <h3 className="text-base sm:text-lg font-titling font-black text-[#31563C] italic uppercase">
          Ventanas críticas
        </h3>
        {sections.map((section, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl"
              style={{ backgroundColor: isCanã ? '#fef3c7' : '#ffe4e6' }}>
              {section.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{section.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
