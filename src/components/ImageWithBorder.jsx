const ImageWithBorder = ({width, height, image, innerWidth, innerHeight}) => {
    return(
        <div className={`${width} ${height} mt-[40px] border-2 border-white rounded-full flex grid place-items-center`}>
            <div className={`${innerWidth} ${innerHeight} rounded-full ${image} bg-cover bg-center`}/>
        </div> 
    );
}

export default ImageWithBorder;