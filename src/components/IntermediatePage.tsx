import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  onContinue: () => Promise<void>;
  onBack?: () => void;
}

export default function IntermediatePage({ onContinue, onBack }: Props) {
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true);
    try {
      await onContinue();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh m-auto flex flex-col gap-6 self-center bg-white p-8 max-w-md text-center items-center justify-center">
      <img src="./img/giroderigoweb_.webp" alt="" />
      <img src="./img/giroderigoweb.webp" alt="" />
      <h2 className="text-6xl font-bold mb-4 font-timberwolf text-[#41563f] ">
        ¡bienvenid<span className="">@</span>!
      </h2>
      <p className="text-gray-600 mb-6 font-montserrat">
        Llega al evento con máxima
        <br />
        energia y cero improvisacion
      </p>

      <p className="font-montserrat">
        Conoce <strong>cada fase</strong> de esta ruta:
      </p>

      <div className="border rounded-xl shadow-[3px_4px_5px_rgba(0,0,0,0.08)]">
        <div className="flex flex-row gap-4 justify-center p-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>

        <p></p>
      </div>

      <p className="font-montserrat">
        Si vos queres llegar bien al Giro de rigo,
        <br />
        esto no se construye en una <br />
        semana. <strong>Se construye desde ya</strong>
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
          className="px-4 py-3 rounded-md bg-[#F04E96] text-white font-black flex items-center gap-2 text-4xl italic font-builttitling "
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Preparando...
            </>
          ) : (
            "¡Pilas! Vamos a tope"
          )}
        </button>
      </div>
    </div>
  );
}
