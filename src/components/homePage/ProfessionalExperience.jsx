import FadeIn from "../FadeIn.jsx";
import Styles from "../../Styles.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";
import Button from "../Button.jsx";
import ProfessionalExperienceList from "../../ProfessionalExperienceList.jsx";

const ProfessionalExperience = () => {
    return(
        <div className="w-full bg-black md:pb-[12%] sm:pb-[18%] pb-[27%] text-white">
            <FadeIn>
                <p className={`w-full justify-center pt-[8%] flex ${Styles.Body}`}>Here's my</p>
            </FadeIn>
            <FadeIn>
                <p className={`w-full justify-center mt-[1%] flex ${Styles.SectionSubHeader}`}>Professional Background</p>
            </FadeIn>
            <div className="w-[3px] lg:h-[915px] md:h-[783px] absolute left-1/2 mt-[4%] bg-white"/>
            <div className="w-full lg:gap-[6%] lg:px-[6%] md:gap-y-[6%] sm:gap-y-[2%] gap-y-[2%] mt-[8%] justify-center grid place-items-center md:grid-cols-1 lg:grid-cols-1 auto-rows-max md:grid-flow-cols">
                {ProfessionalExperienceList.map(({name, longDescription, date, position}, i) =>
                    <div>
                        <div className={`w-[30px] h-[30px] border-white border-2 absolute lg:ml-[362px] md:ml-[312px] rounded-2xl`}>
                            <div className={`w-full h-full place-items-center justify-center flex`}>
                                <div className={`w-[10px] h-[10px] bg-white rounded-2xl`}></div>
                            </div>
                        </div>
                        <div className={`${i % 2 === 0 ? "lg:pr-[400px] md:pr-[350px]" : "lg:pl-[400px] md:pl-[350px]"}`}>
                            <FadeIn>
                                <div className="text-white lg:w-[350px] md:w-[300px] border-2 rounded-lg">
                                    <p className={`text-white ${Styles.SubSectionHeader} mt-[10%] justify-center text-center flex font-extrabold`}>{name}</p>
                                    <p className={`text-white ${Styles.Body} mt-[2%] justify-center text-center flex`}>{position}</p>
                                    <p className={`text-white ${Styles.Subtitle} mt-[2%] justify-center text-center flex italic`}>{date}</p>
                                    <p className={`flex justify-center px-[10%] ${Styles.SmallBody} pt-[5%] pb-[10%]`}>
                                        {longDescription}
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfessionalExperience;