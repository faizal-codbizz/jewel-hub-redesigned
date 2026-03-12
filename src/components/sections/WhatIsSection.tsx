import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import bgImage from "/images/bg.png";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  wordRange: [number, number];
  isBrand?: boolean;
  isLight?: boolean;
}

const Word = ({ children, progress, wordRange, isBrand, isLight }: WordProps) => {
  let baseClass = "text-slate-800 font-medium";
  if (isBrand) {
    baseClass = "font-bold text-[#00468B]";
  } else if (isLight) {
    baseClass = "text-black font-light";
  }

  const opacity = useTransform(
    progress, 
    [wordRange[0], wordRange[1]], 
    [0.15, 1],
    { clamp: true }
  );
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 300,
    damping: 30
  });

  return (
    <span className={`${baseClass} relative inline-block mr-[0.25em] mt-1 sm:mt-2 lg:mt-4`}>
      {/* Ghost text for layout stability */}
      <span className="opacity-[0.08] select-none" aria-hidden="true">{children}</span>
      <motion.span 
        className="absolute inset-0 will-change-transform"
        style={{ 
          opacity: smoothOpacity
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const WhatIsSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 80%", "center 75%"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 150,
      damping: 30
    });

    const sentence = "Jewelmounts is a B2B jewellery platform that lets retailers browse, customize, order, and sell jewellery - without needing their own factory, inventory, or tech team.";
    const words = useMemo(() => sentence.split(" "), []);
    const wordRanges = useMemo(() => {
      const totalWords = words.length;
      return words.map((_: string, i: number) => {
        const start = i / totalWords;
        const end = (i + 1) / totalWords + 0.02;
        return [start, end] as [number, number];
      });
    }, [words]);

    return (
      <section 
        ref={containerRef} 
        className="py-20 sm:py-24 md:py-32 lg:py-40 bg-white flex items-center min-h-[50vh] sm:min-h-[60vh] relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none will-change-transform">
          <img 
            src={bgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00468B]/40 via-transparent to-[#00468B]/40" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 will-change-transform">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.4] sm:leading-[1.3] lg:leading-[1.5] flex flex-wrap justify-center will-change-transform">
            {words.map((word: string, i: number) => {
              const isBrand = word === "Jewelmounts";
              const isLight = i >= 16; // The words from "without..." onwards

              return (
                <Word 
                  key={i} 
                  wordRange={wordRanges[i]}
                  progress={smoothProgress} 
                  isBrand={isBrand}
                  isLight={isLight}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </section>
    );
  };
  
export default WhatIsSection;