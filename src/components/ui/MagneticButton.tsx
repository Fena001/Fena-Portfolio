import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  href,
  download,
  target,
  rel,
  variant = 'primary'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const baseStyles = "relative px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95",
    secondary: "bg-transparent border border-neutral-700 text-white hover:border-purple-500 hover:text-purple-400"
  };

  const content = (
    <motion.div
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} className="inline-block">
        <a href={href} download={download} target={target} rel={rel} className="no-underline">
          {content}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} className="inline-block cursor-pointer" onClick={onClick}>
      {content}
    </div>
  );
};

export default MagneticButton;
