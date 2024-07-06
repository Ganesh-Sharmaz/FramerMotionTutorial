import { motion, useAnimationControls } from "framer-motion";
import React from "react";

function AnimationControl() {
    const controls = useAnimationControls();
    const handleClick = () => {
        console.log("working")
        controls.start("flip");
    }
    return (
        <div className=" gap-12 flex-col bg-black h-screen w-full flex items-center justify-center">
            <button
            onClick={handleClick}
            className=" p-4 text-center bg-red-700 text-3xl text-white rounded-xl">
                Flip it
            </button>
            <motion.div
            variants={{
                initial: {
                    rotate: "0deg"
                },
                flip: {
                    rotate: "360deg"
                    
                }
            }}
            
            initial="initial"
            animate={controls}
            exit={{
                rotate: "0deg"
            }}
            className=" w-52 h-52 scale-125 bg-blue-800 text-center rounded-md flex items-center justify-center text-white text-4xl"></motion.div>
        </div>
    );
}

export default AnimationControl;
