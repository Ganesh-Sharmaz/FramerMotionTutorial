import Gestures from "./components/Gestures/Gestures";
import Basics from "./components/Basics/Basics";
import AnimationControl from "./components/AnimationControl/AnimationControl";
import ViewBasedAnimation from "./components/ViewBasedAnimation/ViewBasedAnimation";
import ScrollAnimation from "./components/ScrollAnimations/ScrollAnimation";

function App() {
    return (
        <>
            <Basics/>
            <Gestures/>
            <AnimationControl />
            <ViewBasedAnimation/>
            <ScrollAnimation/>
        </>
    );
}

export default App;
