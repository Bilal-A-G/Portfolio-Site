import Styles from "../../Styles.jsx";

const Accomplishments = () => {
    return(
        <div className="bg-off-white md:pb-[7%] pb-[15%] w-full">
            <p className={`text-black ${Styles.Body} pt-[8%] w-full flex justify-center`}>These are some of my</p>
            <p className={`text-black ${Styles.SectionSubHeader} pt-[1%] w-full flex justify-center`}>Accomplishments</p>
            <div className="w-full flex justify-center pt-[2%]">
                <div>
                    <div className={`text-black ${Styles.Body} pt-[5%] justify-start w-full flex`}>
                        <p>o</p><p className="pl-[5%]">Vice President of the OTU Game Programming Club</p>
                    </div>
                    <div className={`text-black ${Styles.Body} pt-[1%] justify-start w-full flex`}>
                        <p>o</p><p className="pl-[5%]">Currently holding a 4.0 GPA on a 4.3 scale</p>
                    </div>
                    <div className={`text-black ${Styles.Body} pt-[1%] justify-start w-full flex`}>
                        <p>o</p><p className="pl-[5%]">600+ commits on Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accomplishments;