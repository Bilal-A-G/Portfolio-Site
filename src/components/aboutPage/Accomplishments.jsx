import Styles from "../../Styles.jsx";
import FadeIn from "../FadeIn.jsx";

const Accomplishments = () => {
    return(
        <div className="bg-off-white md:pb-[7%] pb-[15%] w-full">
            <FadeIn>
                <p className={`text-black ${Styles.Body} pt-[8%] w-full flex justify-center`}>These are some of my</p>
            </FadeIn>
            <FadeIn>
                <p className={`text-black ${Styles.SectionSubHeader} pt-[1%] w-full flex justify-center`}>Accomplishments</p>
            </FadeIn>
            <div className="w-full flex justify-center pt-[2%]">
                <div className= "px-[15%]">
                    <FadeIn>
                        <div className={`text-black ${Styles.Body} pt-[5%] justify-start w-full flex`}>
                            <p>o</p><p className="pl-[5%]">President of the OTU Game Programming Club</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className={`text-black ${Styles.Body} pt-[1%] justify-start w-full flex`}>
                            <p>o</p><p className="pl-[5%]">600+ commits on Github</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default Accomplishments;