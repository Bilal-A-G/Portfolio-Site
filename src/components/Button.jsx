const Button = ({text, link, width, extras}) => {
    return(
        <a className={`select-none bg-dark-red text-white ${width} py-1 rounded-full font-semibold ${extras}`} href={link}>{text}</a>
    );
}

export default Button;