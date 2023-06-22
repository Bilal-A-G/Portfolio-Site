import Button from "../Button.jsx";

const ImportantLinks = ({github, itch, trello}) => {
    return(
        <div className="w-full h-[580px] bg-off-white">
            <p className="pt-[120px] text-black w-full justify-center flex">For more, follow these</p>
            <p className="pt-[10px] text-black w-full justify-center flex font-semibold text-5xl">Important Links</p>

            <div className="w-full justify-center flex">
                <div className="grid auto-cols-max grid-flow-col gap-40 place-items-center justify-center h-[150px] mt-[80px]">
                    {github ?                   
                        <div>
                            <div className="ml-[40px] w-[90px] h-[90px] bg-[url('Github.svg')]"/>
                            <Button link={""} text={"Github"} width={"px-[60px]"} extras={"absolute mt-[30px]"}/>
                        </div>
                        :
                        <div></div>
                    }
                    {itch ?
                        <div>
                            <div className="ml-[26px] w-[90px] h-[90px] bg-[url('Itch.svg')]"/>
                            <Button link={""} text={"Itch"} width={"px-[60px]"} extras={"absolute mt-[30px]"}/>
                        </div>
                        :
                        <div></div>
                    }
                    {trello ?
                        <div>
                            <div className="ml-[33px] w-[90px] h-[90px] bg-[url('Trello.svg')]"/>
                            <Button link={""} text={"Trello"} width={"px-[60px]"} extras={"absolute mt-[30px]"}/>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ImportantLinks;