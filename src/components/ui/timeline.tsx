"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Calculate which timeline item should be active based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const itemHeight = 1 / data.length;
    const newActiveIndex = Math.min(
      Math.floor(latest / itemHeight),
      data.length - 1
    );
    setActiveIndex(newActiveIndex);
  });

  return (
    <div className="w-full relative font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className={`h-10 absolute left-3 md:left-3 w-10 rounded-full transition-all duration-500 z-50 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 scale-110"
                      : isPast
                      ? "bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20"
                      : "bg-card border-2 border-muted-foreground/30"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`h-4 w-4 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-white shadow-lg"
                        : isPast
                        ? "bg-white"
                        : "bg-muted-foreground/50"
                    }`}
                  />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3
                    className={`text-xl md:text-5xl font-bold transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent scale-105"
                        : isPast
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className={`text-sm md:text-lg mt-2 transition-all duration-500 ${
                        isActive
                          ? "text-accent font-medium"
                          : isPast
                          ? "text-primary/70"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden block mb-4">
                  <h3
                    className={`text-2xl font-bold transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent"
                        : isPast
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className={`text-sm mt-1 transition-all duration-500 ${
                        isActive
                          ? "text-accent font-medium"
                          : isPast
                          ? "text-primary/70"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
                <div
                  className={`transition-all duration-500 ${
                    isActive
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-60 transform translate-x-2"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}

        {/* Timeline line with gradient */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-tertiary rounded-full shadow-lg shadow-primary/20"
          />
        </div>
      </div>
    </div>
  );
};
