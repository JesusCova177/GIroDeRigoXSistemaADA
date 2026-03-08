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

import { CardDecoration } from "./CardDecoration";

interface RouteCardContent {
  variant: string;
  title?: string; // Added title
  imageTitle?: string; // Added image for title
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

  const { header, intro, sections, variant, title, imageTitle, image } =
    content;

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

  // ADA Design System - Proposal 3 ("Technical Modern")

  return (
    <div
      className={`flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto`}
    >
      {imageTitle && (
        <div className="w-[10rem] h-auto mb-2  ">
          <img
            src={imageTitle}
            alt="Perfil Altimétrico"
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="mb-6 w-full flex flex-col items-center">
        <span
          className={`inline-block text-xs font-black font-montserrat tracking-widest px-3 py-1 bg-[#41563F] text-white uppercase mb-6`}
        >
          {header.label}
        </span>

        {/* Technical Stats Layout */}
        <div className="flex justify-center items-end gap-6 mb-6 w-full border-b border-[#41563F]/10 pb-6">
          <div className="text-center group">
            <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase mb-1 group-hover:text-[#F04E96] transition-colors">
              Distancia
            </div>
            <div className="text-2xl sm:text-3xl font-black font-titling italic text-[#41563F]">
              {header.distance}
            </div>
          </div>
          <div className="h-10 w-px bg-[#41563F]/10"></div>
          <div className="text-center group">
            <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase mb-1 group-hover:text-[#F04E96] transition-colors">
              Ascenso
            </div>
            <div className="text-2xl sm:text-3xl font-black font-titling italic text-[#41563F]">
              {header.ascent}
            </div>
          </div>
          <div className="h-10 w-px bg-[#41563F]/10"></div>
          <div className="text-center group">
            <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase mb-1 group-hover:text-[#F04E96] transition-colors">
              Alt. Máx
            </div>
            <div className="text-2xl sm:text-3xl font-black font-titling italic text-[#41563F]">
              {header.maxAlt}
            </div>
          </div>
        </div>

        {image && (
          <div className="w-full mb-6 p-2 md:w-[24rem] ">
            <img
              src={image}
              alt="Perfil Altimétrico"
              className="w-full h-auto"
            />
          </div>
        )}

        <p className="text-base text-[#41563F] font-montserrat font-medium leading-relaxed text-center px-4">
          {intro}
        </p>
      </div>

      <div className="w-full mt-2">
        {sections.length > 0 && (
          <div className="text-center mb-6">
            <h3 className="inline-block text-lg font-titling font-black text-[#F04E96] italic uppercase border-b-2 border-[#F04E96] pb-1 px-4">
              Ventanas Críticas
            </h3>
          </div>
        )}

        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3  border-l-4 border-[#F04E96] shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-2xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold font-titling italic text-[#41563F] uppercase">
                  {section.title}
                </h4>
                <p className="text-sm text-gray-600 font-montserrat leading-snug">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CardDecoration />
    </div>
  );
}
