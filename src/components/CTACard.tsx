import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";
import { CardDecoration } from "./CardDecoration";

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
        title: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" class="modalIcon" viewBox="0 0 24 24"><path d="M23.729,22.314a1,1,0,0,1-1.458,1.371l-5.483-5.839c-1.036.033-5.807.175-4.312-2.08a.985.985,0,0,1,.981-.254,8.055,8.055,0,0,0,3.458.29,1.259,1.259,0,0,1,1.09.4ZM15,14a4.99,4.99,0,0,0,3.536-1.462l5.171-5.172A1,1,0,1,0,22.293,5.95l-5.171,5.172a3,3,0,0,1-3.406.576l6.991-6.991a1,1,0,1,0-1.414-1.414L12.3,10.284a3,3,0,0,1,.576-3.406L18.05,1.707A1,1,0,0,0,16.636.293L11.464,5.464a5.01,5.01,0,0,0-.635,6.293L.293,22.293a1,1,0,0,0,1.414,1.414L12.243,13.171A5,5,0,0,0,15,14ZM5.452,12.965c.829.781,1.594-.256,2.151-.811a2,2,0,0,0,.539-1.8c-.617-1.722.891-3.732-.357-5.117L3.329.573A1.962,1.962,0,0,0,0,1.952C.237,6.566,1.935,8.92,5.452,12.965Z"/></svg> Fase de Alimentación`,
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
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9,9.5A2.5,2.5,0,1,1,6.5,7,2.5,2.5,0,0,1,9,9.5ZM24,12V10a4,4,0,0,0-4-4H15a4,4,0,0,0-4,4v2ZM2,14V3A1,1,0,0,0,0,3V21a1,1,0,0,0,2,0V19H22v2a1,1,0,0,0,2,0V14Z"/></svg> Fase de Descanso`,
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
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9,0c-1.9,0-3.49,1.33-3.9,3.1-1.77,.41-3.1,2-3.1,3.9v.02c-1.25,.94-2,2.41-2,3.98,0,.89,.24,1.74,.69,2.5-.45,.76-.69,1.61-.69,2.5,0,1.69,.86,3.24,2.27,4.17,.72,2.28,2.81,3.83,5.23,3.83,.01,0,.03,0,.04,0,1.94-.01,3.46-1.7,3.46-3.64V2.01C11,.9,10.11,0,9,0Zm4,2.01V20.36c0,1.94,1.52,3.63,3.46,3.64,.01,0,.03,0,.04,0,2.42,0,4.51-1.56,5.23-3.83,1.41-.92,2.27-2.48,2.27-4.17,0-.89-.24-1.74-.69-2.5,.45-.76,.69-1.61,.69-2.5,0-1.57-.75-3.04-2-3.98v-.02c0-1.9-1.33-3.49-3.1-3.9C18.49,1.33,16.9,0,15,0c-1.11,0-2,.9-2,2.01Z"/></svg> Fase de Mentalidad y Balance`,
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
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M24,12c0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.73,0,1.47,.07,2.18,.2,.54,.1,.9,.62,.8,1.16-.1,.54-.62,.9-1.16,.8-.59-.11-1.21-.16-1.82-.16C6.49,2,2,6.49,2,12s4.49,10,10,10,10-4.49,10-10c0-.61-.06-1.22-.16-1.82-.1-.54,.26-1.06,.8-1.16,.55-.1,1.06,.26,1.16,.8,.13,.71,.2,1.45,.2,2.18ZM12.86,6.06c.55,.08,1.05-.3,1.13-.85s-.3-1.05-.85-1.13c-.38-.05-.76-.08-1.14-.08-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.38-.03-.76-.08-1.14-.08-.55-.58-.93-1.13-.85-.55,.08-.93,.58-.85,1.13,.04,.28,.06,.57,.06,.86,0,3.31-2.69,6-6,6s-6-2.69-6-6,2.69-6,6-6c.29,0,.58,.02,.86,.06Zm-2.11,3.04c-.37-.41-1-.45-1.41-.08-.85,.76-1.33,1.85-1.33,2.98,0,2.21,1.79,4,4,4,1.14,0,2.22-.49,2.98-1.33,.37-.41,.33-1.04-.08-1.41-.41-.37-1.04-.33-1.41,.08-.38,.42-.92,.67-1.49,.67-1.1,0-2-.9-2-2,0-.57,.24-1.11,.67-1.49,.41-.37,.45-1,.08-1.41Zm1.55,1.2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l4.71-4.71h2.59c.27,0,.52-.11,.71-.29l2-2c.29-.29,.37-.72,.22-1.09-.15-.37-.52-.62-.92-.62h-2V1c0-.4-.24-.77-.62-.92-.38-.16-.8-.07-1.09,.22l-2,2c-.19,.19-.29,.44-.29,.71v2.59l-4.71,4.71Z"/></svg> Estrategia nutricional aplicada a tus objetivos`,
        items: [
          "Diseñada para pérdida de grasa / rendimiento / energía / adherencia, según tu rutina y realidad",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M0,8v-1C0,4.243,2.243,2,5,2h1V1c0-.552,.447-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5v1H0Zm24,2v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V10H24Zm-6.168,3.152c-.384-.397-1.016-.409-1.414-.026l-4.754,4.582c-.376,.376-1.007,.404-1.439-.026l-2.278-2.117c-.403-.375-1.035-.354-1.413,.052-.376,.404-.353,1.037,.052,1.413l2.252,2.092c.566,.567,1.32,.879,2.121,.879s1.556-.312,2.108-.866l4.74-4.568c.397-.383,.409-1.017,.025-1.414Z"/></svg> Plan de alimentación estructurado por tipo de día`,
        items: [
          "Con organización práctica de comidas y opciones según escenarios reales, incluyendo:",
          "○ días de descanso",
          "○ días de entrenamiento corto / gym",
          "○ bici ~2 horas",
          "○ fondos de 3 horas o más (con tiempos de comida, grupos de alimentos, porciones y opciones)",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m5 18h17v1c0 2.761-2.239 5-5 5h-12c-1.657 0-3-1.343-3-3s1.343-3 3-3zm17-13v11h-17c-1.073.039-2.141.37-3 1.025v-12.052c0-2.744 2.224-4.973 4.967-4.973h10.033c2.761 0 5 2.239 5 5zm-8.5 7.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm1.421-8.194c-.251-1.102-1.126-1.976-2.227-2.228-.913-.208-1.845.002-2.563.575s-1.13 1.428-1.13 2.346c0 .552.448 1 1 1s1-.448 1-1c0-.306.138-.591.377-.783.142-.113.441-.289.871-.188.347.079.644.376.723.722.13.572-.209 1.028-.612 1.183-.788.303-1.359 1.172-1.359 2.066v.333c0 .552.448 1 1 1s1-.448 1-1v-.333c0-.065.062-.182.077-.2 1.406-.542 2.182-2.011 1.844-3.494z"/></svg> Guía clara para interpretar el plan y aplicarlo sin enredos`,
        items: [
          "Para que entiendas cómo usarlo en el día a día y cómo ajustarlo según duración/intensidad del entrenamiento",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" class="modalIcon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6.2,10.512l-4.426,4.345c-.783.768-1.791,1.151-2.8,1.151-.998,0-1.996-.376-2.776-1.129l-1.899-1.867c-.394-.387-.399-1.02-.012-1.414.386-.395,1.021-.4,1.414-.012l1.893,1.861c.776.75,2.001.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013.387.394.381,1.027-.014,1.414Z"/></svg> Criterios de adaptación a tus entrenamientos`,
        items: [
          "Para no comer igual todos los días y aprender a usar la nutrición de forma estratégica según el tipo de sesión. (En Fundamentos ADA se enseña la lógica de nutrición según zonas e intensidad)",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" class="modalIcon" viewBox="0 0 24 24">
  <path d="m3.638,9c-.618,0-1.098-.558-.989-1.166.359-2.001,1.356-3.861,2.855-5.266C7.439.753,9.966-.152,12.63.021c5.021.324,8.943,4.695,8.869,9.917-.04,2.818-2.389,5.063-5.208,5.063h-2.932c-.36.346-.846.561-1.384.561-1.105,0-2-.895-2-2s.895-2,2-2c.908,0,1.666.609,1.91,1.439h2.406c1.736,0,3.189-1.383,3.208-3.118.046-4.146-3.045-7.609-6.998-7.865-2.099-.13-4.101.578-5.63,2.011-1.209,1.133-1.988,2.584-2.261,4.178-.08.466-.5.795-.972.795Zm8.362,8c-3.695,0-6.892,2.292-7.955,5.702-.095.304-.04.635.149.891s.488.407.806.407h14c.318,0,.617-.151.806-.407s.244-.587.149-.891c-1.063-3.41-4.26-5.702-7.955-5.702Zm2.934-6h2.354c.135-.477.212-.979.212-1.5,0-3.038-2.462-5.5-5.5-5.5s-5.5,2.462-5.5,5.5c0,1.491.596,2.841,1.559,3.832.121-2.066,1.819-3.709,3.916-3.709,1.191,0,2.241.541,2.96,1.377Z"/>
</svg> Equipo de soporte para resolución de dudas de implementación`,
        items: [
          "Acompañamiento para aclarar dudas sobre aplicación del plan, horarios, reemplazos, organización y ejecución",
        ],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" class="modalIcon" viewBox="0 0 24 24"><path d="m22,23c0,.553-.447,1-1,1H3c-.553,0-1-.447-1-1,0-3.525,2.042-6.574,5-8.05v3.328c-.595.346-1,.984-1,1.723,0,1.105.895,2,2,2s2-.895,2-2c0-.738-.405-1.376-1-1.723v-4.046c.644-.147,1.312-.232,2-.232h2c.338,0,.671.022,1,.059v4.125c-1.161.414-2,1.514-2,2.816v1c0,.553.447,1,1,1s1-.447,1-1v-1c0-.552.448-1,1-1s1,.448,1,1v1c0,.553.447,1,1,1s1-.447,1-1v-1c0-1.302-.839-2.402-2-2.816v-3.659c3.49,1.239,6,4.565,6,8.475Zm-4-17c0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6,6-2.691,6-6Z"/></svg> Revisión de contexto médico general (cuando aplique)`,
        items: [
          "Para ajustar la estrategia nutricional con criterio y seguridad según la información que reportes",
        ],
      },
      {
        title:
          '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="modalIcon" data-name="Layer 1"><path d="m9.358 6.5h.642c.552 0 1-.447 1-1s-.448-1-1-1h-.642c-.094-.363-.238-.704-.425-1.019l.495-.495c.408.02.821-.114 1.133-.425.586-.586.586-1.536 0-2.121s-1.536-.586-2.121 0c-.312.312-.445.725-.425 1.133l-.495.495c-.316-.186-.656-.33-1.019-.425v-.642c0-.552-.448-1-1-1s-1 .448-1 1v.642c-.363.094-.704.238-1.019.425l-.495-.495c.02-.408-.114-.821-.425-1.133-.587-.586-1.537-.586-2.123-.001s-.585 1.536 0 2.122c.312.312.725.445 1.133.425l.495.495c-.186.316-.33.656-.425 1.019h-.642c-.552 0-1 .447-1 1s.448 1 1 1h.642c.094.363.238.704.425 1.019l-.495.495c-.408-.02-.821.114-1.133.425-.586.586-.586 1.536 0 2.121.586.586 1.536.586 2.121 0 .312-.312.445-.725.425-1.133l.495-.495c.316.186.656.33 1.019.425v.642c0 .553.448 1 1 1s1-.447 1-1v-.642c.363-.094.704-.238 1.019-.425l.495.495c-.02.408.114.821.425 1.133.586.586 1.536.586 2.121 0 .586-.586.586-1.536 0-2.121-.312-.312-.725-.445-1.133-.425l-.495-.495c.186-.316.33-.656.425-1.019zm13.871-4.316-.767.818c.346.498.537 1.086.537 1.705 0 .801-.313 1.555-.879 2.122l-.728.732c1.054 1.618 1.607 3.482 1.607 5.439 0 3.962-2.321 7.382-5.67 9h2.67c.553 0 1 .448 1 1s-.447 1-1 1h-13.999c-.553 0-1-.448-1-1s.447-1 1-1h2.67c-1.779-.855-3.282-2.231-4.307-4h-3.363c-.553 0-1-.448-1-1s.447-1 1-1h9c.553 0 1 .448 1 1s-.447 1-1 1h-3.224c1.501 1.872 3.761 3 6.224 3 4.411 0 8-3.589 8-8 0-1.416-.375-2.765-1.068-3.968l-4.764 4.794c-.565.57-1.319.885-2.122.886h-.006c-.801 0-1.554-.312-2.121-.879 0 0-.808-.832-.858-.89 1.664-.27 2.939-1.703 2.939-3.443 0-.948-.38-1.805-.992-2.435l5.162-5.185c1.058-1.059 2.709-1.151 3.882-.297l.719-.767c.377-.404 1.011-.424 1.413-.046.403.377.424 1.01.046 1.413z"/></svg> Órdenes de exámenes (si se consideran necesarios)',
        items: ["Cuando el caso lo requiera para tomar mejores decisiones"],
      },
      {
        title: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" class="modalIcon"><path d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z"/></svg> Suplementación estratégica y priorizada (solo si hace falta)`,
        items: [
          "Recomendaciones enfocadas en lo que realmente suma valor, sin llenarte de cosas innecesarias",
        ],
      },
    ],
  },
};

const CTA_MESSAGE_INTRO = "";

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
    <div className="flex flex-col items-center rounded-2xl bg-[#f8fbf2] p-6 sm:p-8 mb-8 shadow-xl max-w-2xl mx-auto">
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
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-[rgba(252,195,88,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 314.5 354.98"
                    className="h-14 w-14 fill-[#fcc358]"
                  >
                    <path d="M87.62,43.4h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,68.71l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.67,2.27,1.9,2.57,5.28.67,7.56Z" />
                    <path d="M87.62,113.94h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c3.87,0,7.38-1.58,9.92-4.12s4.11-6.05,4.11-9.92v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,139.25l-11.67,13.9c-.07.08-.14.16-.21.24-2.03,2.16-5.43,2.26-7.59.23l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M87.62,184.48h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,209.79l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.59,2.03-2.15,5.43-2.26,7.58-.23l1.19,1.12c.15.14.33.21.54.19.2,0,.37-.09.5-.25l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M166.41,154.53c0,2.97-2.41,5.38-5.38,5.38h-44.07c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M111.58,83.99c0-2.97,2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38h-44.07c-2.97,0-5.38-2.41-5.38-5.38Z" />
                    <path d="M213.12,131.55c0,2.97-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M111.58,61.01c0-2.97,2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38Z" />
                    <path d="M166.41,154.53c0,2.97-2.41,5.38-5.38,5.38h-44.07c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M213.12,131.55c0,2.97-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M213.12,61.01c0,2.97-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M166.41,83.99c0,2.97-2.41,5.38-5.38,5.38h-44.07c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38Z" />
                    <path d="M87.62,43.4h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,68.71l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.67,2.27,1.9,2.57,5.28.67,7.56Z" />
                    <path d="M87.62,113.94h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c3.87,0,7.38-1.58,9.92-4.12s4.11-6.05,4.11-9.92v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,139.25l-11.67,13.9c-.07.08-.14.16-.21.24-2.03,2.16-5.43,2.26-7.59.23l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M87.62,184.48h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,209.79l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.59,2.03-2.15,5.43-2.26,7.58-.23l1.19,1.12c.15.14.33.21.54.19.2,0,.37-.09.5-.25l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M87.62,43.4h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,68.71l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.67,2.27,1.9,2.57,5.28.67,7.56Z" />
                    <path d="M87.62,113.94h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c3.87,0,7.38-1.58,9.92-4.12s4.11-6.05,4.11-9.92v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,139.25l-11.67,13.9c-.07.08-.14.16-.21.24-2.03,2.16-5.43,2.26-7.59.23l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.58,2.03-2.16,5.43-2.27,7.58-.24l1.19,1.12c.15.14.33.21.54.2.2-.02.37-.1.5-.26l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M87.62,184.48h-30.13c-7.74,0-14.04,6.29-14.04,14.03v30.13c0,7.74,6.3,14.04,14.04,14.04h30.13c7.74,0,14.03-6.3,14.03-14.04v-30.13c0-7.74-6.29-14.03-14.03-14.03ZM85.89,209.79l-11.67,13.9c-1.99,2.37-5.55,2.58-7.8.47l-5.88-5.53c-2.16-2.03-2.26-5.43-.23-7.59,2.03-2.15,5.43-2.26,7.58-.23l1.19,1.12c.15.14.33.21.54.19.2,0,.37-.09.5-.25l7.53-8.97c1.91-2.28,5.29-2.58,7.57-.68,2.27,1.91,2.57,5.29.67,7.57Z" />
                    <path d="M161.03,159.91h-44.07c-2.97,0-5.38-2.41-5.38-5.38s2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38Z" />
                    <path d="M111.58,83.99c0-2.97,2.41-5.38,5.38-5.38h44.07c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38h-44.07c-2.97,0-5.38-2.41-5.38-5.38Z" />
                    <path d="M111.58,131.55c0-2.97,2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38Z" />
                    <path d="M111.58,61.01c0-2.97,2.41-5.38,5.38-5.38h90.78c2.97,0,5.38,2.41,5.38,5.38s-2.41,5.38-5.38,5.38h-90.78c-2.97,0-5.38-2.41-5.38-5.38Z" />
                    <path d="M237.44,158.95c-.33-.08-.56-.36-.56-.7V42c0-.4.33-.72.72-.72h54.95c2.97,0,5.38-2.41,5.38-5.38,0-19.76-16.14-35.9-35.9-35.9h-20v.02h-10.52v-.02H54.54C34.79,0,18.64,16.14,18.64,35.9v209.27s0,.06-.01.1c-.4,2.74-.55,5.23-.69,7.72-.53,8.97-1.06,17.92-16.23,32.07-3.51,3.27-1.34,9.43,3.95,9.29h18.36v.02h99.28c.29,0,.54.16.66.43,15.4,35.91,50.89,60.18,91.28,60.18,54.82,0,99.26-44.44,99.26-99.26,0-46.76-32.51-86.59-77.06-96.77ZM115.97,255.72c0,9.35,1.29,18.4,3.71,26.98.07.22.02.44-.12.62-.14.19-.34.29-.57.29H24.02v.02h-4.74c-.28,0-.52-.15-.64-.4-.13-.25-.1-.53.07-.76,8.92-11.51,9.43-20.17,9.94-28.85.14-2.31.28-4.62.6-6.83,0-.02,0-.04.01-.06.09-.39.14-.8.14-1.22V35.9c0-13.82,11.33-25.15,25.15-25.15h176.96v-.02h3.31c.29,0,.54.16.65.43.12.26.08.55-.12.77-5.73,6.36-9.22,14.78-9.22,23.97v120.35c0,.21-.08.39-.24.53-.15.14-.34.2-.55.18-3.32-.34-6.69-.51-10.1-.51-54.83,0-99.27,44.44-99.27,99.27ZM248.69,321.97c-.22.12-.48.11-.69-.02-.22-.14-.35-.36-.35-.62v-53.59c0-.31.19-.57.48-.67,15.34-5.53,20.13-30.01,9.62-44.45-8.31-11.43-22.64-11.43-30.95,0-10.51,14.44-5.72,38.92,9.62,44.45.29.1.48.36.48.67v57.11c0,.39.04.77.12,1.14s-.14.73-.5.84c-13.14,3.93-27.27,4.13-40.55.57-.36-.1-.59-.46-.52-.82.06-.33.09-.66.09-1v-57.56c0-.33.22-.61.53-.69,9.96-2.65,17.18-11.75,17.18-22.32v-25.58c0-2.97-2.41-5.38-5.38-5.38s-5.38,2.41-5.38,5.38v25.58c0,4.35-2.31,8.27-5.85,10.48-.23.14-.5.14-.73.01-.23-.13-.37-.36-.37-.62v-35.45c0-2.97-2.41-5.38-5.38-5.38s-5.38,2.41-5.38,5.38v35.45c0,.26-.13.49-.36.62-.24.13-.5.13-.73-.02-3.55-2.2-5.86-6.12-5.86-10.47v-25.58c0-2.97-2.4-5.38-5.37-5.38s-5.38,2.41-5.38,5.38v25.58c0,10.57,7.22,19.67,17.17,22.32.32.08.54.36.54.69v54.27c0,.26-.12.47-.34.61-.21.14-.46.15-.69.04-25.25-11.84-42.74-37.49-42.74-67.22,0-40.99,33.23-74.22,74.22-74.22s74.21,33.23,74.21,74.22c0,28.95-16.58,54.02-40.76,66.25Z" />
                  </svg>
                </div>
              </div>


            <CardDecoration />
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
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#383838]/50 mb-1">
                        Precio público
                      </p>
                      <span className="text-lg sm:text-xl line-through font-bold text-[#383838]/40">
                        $399.000
                      </span>
                    </div>
                    <div className="text-3xl text-[#fcc358]">↓</div>
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
                  <a
                    href="https://www.gorigogo.com/checkouts/cn/hWN9YcslP0SNnFjH2R5F6VJC/es-co?_r=AQABA0jk6XDrjUnjCf6A3gjdTYJpqA-RH-uvXP_OtVcGzBw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 border-2 border-[#fcc358] text-[#fcc358] bg-transparent hover:bg-[#fff7e5]"
                  >
                    Comprar ahora
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Fundamentos ADA + Estrategia Nutricional */}
            <article className="bg-white rounded-3xl border-2 border-[#fcc358] shadow-[0_0_30px_rgba(252,195,88,0.15)] transition-all duration-300 hover:shadow-lg relative flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] bg-[#fcc358] text-[#383838]">
                Más popular
              </div>

              <div className="pt-6 sm:pt-8 px-6 sm:px-8 flex justify-center">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-[rgba(252,195,88,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 359.02 290.77"
                    className="w-auto h-14 fill-[#fcc358]"
                  >
                    <g id="Page-1">
                      <g id="_044---Magazine">
                        <g id="Shape">
                          <path d="M347.05,27.49h-11.97v-15.5c-.02-3.79-1.82-7.36-4.87-9.62-3.03-2.26-6.96-2.94-10.57-1.8-22.14,6.32-45.1,9.34-68.12,8.97-40.38,0-63.5,11.42-72.02,16.7-8.52-5.28-31.64-16.7-72.02-16.7-23.02.37-45.97-2.67-68.12-9.01-3.6-1.12-7.53-.46-10.57,1.79-3.06,2.27-4.86,5.85-4.87,9.66v15.5h-11.97c-6.61,0-11.97,5.36-11.97,11.97v239.34c0,6.61,5.36,11.97,11.97,11.97h335.08c6.61,0,11.97-5.36,11.97-11.97V39.46c0-6.61-5.36-11.97-11.97-11.97ZM11.97,278.8V39.46h11.98v211.26c-.02,5.1,3.21,9.65,8.03,11.33,24.42,7.63,49.92,11.27,75.51,10.77,15.09-.18,30.14,1.83,44.66,5.98H11.97ZM173.52,274.24c-20.69-9.51-43.28-14.09-66.04-13.39-24.26.5-48.42-2.92-71.58-10.13l-.07-216.95c0-.1.07-.18.07-.29,0-.1-.06-.18-.07-.28V11.97c23.29,6.68,47.42,9.9,71.64,9.54,38.27,0,59.45,11.03,66.04,15.12v237.6ZM185.49,36.63c6.58-4.09,27.77-15.12,66.04-15.12,24.2.36,48.32-2.85,71.59-9.52v21.49l.02,217.21c-23.17,7.21-47.34,10.64-71.61,10.16-22.75-.7-45.35,3.88-66.04,13.39V36.63ZM347.05,278.8h-140.18c14.52-4.15,29.57-6.16,44.66-5.98,25.59.5,51.09-3.14,75.52-10.77,4.82-1.68,8.04-6.23,8.03-11.33V39.46h11.97v239.34Z" />
                        </g>
                        <g id="Path">
                          <path d="M157.37,231.93c-16.18-4.85-33.01-7.21-49.9-6.98-15.61.07-31.19-1.24-46.57-3.91-3.22-.51-6.25,1.64-6.83,4.85-.58,3.21,1.52,6.28,4.71,6.93,16.08,2.81,32.37,4.18,48.69,4.1,15.67-.22,31.29,1.94,46.31,6.42.58.19,1.19.28,1.79.28,2.95,0,5.45-2.16,5.9-5.07s-1.29-5.72-4.1-6.61Z" />
                        </g>
                        <g id="Path-2">
                          <path d="M157.37,202.02c-16.18-4.85-33.01-7.21-49.9-6.98-15.61.07-31.19-1.24-46.57-3.91-3.22-.51-6.25,1.64-6.83,4.85-.58,3.21,1.52,6.28,4.71,6.93,16.08,2.81,32.37,4.18,48.69,4.1,15.67-.22,31.29,1.94,46.31,6.42.58.19,1.19.28,1.79.28,2.95,0,5.45-2.16,5.9-5.07.45-2.91-1.29-5.72-4.1-6.61Z" />
                        </g>
                        <g id="Path-3">
                          <path d="M157.37,172.1c-16.18-4.85-33.01-7.21-49.9-6.98-15.61.07-31.19-1.24-46.57-3.91-3.22-.51-6.25,1.64-6.83,4.85-.58,3.21,1.52,6.28,4.71,6.93,16.08,2.81,32.37,4.18,48.69,4.1,15.67-.22,31.29,1.94,46.31,6.42.58.19,1.19.28,1.79.28,2.95,0,5.45-2.16,5.9-5.07s-1.29-5.72-4.1-6.61Z" />
                        </g>
                        <path d="M161.56,56.15v83.78c0,1.9-.91,3.69-2.45,4.82-1.53,1.12-3.51,1.46-5.33.89-15.02-4.48-30.64-6.65-46.32-6.43-16.31.08-32.61-1.3-48.69-4.1-2.85-.51-4.92-2.99-4.92-5.88V45.44c0-1.77.78-3.45,2.15-4.58,1.36-1.15,3.15-1.61,4.89-1.3,15.38,2.68,30.96,3.98,46.56,3.91,16.89-.22,33.72,2.12,49.9,6.98,2.49.78,4.19,3.09,4.19,5.69Z" />
                        <g id="Path-4">
                          <path d="M203.44,121.98c.61,0,1.21-.1,1.79-.28,15.02-4.48,30.64-6.65,46.31-6.42,16.32.07,32.61-1.3,48.69-4.1,2.14-.34,3.93-1.81,4.68-3.84.75-2.03.34-4.31-1.07-5.96-1.41-1.65-3.6-2.4-5.72-1.97-15.38,2.68-30.96,3.99-46.57,3.91-16.89-.22-33.72,2.13-49.9,6.98-2.81.89-4.55,3.7-4.1,6.61s2.95,5.07,5.9,5.07h0Z" />
                        </g>
                        <g id="Path-5">
                          <path d="M203.44,92.06c.61,0,1.21-.1,1.79-.28,15.02-4.48,30.64-6.65,46.31-6.42,16.32.07,32.61-1.3,48.69-4.1,2.14-.34,3.93-1.81,4.68-3.84.75-2.03.34-4.31-1.07-5.96-1.41-1.65-3.6-2.4-5.72-1.97-15.38,2.68-30.96,3.99-46.57,3.91-16.89-.22-33.72,2.13-49.9,6.98-2.81.89-4.55,3.7-4.1,6.61s2.95,5.07,5.9,5.07h0Z" />
                        </g>
                        <g id="Path-6">
                          <path d="M203.44,62.14c.61,0,1.21-.1,1.79-.28,15.02-4.48,30.64-6.65,46.31-6.42,16.32.07,32.61-1.3,48.69-4.1,3.19-.64,5.29-3.72,4.71-6.93-.58-3.21-3.61-5.36-6.83-4.85-15.38,2.68-30.96,3.99-46.57,3.91-16.89-.22-33.72,2.13-49.9,6.98-2.81.89-4.55,3.7-4.1,6.61s2.95,5.07,5.9,5.07h0Z" />
                        </g>
                        <path d="M305.17,142.44v83.77c-.01,2.89-2.08,5.37-4.93,5.88-16.08,2.8-32.37,4.18-48.69,4.11-15.67-.23-31.28,1.94-46.31,6.42-1.81.58-3.79.24-5.34-.88-1.54-1.12-2.45-2.91-2.45-4.83v-83.77c0-2.61,1.7-4.93,4.19-5.71,16.18-4.86,33.01-7.21,49.9-6.98,15.6.08,31.19-1.23,46.56-3.91,1.75-.31,3.54.17,4.9,1.3,1.36,1.13,2.14,2.81,2.15,4.59Z" />
                      </g>
                    </g>
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
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#383838]/50 mb-1">
                        Precio público
                      </p>
                      <span className="text-lg sm:text-xl line-through font-bold text-[#383838]/40">
                        $890.000
                      </span>
                    </div>
                    <div className="text-3xl text-[#fcc358]">↓</div>
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
                  <a
                    type="anker"
                    target="_blank"
                    href="https://www.gorigogo.com/checkouts/cn/hWN9YcslP0SNnFjH2R5F6VJC/es-co?_r=AQABublMcEglU7SZya7ObAjWG4zmL9ShWNbaEmjZ7oNbsUU"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 border-2 border-[#fcc358] text-[#fcc358] bg-transparent hover:bg-[#fff7e5]"
                  >
                    Comprar ahora
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="pt-8 mt-6 border-t border-slate-200">
            <div className="flex flex-col items-center gap-4">
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium text-center max-w-md">
                Elijas el plan que elijas (o incluso si decidís no tomar ninguno
                ahora), tu recorrido dentro del sistema ADA va a seguir sumando
                herramientas para el Giro.
              </p>

              {onNavigateToStage && currentStage && currentStage < 4 && (
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
              className="bg-white rounded-2xl max-w-2xl w-[90%] max-h-[85vh] overflow-y-auto shadow-xl thin-scrollbar"
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
