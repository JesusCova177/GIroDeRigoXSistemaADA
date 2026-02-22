// ... (mismos imports)

export function ChallengeCarousel({
  challenges,
  adaUserId,
  adaMapping,
  currentStageName,
  initialCardIndex = 0,
  onCardChange,
  userSelections = {},
}: ChallengeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialCardIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0); // Cambiado a Y
  const [translateY, setTranslateY] = useState(0); // Cambiado a Y
  const [showHint, setShowHint] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ... (mismo filtrado de visibleChallenges)

  const totalCards = visibleChallenges.length;

  // Lógica de Scroll Vertical Manual (Mouse/Touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY); // clientY para vertical
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    setTranslateY(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = 50;
    if (translateY > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateY < -threshold && currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateY(0);
  };

  // Replicar lógica en MouseEvents (MouseDown, MouseMove, MouseUp) cambiando X por Y...

  return (
    <div className="w-full relative bg-white"> {/* bg-white aquí mata el bloque negro */}
      
      {/* Indicadores (Dots) - Se mantienen arriba o puedes moverlos al lateral */}
      {totalCards > 1 && (
        <div className="flex justify-center items-center gap-1.5 mb-6">
           {/* ... (mapeo de botones de navegación igual que antes) */}
        </div>
      )}

      <div className="relative">
        {/* Controles de flechas ajustados visualmente para scroll vertical si lo deseas, 
            o puedes dejarlos igual */}

        <div
          ref={containerRef}
          className="relative overflow-y-auto snap-y snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ maxHeight: '85vh' }} // Limita el área visible, pero el fondo es blanco
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex flex-col transition-transform duration-500 ease-out"
            style={{
              // La magia ocurre aquí: se desplaza verticalmente según el alto de la tarjeta
              transform: `translateY(calc(-${currentIndex * 100}% + ${translateY}px))`,
            }}
          >
            {visibleChallenges.map((challenge) => {
              const content = challenge.content as any;
              const challengeTitle = challenge.title || content?.title || "";
              const mappingKey = `${currentStageName}:${challengeTitle}`;
              const stagesCardsId = adaMapping[mappingKey] || null;

              return (
                <div 
                  key={challenge.id} 
                  className="w-full flex-shrink-0 py-4 px-2 sm:px-4 snap-start h-full"
                  /* h-full aquí asegura que el cálculo de 100% sea sobre el contenedor visible */
                >
                   <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                      {/* Aquí se renderizan tus componentes (IntroCard, etc.) 
                          Ellos dictarán su propia altura interna */}
                      {challenge.type === "intro" ? (
                        <IntroCard content={content} />
                      ) : (
                        /* ... resto de tipos ... */
                        <div className="p-4">Tipo: {challenge.type}</div>
                      )}
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}