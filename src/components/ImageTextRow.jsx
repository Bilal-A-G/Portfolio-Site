import ImageWithBorder from "./ImageWithBorder.jsx";

const Text = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`w-1/2 text-black mt-[120px] space-y-2 ${leftAlign ? "pl-[10%]" : "pl-[15%]"}`}>
            <p className="text-[16px] text-black">{subtitle}</p>
            <p className="text-5xl font-semibold text-black">{title}</p>
            {extras}
        </div>
    );
}

const Image = ({leftAlign, image}) => {
    return(
        <div className={`${leftAlign ? "ml-[5%]" : "ml-[0px]"} mt-[4%] ${leftAlign ? "w-[50%]" : "w-[45%]"} bg-black rounded-[40px] inline flex grid place-items-center pb-[4%]`}>
            <ImageWithBorder image={image} innerWidth={"w-[400px]"} innerHeight={"h-[400px]"} height={"h-[450px]"} width={"w-[450px]"}/>
            <div className={`${leftAlign ? "ml-[65%]" : "mr-[65%]"} h-[60px] w-[60px] border-2 rounded-full`}/>
        </div>
    );
}

const ImageTextRow = ({leftAlign, subtitle, title, image, extras}) => {
    return(
        <div className="w-full bg-off-white flex pb-[5%]">
            {leftAlign ?
                <>
                    <Image leftAlign={leftAlign} image={image}/>
                    <Text leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                </>
                :
                <>
                    <Text leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                    <Image leftAlign={leftAlign} image={image}/>
                </>
            }
        </div>
    );
}

export default ImageTextRow;