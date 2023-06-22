const Footer = () => {
    return (
        <div className="bg-black h-[300px] w-full text-white">
            <div className="ml-[330px] pt-[60px] text-[17px] font-regular tracking-wider">
                <p>[]() Bilal A-G</p>
                <p className="text-[12px] mt-[20px]">Copyright 2023 Bilal Abdul Gaffoor</p>
                <button className="text-[16px] mt-[20px] ml-[700px]" onClick={() => document.documentElement.scrollTop = 0}>Back To Top</button>
                <div className="w-[40px] h-[40px] bg-[url('GithubInverted.png')] bg-cover bg-center rounded-full ml-[80px] mt-[40px]">
                    <a className="h-full w-full z-20 block " href="https://github.com/Bilal-A-G" target="_blank"></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;