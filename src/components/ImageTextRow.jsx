import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";

const TextTop = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`md:w-1/2 2-full text-black mt-[8%] ${leftAlign ? "md:pl-[10%] pl-[0%]" : "md:pl-[15%] pl-[0%]"}`}>
            <div className="md:block flex justify-center w-full">
                <p className={`${Styles.Body}`}>{subtitle}</p>
            </div>
            <div className="md:block flex justify-center w-full">
                <p className={`${Styles.SectionSubHeader} mt-[1%]`}>{title}</p>
            </div>
        </div>
    );
}

const TextBottom = ({leftAlign, subtitle, title, extras}) => {
    return (
        <div className={`md:w-1/2 w-full text-black ${leftAlign ? "md:pl-[10%] pl-[0%]" : "md:pl-[15%] pl-[0%]"}`}>
            <div className="md:block flex justify-center w-full">
                {extras}
            </div>
        </div>
    );
}

const CombinedText = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`md:w-1/2 2-full text-black mt-[8%] ${leftAlign ? "md:pl-[10%] pl-[0%]" : "md:pl-[15%] pl-[0%]"}`}>
            <div className="md:block flex justify-center w-full">
                <p className={`${Styles.Body}`}>{subtitle}</p>
            </div>
            <div className="md:block flex justify-center w-full">
                <p className={`${Styles.SectionSubHeader} mt-[1%]`}>{title}</p>
            </div>
            <div className="md:block flex justify-center w-full">
                {extras}
            </div>
        </div>
    );
}

const Image = ({leftAlign, image}) => {
    return(
        <div className={`${leftAlign ? "md:ml-[5%] ml-[0%]" : "md:ml-[0px] ml-[0%]"} mt-[4%] ${leftAlign ? "md:w-[50%] w-[0%]" : "md:w-[45%] w-[80%]"} bg-black md:rounded-[40px] rounded-[20px] flex grid place-items-center md:py-[3%] py-[5%]`}>
            <div>
                <ImageWithBorder image={image} style={Styles.MediumImage}/>
            </div>
        </div>
    );
}

const ImageTextRow = ({leftAlign, subtitle, title, image, extras, id}) => {
    return(
        <>
            <div id={id} className="w-full bg-off-white pb-[5%] md:flex hidden">
                {leftAlign ?
                    <>
                        <Image leftAlign={leftAlign} image={image}/>
                        <CombinedText leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                    </>
                    :
                    <>
                        <CombinedText leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                        <Image leftAlign={leftAlign} image={image}/>
                    </>
                }
            </div>
            <div id={id} className="w-full bg-off-white pb-[5%] pt-[5%] md:hidden block">
                <TextTop leftAlign={false} title={title} subtitle={subtitle} extras={extras}/>
                <div className="w-full flex justify-center">
                    <Image leftAlign={false} image={image}/>
                </div>
                <TextBottom leftAlign={false} title={title} subtitle={subtitle} extras={extras}/>
            </div>
        </>
    );
}

export default ImageTextRow;