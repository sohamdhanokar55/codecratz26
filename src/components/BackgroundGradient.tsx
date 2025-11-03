"use client";

import { motion } from "framer-motion";

const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: ["-100%", "100%", "-100%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-pink-500/40 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.6,
          x: ["100%", "-100%", "100%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute inset-0 w-[200%] h-full bg-gradient-to-l from-pink-400/30 via-purple-400/30 to-blue-400/30 blur-2xl"
      />
    </div>
  );
};

export default BackgroundGradient;
