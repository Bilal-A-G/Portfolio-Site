import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

const PopIn = (props) => {
    const ref = useRef(null)

    const animationControls = useAnimation();

    useEffect(() => {
        if(props.trigger){
            animationControls.start("hidden");
        }
    }, [props.trigger])

    return(
        <motion.div ref={ref} variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1},
        }} initial={"visible"} animate={animationControls} transition={{duration: 1, delay: 5, ease: "easeInOut"}}>
            {props.children}
        </motion.div>
    )
}

export default PopIn;