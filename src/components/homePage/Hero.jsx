const Hero = () => {
    return(
        <div className="inline-flex w-full h-full">
            <div className="space-y-5 mt-[200px] ml-[150px] w-[500px]">
                <div>
                    Hello, I am
                </div>
                <div className="font-semibold text-7xl">
                    Bilal A-G
                </div>
                <div className="text-lg">
                    Welcome to my website
                </div>
                <div className="pt-[70px] pl-5">
                    <button className="h-[35px] w-[200px] bg-dark-red rounded-full text-white font-semibold">
                        About Me
                    </button>
                </div>
            </div>
            <div className="relative h-[700px] w-full flex ml-20 mt-10">
                <div className="ml-[100px] mt-20 w-[700px] h-[700px] rounded-full border-2 absolute"></div>
                <div className="h-[80px] w-[80px] mt-[650px] ml-[30px] rounded-full border-2 z-10 absolute"></div>
                <div className="h-[40px] w-[40px] mt-[90px] ml-[690px] rounded-full border-2 z-10 absolute"></div>
            </div>
        </div>
    )
}

export default Hero;