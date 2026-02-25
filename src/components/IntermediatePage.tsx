import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  onContinue: () => Promise<void>;
  onBack?: () => void;
}

export default function IntermediatePage({ onContinue, onBack }: Props) {
  const [loading, setLoading] = useState(false);
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const messages = [
    `Fase 1: Preparación física y mental para el reto.`,
    `Fase 2: Optimización corporal y nutricional.`,
    `Fase 3: Estrategia y adaptación en ruta.`,
    `Fase 4: Tapering y recuperación final.`,
  ];
  const handleBtnClick = (idx: number) => {
    setActiveBtn(idx);
  };
  const handleContinue = async () => {
    setLoading(true);
    try {
      await onContinue();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-dvh scroll-padding-top
       grid-rows-1 bg-[#f8fbf2] flex flex-col justify-center items-center md:grid md:grid-cols-1 "
    >
      <div className="flex flex-col justify-center items-center pl-12 pr-12 pt-8 pb-8">
        <img
          src="./img/giroderigoweb_.webp"
          alt=""
          className="mb-4 h-auto w-86 md:w-96 md:h-auto"
        />
        <h2 className="text-3xl text-center font-bold font-timberwolf text-[#41563f] mb-4 md:text-4xl">
          ¡bienvenidos al!
        </h2>
        <img
          src="./img/giroderigoweb.webp"
          alt=""
          className="h-48 w-auto mb-6 md:w-[18rem] md:h-auto md:mb-8"
        />

        <p className=" text-[#41563f] mb-4 font-medium font-montserrat md:text-xl text-center md:max-w-[450px]">
          Llega al evento con máxima
          <br />
          energia y cero improvisacion
        </p>

        <p className="font-montserrat font-medium text-[#41563f] mb-2 md:text-xl text-center ">
          Conoce <strong>cada fase</strong> de esta ruta:
        </p>

        <div className="border rounded-xl shadow-[3px_4px_5px_rgba(0,0,0,0.08)] mb-4 pl-4 pr-4 pt-2 pb-2 w-full max-w-md md:mb-6 ">
          <div className="flex flex-col justify-center p-2 items-center ">
            <div className="flex gap-2 justify-center p-2 md:gap-4">
              {[1, 2, 3, 4].map((num, idx) => (
                <button
                  key={num}
                  className={`btn-num w-12 h-12 rounded-xl font-builttitling text-2xl flex items-center justify-center border fon border-[#41563F] text-[#41563F] hover:bg-[#41563F] hover:text-white transition-colors md:w-20 md:h-20 md:text-5xl ${activeBtn === idx ? "bg-[#41563F] text-white" : ""}`}
                  onClick={() => handleBtnClick(idx)}
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="mt-2 font-medium text-center text-[#41563F] font-montserrat min-h-[32px] md:text-xl">
              {activeBtn !== null
                ? messages[activeBtn]
                : "Selecciona una fase para ver el detalle."}
            </p>
          </div>
        </div>

        <p className="font-montserrat font-medium text-[#41563f] text-center mb-4 md:text-xl max-w-[450px]">
          Si vos queres llegar bien al
          <br /> Giro de rigo, esto no se construye en una semana.
          <strong> Se construye desde ya</strong>
        </p>

        <div className="flex gap-3 justify-center ">
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-3 rounded-xl bg-gray-100 text-gray-800 hidden"
              disabled={loading}
            >
              Volver
            </button>
          )}

          <button
            onClick={handleContinue}
            disabled={loading}
            className="px-4 py-3 rounded-md bg-[#F04E96] text-white font-black flex items-center gap-2 text-xl italic font-builttitling md:text-3xl md:mt-4 "
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Preparando...
              </>
            ) : (
              "¡Click aqui y vamos a tope!"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
