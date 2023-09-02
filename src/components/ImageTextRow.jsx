import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";
import FadeIn from "./FadeIn.jsx";

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
                <FadeIn>
                    {extras}
                </FadeIn>
            </div>
        </div>
    );
}

const CombinedText = ({leftAlign, subtitle, title, extras}) => {
    return(
        <div className={`md:w-1/2 2-full text-black mt-[8%] ${leftAlign ? "md:pl-[10%] pl-[0%]" : "md:pl-[15%] pl-[0%]"}`}>
            <div className="md:block flex justify-center w-full">
                <FadeIn>
                    <p className={`${Styles.Body}`}>{subtitle}</p>
                </FadeIn>
            </div>
            <div className="md:block flex justify-center w-full">
                <FadeIn>
                    <p className={`${Styles.SectionSubHeader} mt-[1%]`}>{title}</p>
                </FadeIn>
            </div>
            <div className="md:block flex justify-center w-full">
                <FadeIn>
                    {extras}
                </FadeIn>
            </div>
        </div>
    );
}

const Image = ({leftAlign, image, sphere}) => {
    return(
        <div className={`${leftAlign ? "md:ml-[5%] ml-[0%]" : "md:ml-[0px] ml-[0%]"} mt-[4%] ${leftAlign ? "md:w-[50%] w-[0%]" : "md:w-[45%] sm:w-[60%] w-[80%]"} bg-black rounded-[40px] flex grid place-items-center md:py-[3%] py-[5%]`}>
            <div>
                <ImageWithBorder image={image} style={Styles.MediumImage} sphere={sphere}/>
            </div>
        </div>
    );
}

const ImageTextRow = ({leftAlign, subtitle, title, image, extras, id, sphere}) => {
    return(
        <>
            <div id={id} className={"bg-off-white"}>
                {leftAlign ?
                        <div className={"w-full pb-[5%] md:flex hidden"}>
                            <Image leftAlign={leftAlign} image={image} sphere={sphere}/>
                            <CombinedText leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                        </div>
                    :
                        <div className={"w-full pb-[5%] md:flex hidden"}>
                            <CombinedText leftAlign={leftAlign} title={title} subtitle={subtitle} extras={extras}/>
                            <Image leftAlign={leftAlign} image={image} sphere={sphere}/>
                        </div>
                }
            </div>
            <div id={id + "mobile"} className="w-full bg-off-white pb-[15%] pt-[5%] md:hidden block">
                <FadeIn>
                    <TextTop leftAlign={false} title={title} subtitle={subtitle} extras={extras}/>
                    <div className="w-full flex justify-center">
                        <Image leftAlign={false} image={image} sphere={sphere}/>
                    </div>
                    <TextBottom leftAlign={false} title={title} subtitle={subtitle} extras={extras}/>
                </FadeIn>
            </div>
        </>
    );
}

export default ImageTextRow;