import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";
import Button from "../Button.jsx";

const Hero = () => {
    return(
        <div className="md:flex block w-full bg-black md:pb-[5%]">
            <div className="md:mt-[10%] mt-[0%] md:pt-[0%] pt-[5%] ml-[15%] w-1/3 text-white md:block hidden">
                <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                <div className="pt-[20%] w-full flex justify-start">
                    <Button link={"#about"} width={"w-[50%]"} extras={"py-[1%]"} text={"About Me"}/>
                </div>
            </div>
            <div className="w-2/3 grid place-items-start grid flex md:mt-[2%] mt-[0%] md:pt-[0%] pt-[10%] md:pl-[0%] sm:pl-[15%] pl-[5%]">
                <ImageWithBorder image={"bg-[url('MoonTest.png')]"} style={Styles.LargeImage}/>
            </div>
            <div className="w-full md:hidden flex">
                <div className="pl-[10%] pt-[5%] w-full text-white">
                    <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                    <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                    <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                    <div className="pt-[10%] pb-[15%] w-full flex justify-start">
                        <Button link={"#about"} width={"w-[35%]"} extras={"py-[1%] md:block hidden"} text={"About Me"}/>
                        <Button link={"#aboutmobile"} width={"w-[35%]"} extras={"py-[1%] md:hidden block"} text={"About Me"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;