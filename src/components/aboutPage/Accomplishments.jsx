import Styles from "../../Styles.jsx";

const Accomplishments = () => {
    return(
        <div className="bg-off-white md:pb-[7%] pb-[20%] w-full">
            <p className={`text-black ${Styles.Body} pt-[8%] w-full flex justify-center`}>These are some of my</p>
            <p className={`text-black ${Styles.SectionSubHeader} pt-[1%] w-full flex justify-center`}>Accomplishments</p>
            <div className={`text-black ${Styles.Body} pt-[5%] pl-[25%] justify-center w-3/4 flex`}>
                <p>o</p><p className="pl-[20px]">Vice President of the OTU Game Programming Club</p>
            </div>
            <div className={`text-black ${Styles.Body} pt-[1%] pl-[25%] justify-center w-3/4 flex`}>
                <p>o</p><p className="pl-[20px]">Currently holding a 4.0 GPA on a 4.3 scale</p>
            </div>
            <div className={`text-black ${Styles.Body} pt-[1%] pl-[16.4%] justify-center w-3/4 flex`}>
                <p>o</p><p className="pl-[20px]">600+ commits on Github</p>
            </div>
        </div>
    );
}

export default Accomplishments;