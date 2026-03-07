import React from "react";

export function FarewellCard() {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto">
      <div className="w-full flex flex-col justify-center">
        {/* Top copy */}
        <div className="w-full flex flex-col items-center text-center ">
          <p className="text-xl sm:text-sm font-montserrat text-[#31563c] leading-snug">
            Espero hayas
            <span className="font-bold">
              aprendido <br /> mucho
            </span>
            en este
          </p>

          <span className="inline-block px-4 bg-[#F04E96] text-white font-timberwolf text-4xl sm:text-base uppercase ">
            roadmap
          </span>

          <p className="mt-1 text-3xl font-timberwolf uppercase  text-[#31563c]">
            a tope en
          </p>

          <div className="leading-tight mt-1">
            <img
              src="/img/giroderigoweb.webp"
              alt="Giro de Rigo"
              className="h-36 w-auto"
            />
          </div>
        </div>

        {/* Central illustration placeholder - you can replace with your collage */}
        <div className="w-full flex justify-center">
          <img src="/img/inicio.webp" alt="" className="h-[16rem] w-auto" />
        </div>

        {/* Bottom farewell + credits */}
        <div className="w-full flex flex-col items-center gap-3 text-center">
          <p className="text-4xl sm:text-2xl font-timberwolf font-black italic text-[#31563c]">
            ¡Nos vemos pronto!
          </p>

          <div className="flex flex-col items-center gap-1 text-[9px] sm:text-[11px] text-[#383838]/80 font-montserrat uppercase tracking-[0.25em]">
            <img
              src="/img/giroderigoweb_.webp"
              alt=""
              className="h-auto w-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
