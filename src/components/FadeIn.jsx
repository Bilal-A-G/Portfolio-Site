import {motion, useInView, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

const FadeIn = (props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    
    const animationControls = useAnimation();
    
    
    useEffect(() => {
        if(isInView){
            animationControls.start("visible");
        }
    }, [isInView])
    
    return(
        <motion.div ref={ref} variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0},
        }} initial={"hidden"} animate={animationControls} transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}>
            {props.children}
        </motion.div>
    )
}

export default FadeIn;