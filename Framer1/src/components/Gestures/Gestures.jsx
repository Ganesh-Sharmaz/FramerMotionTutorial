import React from "react";
import { motion, MotionConfig } from "framer-motion";
function Gestures() {
    return (
        <div className=" gap-8 flex-col bg-black h-screen w-full flex items-center justify-center">
            <MotionConfig
                transition={{
                    duration: 0.125,
                    ease: "easeInOut",
                }}
            >
                <motion.button
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.85,
                        rotate: "3.5deg",
                    }}
                    className="bg-orange-900 p-14 text-3xl rounded-full text-center text-white"
                >
                    clickme
                </motion.button>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.85,
                        rotate: "-3.5deg",
                    }}
                    className="bg-orange-900 p-14 text-3xl rounded-full text-center text-white"
                >
                    clickme
                </motion.button>
            </MotionConfig>
        </div>
    );
}

export default Gestures;
