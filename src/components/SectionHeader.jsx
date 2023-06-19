const SectionHeader = ({subtitle, title, underlineLength}) => {
    return(
        <div className="h-[290px] w-full bg-black">
            <p className="text-white text-[16px] font-regular pt-[110px] pl-[325px]">{subtitle}</p>
            <p className="text-white text-6xl font-semibold pl-[300px] pt-[7px]">{title}</p>
            <div className={`bg-white h-[3px] ${underlineLength} mt-[10px] ml-[80px]`}/>
        </div>
    );
}

export default SectionHeader;