'use client';
import { useEffect, useState } from 'react';

const HeroBackground = () => {
  const [shapes, setShapes] = useState<
    { width: string; height: string; top: string; left: string; rotate: string }[]
  >([]);

  useEffect(() => {
    const generatedShapes = Array.from({ length: 5 }).map(() => ({
      width: `${Math.random() * 30 + 20}%`,
      height: `${Math.random() * 30 + 20}%`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      rotate: `${Math.random() * 360}deg`,
    }));
    setShapes(generatedShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full flex flex-col justify-center items-center relative">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-300/10 to-blue-300/10 blur-3xl"
          style={{
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            opacity: 0.3,
            transform: `rotate(${shape.rotate})`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
