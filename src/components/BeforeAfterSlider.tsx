import { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="before-after"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (full) */}
      <img src={afterSrc} alt="Después" className="before-after__img before-after__after" />

      {/* Before image (clipped) */}
      <img
        src={beforeSrc}
        alt="Antes"
        className="before-after__img before-after__before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Handle */}
      <div className="before-after__handle" style={{ left: `${position}%` }}>
        <div className="before-after__handle-circle">⟷</div>
      </div>

      {/* Labels */}
      <span className="before-after__label before-after__label--before">Antes</span>
      <span className="before-after__label before-after__label--after">Después</span>
    </div>
  );
}
