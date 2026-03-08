import React from "react";
import { CardDecoration } from "./CardDecoration";

export function FarewellCard() {
  return (
    <div className="relative flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-8 mb-6 sm:mb-8 shadow-xl max-w-2xl mx-auto overflow-hidden">
      <div className=" md:block absolute top-0 left-0 w-[12rem] h-auto transform -rotate-12">
        <img src="/img/rosas.webp" alt="" />
      </div>

      <div className=" md:block absolute bottom-0 right-0 w-[12rem] h-auto transform rotate-[160deg]">
        <img src="/img/rosas.webp" alt="" />
      </div>

      <div className="w-full flex flex-col justify-center">
        {/* Top copy */}
        <div className="w-full flex flex-col items-center text-center ">
          <p className="text-xl md:text-3xl font-montserrat text-[#31563c] leading-snug">
            Espero hayas{" "}
            <span className="font-bold">
              {" "}
              aprendido <br /> mucho{" "}
            </span>{" "}
            en este
          </p>

          <span className="inline-block px-4 bg-[#F04E96] text-white font-timberwolf text-4xl  md:text-5xl uppercase ">
            roadmap
          </span>

          <p className="mt-1 text-3xl md:text-4xl font-timberwolf uppercase  text-[#31563c]">
            a tope en
          </p>

          <div className="leading-tight mt-1">
            <img
              src="/img/giroderigoweb.webp"
              alt="Giro de Rigo"
              className="h-36 md:h-48 w-auto"
            />
          </div>
        </div>

        {/* Central illustration placeholder - you can replace with your collage */}
        <div className="w-full flex justify-center">
          <img
            src="/img/inicio.webp"
            alt=""
            className="h-[16rem] w-auto md:h-[20rem] "
          />
        </div>

        {/* Bottom farewell + credits */}
        <div className="w-full flex flex-col items-center gap-3 text-center">
          <p className="text-4xl md:text-5xl font-timberwolf font-black italic text-[#31563c]">
            ¡Nos vemos pronto!
          </p>

          <div className="flex flex-col items-center gap-1 text-[9px] sm:text-[11px] text-[#383838]/80 font-montserrat uppercase tracking-[0.25em]">
            <img
              src="/img/giroderigoweb_.webp"
              alt=""
              className="h-auto w-[20rem] md:w-[24rem]"
            />
          </div>
        </div>
      </div>

      <CardDecoration />
    </div>
  );
}
