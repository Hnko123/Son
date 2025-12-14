import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
  const bubbles = [
    {
      size: 'w-[400px] h-[400px]',
      color: 'bg-primary/10',
      x: 10,
      y: 20,
      duration: 20
    },
    {
      size: 'w-[300px] h-[300px]',
      color: 'bg-secondary/8',
      x: 70,
      y: 60,
      duration: 25
    },
    {
      size: 'w-[500px] h-[500px]',
      color: 'bg-accent/5',
      x: 80,
      y: 10,
      duration: 30
    },
    {
      size: 'w-[250px] h-[250px]',
      color: 'bg-warning/6',
      x: 20,
      y: 80,
      duration: 22
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none -z-10 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[60px] opacity-30 ${bubble.size} ${bubble.color}`}
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2
          }}
        />
      ))}
    </div>
  );
};

export default AuroraBackground;
