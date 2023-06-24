import ImageWithBorder from "../ImageWithBorder.jsx";

const Hero = () => {
    return(
        <div className="flex w-full pb-[6%] bg-black">
            <div className="space-y-3 mt-[150px] ml-[220px] w-1/3 justify-end text-white">
                <div className="w-full justify-start flex">
                    Hello, I am
                </div>
                <div className="font-semibold text-7xl w-full justify-start flex">
                    Bilal A-G
                </div>
                <div className="text-lg w-full justify-start">
                    Welcome to my website
                </div>
                <div className="pt-[70px] w-full flex justify-start">
                    <button className="h-[35px] w-[200px] bg-dark-red rounded-full text-white font-black" onClick={() => {document.documentElement.scrollTop = 820}}>
                        About Me
                    </button>
                </div>
            </div>
            <div className="w-2/3">
                <ImageWithBorder image={"bg-[url('MoonTest.png')]"} width={"w-[690px]"} 
                                 height={"h-[690px]"} innerWidth={"w-[650px]"} innerHeight={"h-[650px]"}/>
                <div className="h-[80px] w-[80px] ml-[10px] rounded-full border-2"></div>
            </div>
        </div>
    )
}

export default Hero;