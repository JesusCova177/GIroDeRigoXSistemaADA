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
  title?: string; // Added title
  header: RouteHeader;
  intro: string;
  image?: string; // Added image for graph
  sections: RouteSection[];
}

interface RouteCardProps {
  content: RouteCardContent;
}

export function RouteCard({ content }: RouteCardProps) {
  // Debug log to see what data we are receiving
  console.log("[RouteCard] Rendering with content:", content);

  if (!content) {
    console.error("[RouteCard] Error: content is undefined");
    return (
      <div className="flex rounded-2xl bg-white border-2 border-red-500 p-6 mb-8 flex-col">
        <p className="text-red-500 font-bold italic">
          Error: Datos de ruta no encontrados.
        </p>
      </div>
    );
  }

  const { header, intro, sections, variant, title, image } = content;

  if (!header || !header.label) {
    console.error("[RouteCard] Error: header or header.label is missing", {
      header,
    });
    return (
      <div className="flex rounded-2xl bg-white border-2 border-amber-500 p-6 mb-8 flex-col">
        <p className="text-amber-600 font-bold italic">
          Cargando detalles de la ruta...
        </p>
        <p className="text-xs text-gray-400 mt-2 italic">
          Si el error persiste, selecciona el reto nuevamente.
        </p>
      </div>
    );
  }

  const isCanã = variant === "cana";
  const accentColor = isCanã ? "#d97706" : "#e11d48";
  const borderColor = isCanã ? "border-amber-500" : "border-rose-500";
  const badgeBg = isCanã ? "bg-amber-50" : "bg-rose-50";
  const badgeText = isCanã ? "text-amber-800" : "text-rose-800";
  const badgeBorder = isCanã ? "border-amber-200" : "border-rose-200";
  const statBg = isCanã ? "bg-amber-50" : "bg-rose-50";
  const statText = isCanã ? "text-amber-700" : "text-rose-700";

  return (
    <div
      className={`flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-xl md:scale-[80%] `}
    >
      <div className="mb-4 sm:mb-5">
        {title && (
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-titling font-black text-${isCanã ? "amber-700" : "rose-700"} italic uppercase mb-4`}
          >
            {title}
          </h2>
        )}

        <span
          className={`inline-block text-sm font-bold px-3 py-1 rounded-full border ${badgeBg} ${badgeText} ${badgeBorder} mb-3`}
        >
          {header.label}
        </span>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div
              className={`text-base sm:text-lg font-black font-titling italic ${statText}`}
            >
              {header.distance}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">distancia</div>
          </div>
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div
              className={`text-base sm:text-lg font-black font-titling italic ${statText}`}
            >
              {header.ascent}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">ascenso</div>
          </div>
          <div className={`${statBg} rounded-xl p-2.5 sm:p-3 text-center`}>
            <div
              className={`text-base sm:text-lg font-black font-titling italic ${statText}`}
            >
              {header.maxAlt}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">alt. máx.</div>
          </div>
        </div>

        {image && (
          <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={image}
              alt="Perfil Altimétrico"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <p
          className="text-sm sm:text-base text-gray-700 leading-relaxed italic border pl-3 py-1 whitespace-pre-line rounded-xl"
          style={{ borderColor: accentColor }}
        >
          {intro}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {sections.length > 0 && (
          <h3 className="text-base sm:text-lg font-titling font-black text-[#31563C] italic uppercase">
            Ventanas críticas
          </h3>
        )}
        {sections.map((section, index) => (
          <div key={index} className="flex gap-3">
            <div
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl"
              style={{ backgroundColor: isCanã ? "#fef3c7" : "#ffe4e6" }}
            >
              {section.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                {section.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
