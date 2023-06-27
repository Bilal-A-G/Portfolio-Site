import Styles from "../../Styles.jsx";

const Accomplishments = () => {
    return(
        <div className="bg-off-white md:pb-[7%] pb-[20%] w-full">
            <p className={`text-black ${Styles.Body} pt-[8%] w-full flex justify-center`}>These are some of my</p>
            <p className={`text-black ${Styles.SectionSubHeader} pt-[1%] w-full flex justify-center`}>Accomplishments</p>
            <div className={`text-black ${Styles.Body} pt-[5%] justify-center w-full flex`}>
                <p>o</p><p className="pl-[20px]">Event Coordinator of the Ontario Tech Chess Club</p>
            </div>
            <div className={`text-black ${Styles.Body} pt-[1%] justify-center w-full flex`}>
                <p>o</p><p className="pl-[20px]">Vice President of the Ontario Tech Game Programming Club</p>
            </div>
            <div className={`text-black ${Styles.Body} pt-[1%] justify-center w-full flex`}>
                <p>o</p><p className="pl-[20px]">Currently holding a 4.0 GPA on a 4.3 scale</p>
            </div>
        </div>
    );
}

export default Accomplishments;