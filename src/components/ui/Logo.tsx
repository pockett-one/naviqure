"use client";

import { motion } from "framer-motion";

export function Logo({ className }: { className?: string }) {
    const spokeBulbPairs = [
        { line: { x2: 50, y2: 28 }, circle: { cx: 50, cy: 18 } },
        { line: { x2: 78, y2: 38 }, circle: { cx: 84, cy: 34 } },
        { line: { x2: 69, y2: 75 }, circle: { cx: 72, cy: 82 } },
        { line: { x2: 31, y2: 75 }, circle: { cx: 28, cy: 82 } },
        { line: { x2: 22, y2: 38 }, circle: { cx: 16, cy: 34 } },
    ];

    return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            {/* Center Circle - Always solid */}
            <circle cx="50" cy="50" r="14" fill="#293681" />

            {spokeBulbPairs.map((pair, i) => (
                <motion.g
                    key={i}
                    initial={{ opacity: 1 }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "50% 50%" }}
                >
                    <line
                        x1="50" y1="50"
                        x2={pair.line.x2} y2={pair.line.y2}
                        stroke="#293681"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx={pair.circle.cx} cy={pair.circle.cy}
                        r="12"
                        fill="#293681"
                    />
                </motion.g>
            ))}
        </svg>
    );
}
