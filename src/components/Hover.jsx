import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

const Hover = (props) => {
    const ref = useRef(null)

    const animationControls = useAnimation();

    useEffect(() => {
        if(props.isHovering){
            animationControls.start("hovering");
        }
        else{
            animationControls.start("notHovering");
        }
    }, [props.isHovering])

    return(
        <motion.div ref={ref} variants={{
            notHovering: {opacity: 0.9, y: 0},
            hovering: {opacity: 1, y: 5},
        }} initial={"notHovering"} animate={animationControls} transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}>
            {props.children}
        </motion.div>
    )
}

export default Hover;