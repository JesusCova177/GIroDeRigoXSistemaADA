import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";

interface CTACardProps {
  onNavigateToStage?: (stageNumber: number) => void;
  onNavigateNext?: () => void;
  currentStage?: number;
}

type ActiveModal = 1 | 2 | null;

interface ModalPhase {
  title: string;
  subtitle?: string;
  items: string[];
}

interface ModalContent {
  title: string;
  phases: ModalPhase[];
}

const MODAL_DATA: Record<1 | 2, ModalContent> = {
  1: {
    title: "Fundamentos ADA - Detalles Completos",
    phases: [
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" class="modalIcon" viewBox="0 0 24 24" width="24" height="24"><path d="M23.729,22.314a1,1,0,0,1-1.458,1.371l-5.483-5.839c-1.036.033-5.807.175-4.312-2.08a.985.985,0,0,1,.981-.254,8.055,8.055,0,0,0,3.458.29,1.259,1.259,0,0,1,1.09.4ZM15,14a4.99,4.99,0,0,0,3.536-1.462l5.171-5.172A1,1,0,1,0,22.293,5.95l-5.171,5.172a3,3,0,0,1-3.406.576l6.991-6.991a1,1,0,1,0-1.414-1.414L12.3,10.284a3,3,0,0,1,.576-3.406L18.05,1.707A1,1,0,0,0,16.636.293L11.464,5.464a5.01,5.01,0,0,0-.635,6.293L.293,22.293a1,1,0,0,0,1.414,1.414L12.243,13.171A5,5,0,0,0,15,14ZM5.452,12.965c.829.781,1.594-.256,2.151-.811a2,2,0,0,0,.539-1.8c-.617-1.722.891-3.732-.357-5.117L3.329.573A1.962,1.962,0,0,0,0,1.952C.237,6.566,1.935,8.92,5.452,12.965Z"/></svg> Fase de Alimentación`,
        subtitle: "Fundamentos nutricionales del día a día",
        items: [
          'Cómo tomar decisiones de comida con criterio (no "a punta de hambre")',
          "Equilibrio nutricional y porciones",
          "Macronutrientes (carbohidratos, proteínas, grasas) y su función real",
          "Fibra, saciedad y control del impacto glucémico",
          "Calorías: cantidad vs calidad",
          "Estrategias prácticas: orden de alimentos, hambre real vs ansiedad",
          "Compras inteligentes y preparación simple de comidas (sistemas fáciles)",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="M23,11h-1V6c0-1.654-1.346-3-3-3s-3,1.346-3,3v5H8V6c0-1.654-1.346-3-3-3s-3,1.346-3,3v5H1c-.552,0-1,.448-1,1s.448,1,1,1h1v5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5h8v5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5h1c.552,0,1-.448,1-1s-.448-1-1-1Z"/>
</svg> Fase de Actividad Física`,
        subtitle: "Bici + energía + zonas",
        items: [
          "Cómo combinar fuerza, aeróbico y resistencia",
          "Cómo funciona el gasto energético en bicicleta",
          "Fases metabólicas (glucógeno, oxidación de grasa, glucosa, lactato)",
          "Zonas de entrenamiento (1 a 5) y cómo calcularlas",
          "Por qué la Zona 2 sí importa",
          "Fuerza para rendimiento, prevención de lesiones y metabolismo",
          "Nutrición estratégica según la zona (antes, durante y después)",
          "Hidratación y electrolitos",
          "Recuperación y estructura semanal base de entrenamiento",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M9,9.5A2.5,2.5,0,1,1,6.5,7,2.5,2.5,0,0,1,9,9.5ZM24,12V10a4,4,0,0,0-4-4H15a4,4,0,0,0-4,4v2ZM2,14V3A1,1,0,0,0,0,3V21a1,1,0,0,0,2,0V19H22v2a1,1,0,0,0,2,0V14Z"/></svg> Fase de Descanso`,
        subtitle: "Sueño, recuperación y rutinas",
        items: [
          "Por qué el descanso acelera resultados (no solo dormir)",
          "Cómo el sueño mejora recuperación, quema de grasa y regulación hormonal",
          "Estrategias prácticas para dormir mejor (sol, café, alcohol, cena, pantallas)",
          "Ambiente ideal para dormir",
          "Mitos del descanso",
          "Señales de fatiga/sobreentrenamiento",
          "Ejemplo de rutina diaria estructurada (mañana, tarde y noche)",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M9,0c-1.9,0-3.49,1.33-3.9,3.1-1.77,.41-3.1,2-3.1,3.9v.02c-1.25,.94-2,2.41-2,3.98,0,.89,.24,1.74,.69,2.5-.45,.76-.69,1.61-.69,2.5,0,1.69,.86,3.24,2.27,4.17,.72,2.28,2.81,3.83,5.23,3.83,.01,0,.03,0,.04,0,1.94-.01,3.46-1.7,3.46-3.64V2.01C11,.9,10.11,0,9,0Zm4,2.01V20.36c0,1.94,1.52,3.63,3.46,3.64,.01,0,.03,0,.04,0,2.42,0,4.51-1.56,5.23-3.83,1.41-.92,2.27-2.48,2.27-4.17,0-.89-.24-1.74-.69-2.5,.45-.76,.69-1.61,.69-2.5,0-1.57-.75-3.04-2-3.98v-.02c0-1.9-1.33-3.49-3.1-3.9C18.49,1.33,16.9,0,15,0c-1.11,0-2,.9-2,2.01Z"/></svg> Fase de Mentalidad y Balance`,
        subtitle: "Sostenibilidad real",
        items: [
          "Cómo identificar barreras mentales y excusas que frenan tu progreso",
          "Disciplina, constancia y hábitos pequeños que sí se sostienen",
          "Reorganización de rutina para cumplir el entrenamiento",
          "Manejo de presión social (salidas, comentarios, entorno)",
          'Flexibilidad: evitar el "todo o nada"',
          "Estrategias para comer fuera sin perder el control",
          "Manejo del hambre emocional y ansiedad",
          "Mentalidad positiva + revisión del progreso a largo plazo",
        ],
      },
    ],
  },
  2: {
    title: "Fundamentos ADA + Estrategia Nutricional ADA",
    phases: [
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m5.5,23h-3c-.828,0-1.5-.672-1.5-1.5v-3c0-.828.672-1.5,1.5-1.5h3c.828,0,1.5.672,1.5,1.5v3c0,.828-.672,1.5-1.5,1.5Zm9.5-1.5v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm0-16v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm8,16v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm-12-8v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Zm8,0v-3c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5h3c.828,0,1.5-.672,1.5-1.5Z"/>
</svg>
 Acceso completo a Fundamentos ADA`,
        items: [
          "Método base de alimentación, actividad física, descanso y mentalidad",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m6,0C2.686,0,0,2.686,0,6s2.686,6,6,6,6-2.686,6-6S9.314,0,6,0Zm3.692,5.722l-2.712,2.605c-.452.446-1.052.671-1.653.671s-1.204-.225-1.664-.674l-1.132-1.108c-.395-.387-.401-1.02-.015-1.414.386-.395,1.019-.401,1.414-.016l1.132,1.108c.144.142.379.141.522,0l2.723-2.614c.398-.381,1.032-.37,1.414.029.383.398.37,1.031-.029,1.414Zm3.577,9.759c-.813.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm7.73,1.598v2.922c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4v-6.589c.927.377,1.939.589,3,.589,4.411,0,8-3.589,8-8,0-.339-.028-.672-.069-1h3.069c1.193,0,2.254.536,2.987,1.367-.48.209-.933.5-1.325.892l-6.808,6.808c-1.187,1.188-1.855,2.798-1.855,4.478v1.455c0,1.105.895,2,2,2h1.455c1.679,0,3.29-.667,4.478-1.855l3.067-3.067Z"/>
</svg> Evaluación inicial de tu caso`,
        items: [
          "A partir de formularios de datos personales, nutrición y actividad física para entender tu situación actual y construir una estrategia más precisa",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,12c0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.73,0,1.47,.07,2.18,.2,.54,.1,.9,.62,.8,1.16-.1,.54-.62,.9-1.16,.8-.59-.11-1.21-.16-1.82-.16C6.49,2,2,6.49,2,12s4.49,10,10,10,10-4.49,10-10c0-.61-.06-1.22-.16-1.82-.1-.54,.26-1.06,.8-1.16,.55-.1,1.06,.26,1.16,.8,.13,.71,.2,1.45,.2,2.18ZM12.86,6.06c.55,.08,1.05-.3,1.13-.85s-.3-1.05-.85-1.13c-.38-.05-.76-.08-1.14-.08-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.38-.03-.76-.08-1.14-.08-.55-.58-.93-1.13-.85-.55,.08-.93,.58-.85,1.13,.04,.28,.06,.57,.06,.86,0,3.31-2.69,6-6,6s-6-2.69-6-6,2.69-6,6-6c.29,0,.58,.02,.86,.06Zm-2.11,3.04c-.37-.41-1-.45-1.41-.08-.85,.76-1.33,1.85-1.33,2.98,0,2.21,1.79,4,4,4,1.14,0,2.22-.49,2.98-1.33,.37-.41,.33-1.04-.08-1.41-.41-.37-1.04-.33-1.41,.08-.38,.42-.92,.67-1.49,.67-1.1,0-2-.9-2-2,0-.57,.24-1.11,.67-1.49,.41-.37,.45-1,.08-1.41Zm1.55,1.2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l4.71-4.71h2.59c.27,0,.52-.11,.71-.29l2-2c.29-.29,.37-.72,.22-1.09-.15-.37-.52-.62-.92-.62h-2V1c0-.4-.24-.77-.62-.92-.38-.16-.8-.07-1.09,.22l-2,2c-.19,.19-.29,.44-.29,.71v2.59l-4.71,4.71Z"/></svg> Estrategia nutricional aplicada a tus objetivos`,
        items: [
          "Diseñada para pérdida de grasa / rendimiento / energía / adherencia, según tu rutina y realidad",
        ],
      },
      {
        title: "📅 Plan de alimentación estructurado por tipo de día",
        items: [
          "Con organización práctica de comidas y opciones según escenarios reales, incluyendo:",
          "○ días de descanso",
          "○ días de entrenamiento corto / gym",
          "○ bici ~2 horas",
          "○ fondos de 3 horas o más (con tiempos de comida, grupos de alimentos, porciones y opciones)",
        ],
      },
      {
        title: "📖 Guía clara para interpretar el plan y aplicarlo sin enredos",
        items: [
          "Para que entiendas cómo usarlo en el día a día y cómo ajustarlo según duración/intensidad del entrenamiento",
        ],
      },
      {
        title: "⚡ Criterios de adaptación a tus entrenamientos",
        items: [
          "Para no comer igual todos los días y aprender a usar la nutrición de forma estratégica según el tipo de sesión. (En Fundamentos ADA se enseña la lógica de nutrición según zonas e intensidad)",
        ],
      },
      {
        title:
          "👥 Equipo de soporte para resolución de dudas de implementación",
        items: [
          "Acompañamiento para aclarar dudas sobre aplicación del plan, horarios, reemplazos, organización y ejecución",
        ],
      },
      {
        title: "🏥 Revisión de contexto médico general (cuando aplique)",
        items: [
          "Para ajustar la estrategia nutricional con criterio y seguridad según la información que reportes",
        ],
      },
      {
        title: "🔬 Órdenes de exámenes (si se consideran necesarios)",
        items: ["Cuando el caso lo requiera para tomar mejores decisiones"],
      },
      {
        title:
          "💊 Suplementación estratégica y priorizada (solo si hace falta)",
        items: [
          "Recomendaciones enfocadas en lo que realmente suma valor, sin llenarte de cosas innecesarias",
        ],
      },
    ],
  },
};

const CTA_MESSAGE_INTRO = "";

const TRANSITION_BUTTON_TEXT = "Seguir con el recorrido";

const CTACard: React.FC<CTACardProps> = ({
  onNavigateNext,
  onNavigateToStage,
  currentStage,
}) => {
  const [view, setView] = useState<"intro" | "plans">("intro");
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const handleBuyClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else if (onNavigateNext) {
      onNavigateNext();
    }
  };

  const modalContent = activeModal ? MODAL_DATA[activeModal] : null;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-6 sm:p-8 mb-8 shadow-xl max-w-3xl md:max-w-5xl mx-auto">
      {view === "intro" ? (
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl mb-2 font-bold tracking-tight font-timberwolf text-[#31563c] uppercase text-center">
            Tu decisión dentro de ADA
          </h3>
          <p className="text-sm sm:text-base text-[#31563c] font-semibold leading-relaxed whitespace-pre-line font-montserrat text-center">
            {CTA_MESSAGE_INTRO}
          </p>
          <div className="p-4 sm:p-5 bg-white rounded-xl shadow-md mt-2 flex flex-col items-center gap-3">
            <span className="font-montserrat font-semibold text-xs sm:text-sm text-gray-500">
              Dentro del Sistema ADA
            </span>
            <img
              src="/img/sistemaada.webp"
              alt="Sistema ADA"
              className="h-auto w-32 sm:w-40"
            />
            <p className="font-montserrat text-sm sm:text-base text-center text-[#383838]">
              Tenés dos formas de seguir: solo con Fundamentos ADA o sumando la
              Estrategia Nutricional ADA hecha para vos.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setView("plans")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base bg-[#fcc358] text-[#383838] shadow-md hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Ver opciones y precios
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium text-center max-w-md">
              Primero vas a ver claramente qué incluye cada camino. Después,
              podés seguir con las siguientes cartas y etapas del recorrido.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <header className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#383838]">
              Elige tu Plan
            </h2>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-[#383838]/70">
              Transforma tu rendimiento con el Método ADA: elegí el nivel de
              acompañamiento que mejor se ajusta a tu momento.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Fundamentos ADA */}
            <article className="bg-white rounded-3xl border-2 border-[#f3f3f3] transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <div className="pt-6 sm:pt-8 px-6 sm:px-8 flex justify-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[rgba(252,195,88,0.15)]">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="#fcc358"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C6.5 6.253 2 8.888 2 12.5m20 0c0-3.612-4.5-6.247-10-6.247m0 13c5.5 0 10-2.635 10-6.247m0 0c0 3.612-4.5 6.247-10 6.247m0-13c-5.5 0-10 2.635-10 6.247"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#383838]">
                  Fundamentos ADA
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-[#383838]/70">
                  La base educativa que todo ciclista debe dominar.
                </p>

                <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-[#f3f3f3]">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] mb-4 text-[#fcc358]">
                    💰 Inversión
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#383838]/50 mb-1">
                        Precio público
                      </p>
                      <span className="text-lg sm:text-xl line-through font-bold text-[#383838]/40">
                        $399.000
                      </span>
                    </div>
                    <div className="text-2xl text-[#fcc358]">→</div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#fcc358] mb-1">
                        Especial El Giro De Rigo
                      </p>
                      <span className="text-3xl sm:text-4xl font-black text-[#383838]">
                        $319.000
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] font-bold mt-3 text-[#fcc358]">
                    ✓ IVA incluido
                  </p>
                  <p className="text-[11px] sm:text-xs mt-2 text-[#383838]/70">
                    Un pago único. Acceso de por vida.
                  </p>
                </div>

                <div className="mb-6 sm:mb-8 flex-grow">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] mb-3 sm:mb-4 text-[#383838]/60">
                    Incluye:
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                    {[
                      "Método ADA (Alimentación, Actividad Física, Descanso y Mentalidad)",
                      "4 fases educativas paso a paso",
                      "Nutrición del día a día y nutrición aplicada a la bici",
                      "Zonas de entrenamiento y uso de energía",
                      "Hidratación, recuperación y estructura semanal base",
                      "Sueño, rutinas y descanso estratégico",
                      "Mentalidad, disciplina y flexibilidad para sostener resultados",
                      "Estrategias prácticas de compras, preparación y manejo de ansiedad",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#fcc358]">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="#383838"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[#383838]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-4 rounded-lg bg-[rgba(252,195,88,0.08)] border-l-4 border-[#fcc358]">
                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] mb-2 text-[#fcc358]">
                      Ideal para:
                    </p>
                    <p className="text-xs sm:text-sm text-[#383838]">
                      Quien quiere dejar de improvisar y entender cómo hacer las
                      cosas bien antes de pasar a un plan personalizado.
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] mb-3 text-[#383838]/60">
                      No incluye:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Plan de alimentación personalizado",
                        "Ajustes 1 a 1",
                        "Seguimiento profesional",
                        "Plan de entrenamiento individualizado",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-sm font-bold text-[#383838]/40">
                            ×
                          </span>
                          <span className="text-xs sm:text-sm text-[#383838]/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModal(1)}
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-[#fcc358] text-[#383838] shadow-md hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5"
                  >
                    <span>Más información</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBuyClick()}
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 border-2 border-[#fcc358] text-[#fcc358] bg-transparent hover:bg-[#fff7e5]"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2: Fundamentos ADA + Estrategia Nutricional */}
            <article className="bg-white rounded-3xl border-2 border-[#fcc358] shadow-[0_0_30px_rgba(252,195,88,0.15)] transition-all duration-300 hover:shadow-lg relative flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] bg-[#fcc358] text-[#383838]">
                Más popular
              </div>

              <div className="pt-6 sm:pt-8 px-6 sm:px-8 flex justify-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[rgba(252,195,88,0.15)]">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="#fcc358"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#383838]">
                  Fundamentos ADA + Estrategia Nutricional ADA
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] mb-3 sm:mb-4 text-[#fcc358]">
                  ✓ Diseñada por nutricionistas
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-[#383838]/70">
                  Todo lo de Fundamentos ADA + una estrategia de alimentación
                  diseñada para tus objetivos, tu contexto y tus entrenamientos.
                </p>

                <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-[#f3f3f3]">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] mb-4 text-[#fcc358]">
                    💰 Inversión
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#383838]/50 mb-1">
                        Precio público
                      </p>
                      <span className="text-lg sm:text-xl line-through font-bold text-[#383838]/40">
                        $890.000
                      </span>
                    </div>
                    <div className="text-2xl text-[#fcc358]">→</div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#fcc358] mb-1">
                        Especial El Giro De Rigo
                      </p>
                      <span className="text-3xl sm:text-4xl font-black text-[#383838]">
                        $719.000
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] font-bold mt-3 text-[#fcc358]">
                    ✓ IVA incluido
                  </p>
                  <p className="text-[11px] sm:text-xs mt-2 text-[#383838]/70">
                    Un pago único. Estrategia + soporte de implementación.
                  </p>
                </div>

                <div className="mb-6 sm:mb-8 flex-grow">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] mb-3 sm:mb-4 text-[#383838]/60">
                    Incluye:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 mb-2">
                    {[
                      "Todo lo del Plan Fundamentos ADA",
                      "Evaluación inicial personalizada",
                      "Estrategia nutricional aplicada a tus objetivos",
                      "Plan de alimentación por tipo de día (descanso / entreno / fondos)",
                      "Equipo de soporte para dudas de implementación",
                      "Revisión de contexto médico general",
                      "Órdenes de exámenes (si se requieren)",
                      "Suplementación estratégica (solo si aporta)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#fcc358]">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="#383838"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-[#383838]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModal(2)}
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-[#fcc358] text-[#383838] shadow-md hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5"
                  >
                    <span>Más información</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBuyClick()}
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 border-2 border-[#fcc358] text-[#fcc358] bg-transparent hover:bg-[#fff7e5]"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="pt-8 mt-6 border-t border-slate-200">
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (onNavigateNext) {
                    onNavigateNext();
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-[#31563C] text-white hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                {TRANSITION_BUTTON_TEXT}
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium text-center max-w-md">
                Elijas el plan que elijas (o incluso si decidís no tomar ninguno
                ahora), tu recorrido dentro del sistema ADA va a seguir sumando
                herramientas para el Giro.
              </p>

              {onNavigateToStage && currentStage && (
                <button
                  type="button"
                  onClick={() => onNavigateToStage(currentStage + 1)}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm sm:text-base bg-white text-[#31563C] border border-[#31563C]/30 hover:bg-[#f0f5f2] transition-all"
                >
                  Ir a la siguiente etapa
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {modalContent &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-[90%] max-h-[85vh] overflow-y-auto shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-[#f3f3f3] px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-[#383838]">
                  {modalContent.title}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-[#383838] hover:bg-gray-100 text-xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="px-6 py-4 space-y-6">
                {modalContent.phases.map((phase) => (
                  <div
                    key={phase.title}
                    className="mb-2 p-4 border-l-4 border-[#fcc358] bg-[rgba(252,195,88,0.05)] rounded-lg"
                  >
                    <p
                      className="text-base sm:text-lg font-bold text-[#383838] mb-2"
                      dangerouslySetInnerHTML={{ __html: phase.title }}
                    />
                    {phase.subtitle && (
                      <p className="text-xs sm:text-sm mb-3 text-[#383838]/70">
                        {phase.subtitle}
                      </p>
                    )}
                    <ul className="list-none space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs sm:text-sm text-[#383838]/85 leading-relaxed"
                        >
                          <span className="text-[#fcc358] font-bold">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-[#f3f3f3] text-center">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold bg-[#fcc358] text-[#383838] hover:brightness-110 hover:shadow-md transition-all"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default CTACard;
