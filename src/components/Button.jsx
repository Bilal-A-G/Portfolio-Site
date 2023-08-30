import Styles from "../Styles.jsx";
import Hover from "./Hover.jsx";
import {useState} from "react";

const Button = ({text, link, width, extras, blank, className}) => {
    
    const [getHovering, setHovering] = useState(false);
    
    return(
        <Hover isHovering = {getHovering}>
            <div className={`${className}`}>
                <a className={`select-none bg-dark-red text-white grid place-items-center justify-center flex ${Styles.Button} sm:py-[5px] py-[2px] rounded-full ${width} ${extras}`}
                   href={link}
                   target={blank ? "_blank" : null}
                   onMouseEnter={() => setHovering(true)} 
                   onMouseLeave={() => setHovering(false)}>
                    {text}
                </a>
            </div>
        </Hover>
    );
}

export default Button;