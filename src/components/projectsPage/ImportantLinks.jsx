import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";

const ImportantLinks = ({githubUrl, itchUrl, trelloUrl}) => {
    return(
        <div className="w-full md:pb-[12%] pb-[20%] bg-off-white">
            <p className={`pt-[8%] text-black ${Styles.Body} w-full justify-center flex`}>For more, follow these</p>
            <p className={`pt-[1%] text-black w-full justify-center flex ${Styles.SectionSubHeader}`}>Important Links</p>

            <div className="w-full justify-center flex">
                <div className="grid auto-cols-max grid-flow-col md:gap-[100%] sm:gap-[150%] place-items-center justify-center mt-[8%]">
                    {githubUrl !== "" ?                   
                        <div>
                            <div className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] w-[60px] h-[60px] bg-[url('Github.svg')]"/>
                            <div className="w-full flex justify-center">
                                <Button link={githubUrl} text={"Github"} width={"md:px-[4%] px-[8%]"} extras={"absolute md:mt-[2%] mt-[7%]"} blank={true}/>
                            </div>
                        </div>
                        :
                        null
                    }
                    {itchUrl !== "" ?
                        <div>
                            <div className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] w-[60px] h-[60px] bg-[url('Itch.svg')]"/>
                            <div className="w-full flex justify-center">
                                <Button link={itchUrl} text={"Itch"} width={"md:px-[4%] px-[8%]"} extras={"absolute md:mt-[2%] mt-[7%]"} blank={true}/>
                            </div>
                        </div>
                        :
                        null
                    }
                    {trelloUrl !== "" ?
                        <div>
                            <div className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] w-[60px] h-[60px] bg-[url('Trello.svg')]"/>
                            <div className="w-full flex justify-center">
                                <Button link={trelloUrl} text={"Trello"} width={"md:px-[4%] px-[8%]"} extras={"absolute md:mt-[2%] mt-[7%]"} blank={true}/>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

export default ImportantLinks;