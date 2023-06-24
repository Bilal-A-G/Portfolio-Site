import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";
import Button from "../Button.jsx";

const Hero = () => {
    return(
        <div className="flex w-full pb-[6%] bg-black">
            <div className="mt-[10%] ml-[15%] w-1/3 text-white">
                <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                <div className="pt-[20%] w-full flex justify-start">
                    <Button link={"#about"} width={"w-[50%]"} extras={"py-[1%]"} text={"About Me"}/>
                </div>
            </div>
            <div className="w-2/3 grid place-items-start grid flex mt-[2%]">
                <ImageWithBorder image={"bg-[url('MoonTest.png')]"} style={Styles.LargeImage}/>
                <div className="xl:h-[80px] xl:w-[80px] md:h-[40px] md:w-[40px] sm:h-[30px] sm:w-[30px] h-[20px] w-[20px] mt-[40%] absolute rounded-full border-2"/>
                <div className="xl:h-[50px] xl:w-[50px] md:h-[20px] md:w-[20px] sm:h-[10px] sm:w-[10px] h-[10px] w-[10px] ml-[40%] mt-[1%] absolute rounded-full border-2"/>
            </div>
        </div>
    )
}

export default Hero;