import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
motion;
function ViewBasedAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("Is in View -> ", isInView);
    }, [isInView]);

    return (
        <>
            <div style={{ height: "200vh", backgroundColor: "black" }}></div>
            <motion.div
                className=" bg-orange-600 h-[100vh]"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            />
            <motion.div
                style={{
                    background: isInView?"purple":"red",
                    transition: "4s background"
                }}
                ref={ref}
                className=" h-screen bg-red-700 transition-all"
            >
            
            </motion.div>
        </>
    );
}

export default ViewBasedAnimation;
