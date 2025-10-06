import React, { useEffect, useState } from "react";

// Simple Auto-Sliding Carousel (up to 4 images)
export default function SimpleCarousel({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);

  // Limit to 4 images
  const validImages = images.slice(0, 4);

  useEffect(() => {
    if (validImages.length === 0) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, interval);
    return () => clearInterval(id);
  }, [validImages.length, interval]);

  if (validImages.length === 0) return null;

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {validImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover object-center bg-red-400 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}



