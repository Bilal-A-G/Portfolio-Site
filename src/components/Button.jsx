import Styles from "../Styles.jsx";

const Button = ({text, link, width, extras, blank}) => {
    return(
        <a className={`select-none bg-dark-red text-white grid place-items-center justify-center flex ${width} ${Styles.Button} sm:py-[5px] py-[2px] rounded-full ${extras}`} href={link} target={blank ? "_blank" : null}>{text}</a>
    );
}

export default Button;