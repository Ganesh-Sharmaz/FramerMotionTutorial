import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Gestures from "./components/Gestures/Gestures";
import Basics from "./components/Basics/Basics";
import { useState } from "react";
import AnimationControl from "./components/AnimationControl/AnimationControl";

function App() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
        {/* <Basics/> */}
        {/* <Gestures/> */}
        <AnimationControl/>
        </>
    );
}

export default App;
