const Button = ({text, link, width, extras, blank}) => {
    return(
        <a className={`select-none bg-dark-red text-white ${width} py-1 rounded-full font-semibold ${extras}`} href={link} target={blank ? "_blank" : null}>{text}</a>
    );
}

export default Button;