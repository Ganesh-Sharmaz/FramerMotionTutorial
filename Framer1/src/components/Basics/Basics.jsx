import { motion, AnimatePresence } from "framer-motion";
// import "./App.css";
import { useState } from "react";

function Basics() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <div className=" gap-8 flex-col bg-black h-screen w-full flex items-center justify-center">
                <motion.button
                    layout
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                    className=" p-10 bg-blue-800 text-center rounded-full flex items-center justify-center text-white text-4xl"
                >
                    show/hide
                </motion.button>
                <AnimatePresence mode="popLayout">
                {isVisible && (
                    <motion.div
                        initial={{
                            rotate: "0deg",
                            scale: 0,
                            y:0,
                        }}
                        animate={{
                            rotate: "180deg",
                            scale:1,
                            y: [0, 140, -140, 0]
                        }}
                        exit={{
                            rotate: "0deg",
                            scale: 0,
                            y:0
                        }}
                        transition={{
                            duration: 1,
                            ease: "anticipate",
                            times: [0, 0.25, 0.50, 1]
                        }}
                        className=" p-10 w-36 bg-blue-800 text-center rounded-full flex items-center justify-center text-white text-4xl"
                    >
                        click
                    </motion.div>
                    
                )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Basics;
