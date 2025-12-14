import React from 'react';

const FestiveSnowOverlay: React.FC = () => {
  const flakes = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        id: index,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 6,
        delay: -Math.random() * 10,
        size: 8 + Math.random() * 10
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="christmas-snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            fontSize: `${flake.size}px`
          }}
        >
          ❄️
        </span>
      ))}
    </div>
  );
};

export default FestiveSnowOverlay;
