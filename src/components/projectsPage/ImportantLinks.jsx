import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";
import FadeIn from "../FadeIn.jsx";
import Resources from "../../Resources.jsx";

const ImportantLinks = ({githubUrl, itchUrl, trelloUrl}) => {
    return(
        <div className="w-full md:pb-[12%] pb-[20%] bg-off-white">
            <FadeIn>
                <p className={`pt-[8%] text-black ${Styles.Body} w-full justify-center flex`}>For more, follow these</p>
            </FadeIn>
            <FadeIn>
                <p className={`pt-[1%] text-black w-full justify-center flex ${Styles.SectionSubHeader}`}>Important Links</p>
            </FadeIn>
            <FadeIn>
                <div className="w-full justify-center flex">
                    <div className="grid auto-cols-max grid-flow-col md:gap-[100%] gap-[110%] place-items-center justify-center mt-[8%]">
                        {githubUrl !== "" ?
                            <div className={"grid auto-cols-max grid-flow-row gap-[15%] place-items-center justify-center"}>
                                <img src={Resources.GithubLogo} alt={"Github"} className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]"/>
                                <Button link={githubUrl} text={"Github"} width={"md:w-[90px] w-[80px]"} blank={true} className={`w-full flex justify-center`}/>
                            </div>
                            :
                            null
                        }
                        {itchUrl !== "" ?
                            <div className={"grid auto-cols-max grid-flow-row gap-[15%] place-items-center justify-center"}>
                                <img src={Resources.ItchLogo} alt={"Itch"} className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] w-[50px] h-[50px] bg-[url('Itch.svg')]"/>
                                <Button link={itchUrl} text={"Itch"} width={"md:w-[90px] w-[80px]"} blank={true} className={`w-full flex justify-center`}/>
                            </div>
                            :
                            null
                        }
                        {trelloUrl !== "" ?
                            <div className={"grid auto-cols-max grid-flow-row gap-[15%] place-items-center justify-center"}>
                                <img src={Resources.TrelloLogo} alt={"Trello"} className="xl:w-[90px] xl:h-[90px] lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] w-[50px] h-[50px] bg-[url('Trello.svg')]"/>
                                <Button link={trelloUrl} text={"Trello"} width={"md:w-[90px] w-[80px]"} blank={true} className={`w-full flex justify-center`}/>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default ImportantLinks;