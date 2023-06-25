import Styles from "../Styles.jsx";


const SectionHeader = ({subtitle, title}) => {
    return(
        <div className="pb-[5%] w-full bg-black">
            <p className={`text-white ${Styles.Body} pt-[6%] w-1/2 flex justify-center`}>{subtitle}</p>
            <p className={`text-white ${Styles.SectionHeader} w-1/2 flex justify-center`}>{title}</p>
            <div className="w-1/2 justify-start flex">
                <div className={`bg-white xl:h-[3px] md:h-[2px] h-[1px] mt-[2%] w-full`}/>
            </div>
        </div>
    );
}

export default SectionHeader;