import Button from "../Button.jsx";

const ImportantLinks = ({githubUrl, itchUrl, trelloUrl}) => {
    return(
        <div className="w-full h-[580px] bg-off-white">
            <p className="pt-[120px] text-black w-full justify-center flex">For more, follow these</p>
            <p className="pt-[10px] text-black w-full justify-center flex font-semibold text-5xl">Important Links</p>

            <div className="w-full justify-center flex">
                <div className="grid auto-cols-max grid-flow-col gap-40 place-items-center justify-center h-[150px] mt-[80px]">
                    {githubUrl !== "" ?                   
                        <div>
                            <div className="ml-[40px] w-[90px] h-[90px] bg-[url('Github.svg')]"/>
                            <Button link={githubUrl} text={"Github"} width={"px-[60px]"} extras={"absolute mt-[30px]"} blank={true}/>
                        </div>
                        :
                        null
                    }
                    {itchUrl !== "" ?
                        <div>
                            <div className="ml-[33px] w-[90px] h-[90px] bg-[url('Itch.svg')]"/>
                            <Button link={itchUrl} text={"Itch"} width={"px-[60px]"} extras={"absolute mt-[30px]"} blank={true}/>
                        </div>
                        :
                        null
                    }
                    {trelloUrl !== "" ?
                        <div>
                            <div className="ml-[33px] w-[90px] h-[90px] bg-[url('Trello.svg')]"/>
                            <Button link={trelloUrl} text={"Trello"} width={"px-[60px]"} extras={"absolute mt-[30px]"} blank={true}/>
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