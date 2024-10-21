import FadeIn from "../FadeIn.jsx";
import Styles from "../../Styles.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";
import Button from "../Button.jsx";
import WorkExperience from "../../WorkExperience.jsx";
import EducationExperience from "../../EducationExperience.jsx";

const ProfessionalExperience = () => {
    return(
        <div className="w-full bg-black md:pb-[12%] sm:pb-[18%] pb-[27%] text-white">
            <FadeIn>
                <p className={`w-full justify-center pt-[8%] flex ${Styles.Body}`}>Here's my</p>
            </FadeIn>
            <FadeIn>
                <p className={`w-full justify-center mt-[1%] flex ${Styles.SectionSubHeader}`}>Professional Background</p>
            </FadeIn>
            <div className="w-[5px] h-[1140px] absolute rounded-lg left-1/2 mt-[4%] bg-[conic-gradient(transparent_0%_75%,white_75%)] bg-[length:6px_28px]"/>
            <div className="w-full lg:gap-[6%] lg:px-[6%] md:gap-y-[6%] sm:gap-y-[2%] gap-y-[2%] mt-[8%] justify-center grid place-items-center md:grid-cols-1 lg:grid-cols-1 auto-rows-max md:grid-flow-cols">
                {EducationExperience.map(({name, longDescription}, i) =>
                    <div className={`${i % 2 === 0 ? "pr-[400px]" : "pl-[400px]"}`}>
                        <FadeIn>
                            <div className="text-white w-[350px] border-2 rounded-lg">
                                <p className={`text-white ${Styles.SubSectionHeader} mt-[10%] justify-center text-center flex`}>{name}</p>
                                <p className={`flex justify-center px-[10%] ${Styles.SmallBody} pt-[5%] pb-[10%]`}>
                                    {longDescription}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                )}
                {WorkExperience.map(({name, longDescription}, i) =>
                <div className={`${i % 2 === 0 ? "pr-[400px]" : "pl-[400px]"}`}>
                    <FadeIn>
                        <div className="text-white w-[350px] border-2 rounded-lg">
                            <p className={`text-white ${Styles.SubSectionHeader} mt-[10%] justify-center text-center flex`}>{name}</p>
                            <p className={`flex justify-center px-[10%] ${Styles.SmallBody} pt-[5%] pb-[10%]`}>
                                {longDescription}
                            </p>
                        </div>
                    </FadeIn>
                </div>
                )}
            </div>
        </div>
    )
}

export default ProfessionalExperience;