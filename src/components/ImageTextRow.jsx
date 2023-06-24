import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";

const Text = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`w-1/2 text-black mt-[10%] ${leftAlign ? "pl-[10%]" : "pl-[15%]"}`}>
            <p className={`${Styles.Body}`}>{subtitle}</p>
            <p className={`${Styles.SectionSubHeader} mt-[1%]`}>{title}</p>
            {extras}
        </div>
    );
}

const Image = ({leftAlign, image}) => {
    return(
        <div className={`${leftAlign ? "ml-[5%]" : "ml-[0px]"} mt-[4%] ${leftAlign ? "w-[50%]" : "w-[45%]"} bg-black rounded-[40px] inline flex grid place-items-center pb-[4%]`}>
            <div className="mt-[6%]">
                <ImageWithBorder image={image} style={Styles.MediumImage}/>
            </div>
            <div className={`${leftAlign ? "ml-[30%]" : "mr-[30%]"} mt-[30%] 
            xl:h-[70px] xl:w-[70px] md:h-[30px] md:w-[30px] sm:h-[20px] sm:w-[20px] h-[10px] w-[10px] border-2 rounded-full absolute`}/>
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