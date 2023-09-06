import Styles from "../../Styles.jsx";
import Button from "../Button.jsx";
import FadeIn from "../FadeIn.jsx";
import Moon from "../Moon";

const Hero = () => {
    return(
        <div className="bg-black">
                <div className="md:pb-[5%] md:flex block ">
                    <div className="md:mt-[10%] mt-[0%] md:pt-[0%] pt-[5%] ml-[15%] w-1/3 text-white md:block hidden">
                        <FadeIn>
                            <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                        </FadeIn>
                        <FadeIn>
                            <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                        </FadeIn>
                        <FadeIn>
                            <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                        </FadeIn>
                        <FadeIn>
                            <Button link={"#about"} width={"w-[50%]"} extras={"py-[1%]"} text={"About Me"} className={`pt-[20%] w-full flex justify-start`}/>
                        </FadeIn>
                    </div>
                    <div className="w-2/3 grid place-items-start grid flex md:mt-[2%] mt-[0%] md:pt-[0%] pt-[10%] md:pl-[0%] sm:pl-[15%] pl-[5%]">
                        <FadeIn>
                            <div className={"2xl:w-[690px] 2xl:h-[690px] xl:w-[575px] xl:h-[575px] " +
                                "lg:w-[460px] lg:h-[460px] md:w-[345px] md:h-[345px] sm:w-[455px] sm:h-[455px] w-[350px] h-[350px] pr-[20px] pb-[20px]"}>
                                <Moon/>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="w-full md:hidden flex">
                        <div className="pl-[10%] pt-[5%] w-full text-white">
                            <FadeIn>
                                <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                            </FadeIn>
                            <FadeIn>
                                <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                            </FadeIn>
                            <FadeIn>
                                <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                            </FadeIn>
                            <FadeIn>
                                <Button link={"#about"} width={"w-[35%]"} extras={"py-[1%] md:block hidden"} text={"About Me"} className={`pt-[10%] pb-[15%] w-full flex justify-start`}/>
                                <Button link={"#aboutmobile"} width={"w-[35%]"} extras={"py-[1%] md:hidden block"} text={"About Me"} className={`pt-[8%] pb-[15%] w-full flex justify-start`}/>
                            </FadeIn>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Hero;