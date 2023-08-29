import FadeIn from "./FadeIn.jsx";

const ImageWithBorder = ({image, style}) => {
    return(
        <FadeIn>
            <div className={`${style.outerSize} border-2 border-white rounded-full grid flex place-items-center`}>
                <div className={`${style.innerSize} rounded-full ${image} bg-cover bg-center`}/>
            </div>
        </FadeIn>
    );
}

export default ImageWithBorder;