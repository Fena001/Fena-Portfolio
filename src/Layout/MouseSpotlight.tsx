import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* This is the moving gradient. 
        It creates a 600px wide "flashlight" effect that follows your mouse.
      */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Optional: Static background noise or secondary glow for depth */}
      <div className="absolute inset-0 bg-neutral-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
    </div>
  );
};

export default MouseSpotlight;