import Styles from "../Styles.jsx";
import FadeIn from "./FadeIn.jsx";


const SectionHeader = ({subtitle, title}) => {
    return(
        <div className="md:pb-[5%] pb-[15%] w-full bg-black">
            <FadeIn>
                <p className={`text-white ${Styles.Body} pt-[6%] md:w-1/2 w-full flex justify-center`}>{subtitle}</p>
            </FadeIn>
            <FadeIn>
                <p className={`text-white ${Styles.SectionHeader} md:w-1/2 w-full flex justify-center`}>{title}</p>
            </FadeIn>
            <FadeIn>
                <div className="md:w-1/2 w-3/4 justify-start flex">
                    <div className={`bg-white xl:h-[3px] md:h-[2px] h-[1px] mt-[2%] w-full`}/>
                </div>
            </FadeIn>
        </div>
    );
}

export default SectionHeader;