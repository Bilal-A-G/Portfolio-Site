import Styles from "../Styles.jsx";

const Button = ({text, link, width, extras, blank}) => {
    return(
        <a className={`select-none bg-dark-red text-white ${width} ${Styles.Button} py-[1%] rounded-full ${extras}`} href={link} target={blank ? "_blank" : null}>{text}</a>
    );
}

export default Button;