import Styles from "../Styles.jsx";

const Footer = () => {
    return (
        <div className="bg-black pb-[2%] md:pt-[4%] pt-[8%] w-full text-white">
            <div className={`${Styles.Body}`}>
                <div className="w-1/2 flex justify-center md:pl-[0%] sm:pl-[6%]">
                    <p>Bilal A-G</p>
                </div>
                <div className="w-full flex pl-[6%]">
                    <div className="w-1/2 flex justify-center md:mt-[2%] mt-[5%] px-[10%]">
                        <p className={`${Styles.Subtitle}`}>Copyright 2023 Bilal Abdul Gaffoor</p>
                    </div>
                    <button className={`${Styles.Subtitle} mt-[1.5%] md:ml-[30%] ml-[12%]`} onClick={() => document.documentElement.scrollTop = 0}>Back To Top</button>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 flex justify-center md:mt-[4%] mt-[10%]">
                        <div className="sm:w-[24px] sm:h-[24px] md:w-[24px] md:h-[24px] lg:w-[35px] lg:h-[35px] w-[24px] h-[24px] bg-[url('GithubInverted.svg')] bg-cover bg-center rounded-full">
                            <a className="h-full w-full block " href="https://github.com/Bilal-A-G" target="_blank"></a>
                        </div>
                        <div className="sm:w-[24px] sm:h-[24px] md:w-[24px] md:h-[24px] lg:w-[35px] lg:h-[35px] w-[24px] h-[24px] bg-[url('LinkedIn.svg')] bg-cover bg-center rounded-full md:ml-[2%] ml-[5%]">
                            <a className="h-full w-full block " href="https://www.linkedin.com/in/bilal-abdul-g-288a75239/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;