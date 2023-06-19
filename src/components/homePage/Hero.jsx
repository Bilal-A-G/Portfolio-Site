const Hero = () => {
    return(
        <div className="inline-flex w-full h-[800px] bg-black">
            <div className="space-y-3 mt-[150px] ml-[220px] w-[500px] text-white">
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
                    <button className="h-[35px] w-[200px] bg-dark-red rounded-full text-white font-black" onClick={() => {document.documentElement.scrollTop = 820}}>
                        About Me
                    </button>
                </div>
            </div>
            <div className="relative h-[700px] w-full flex ml-5 mt-10">
                <div className="ml-[50px] mt-[28px] w-[690px] h-[690px] rounded-full border-2 absolute">
                    <div className="bg-[url('MoonTest.png')] h-[650px] w-[650px] bg-cover mt-[15px] ml-[15px]"/>
                </div>
                <div className="h-[80px] w-[80px] mt-[590px] ml-[10px] rounded-full border-2 z-10 absolute"></div>
                <div className="h-[45px] w-[45px] mt-[50px] ml-[650px] rounded-full border-2 z-10 absolute"></div>
            </div>
        </div>
    )
}

export default Hero;