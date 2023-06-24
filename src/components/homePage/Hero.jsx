import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";

const Hero = () => {
    return(
        <div className="flex w-full pb-[6%] bg-black">
            <div className="space-y-2 mt-[10%] ml-[18%] w-1/3 text-white">
                <p className={`${Styles.Body} w-full justify-start flex`}>Hello, I am</p>
                <p className={`${Styles.Hero} w-full justify-start flex`}>Bilal A-G</p>
                <p className={`${Styles.Body} w-full justify-start flex`}>Welcome to my website</p>
                <div className="pt-[20%] w-full flex justify-start">
                    <button className={`${Styles.Button} w-[50%] py-[1%] bg-dark-red rounded-full text-white`} onClick={() => {document.documentElement.scrollTop = 820}}>
                        About Me
                    </button>
                </div>
            </div>
            <div className="w-2/3 grid place-items-center place-items-center grid flex mt-[2%]">
                <ImageWithBorder image={"bg-[url('MoonTest.png')]"} style={Styles.LargeImage}/>
                <div className="xl:h-[80px] xl:w-[80px] md:h-[40px] md:w-[40px] sm:h-[30px] sm:w-[30px] h-[20px] w-[20px] mr-[50%] rounded-full border-2"></div>
            </div>
        </div>
    )
}

export default Hero;