const ImageWithBorder = ({image, style}) => {
    return(
        <div className={`${style.outerSize} border-2 border-white rounded-full grid flex place-items-center`}>
            <div className={`${style.innerSize} rounded-full ${image} bg-cover bg-center`}/>
        </div> 
    );
}

export default ImageWithBorder;