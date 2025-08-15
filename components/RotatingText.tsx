"use client";

import { useState, useEffect } from "react";

const RotatingText = ({ 
  texts = ["FA revista"], 
  rotationInterval = 3000,
  className = ""
}: {
  texts?: string[];
  rotationInterval?: number;
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentTextIndex];
  const characters = currentText.split('');

  return (
    <div className={`rotating-text ${className}`}>
      <div 
        className={`flex justify-center transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {characters.map((char, index) => (
          <span
            key={`${currentTextIndex}-${index}`}
            className="inline-block animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingText;
