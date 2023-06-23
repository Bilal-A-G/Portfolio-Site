const Footer = () => {
    return (
        <div className="bg-black pb-[4%] pt-[4%] w-full text-white">
            <div className="text-[17px] font-regular tracking-wider">
                <div className="w-1/2 flex justify-center">
                    <p>[]() Bilal A-G</p>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 flex justify-center mt-[2%]">
                        <p className="text-[12px]">Copyright 2023 Bilal Abdul Gaffoor</p>
                    </div>
                    <button className="text-[16px] mt-[1.5%] ml-[30%]" onClick={() => document.documentElement.scrollTop = 0}>Back To Top</button>
                </div>
                <div className="flex ml-[21%] mt-[4%]">
                    <div className="w-[40px] h-[40px] bg-[url('GithubInverted.svg')] bg-cover bg-center rounded-full">
                        <a className="h-full w-full z-20 block " href="https://github.com/Bilal-A-G" target="_blank"></a>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[url('LinkedIn.svg')] bg-cover bg-center rounded-full ml-[2%]">
                        <a className="h-full w-full z-20 block " href="https://www.linkedin.com/in/bilal-abdul-g-288a75239/" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;