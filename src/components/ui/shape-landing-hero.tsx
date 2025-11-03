"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./liquid-ether.css";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function HeroGeometric() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    className="absolute top-20 left-20 w-32 h-32 text-indigo-400/30"
                    delay={0}
                />
                <ElegantShape
                    className="absolute top-40 right-32 w-24 h-24 text-rose-400/40"
                    delay={0.5}
                />
                <ElegantShape
                    className="absolute bottom-32 left-40 w-40 h-40 text-violet-400/25"
                    delay={1}
                />
                <ElegantShape
                    className="absolute bottom-20 right-20 w-28 h-28 text-amber-400/35"
                    delay={1.5}
                />
                <ElegantShape
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-cyan-400/45"
                    delay={2}
                />
            </div>
        </div>
    );
}

