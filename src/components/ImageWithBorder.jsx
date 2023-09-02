import FadeIn from "./FadeIn.jsx";

const ImageWithBorder = ({image, style, sphere}) => {
    return(
        <FadeIn>
            <div className={`${sphere ? style.outerSizeSphere : style.outerSizeSquare} ${sphere ? "border-2" : "border-0"} border-white ${sphere ? "rounded-full" : "rounded-xl"} grid flex place-items-center`}>
                <div className={`${style.innerSize} ${sphere ? "rounded-full" : "rounded-xl"} ${image} bg-cover bg-center`}/>
            </div>
        </FadeIn>
    );
}

export default ImageWithBorder;