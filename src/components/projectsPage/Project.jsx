import SectionHeader from "../SectionHeader.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Features from "./Features.jsx";
import ImportantLinks from "./ImportantLinks.jsx";

const Project = ({name}) => {
    return(
      <div>
          <SectionHeader title={name} subtitle={"Here's more information about"} underlineLength={"w-[730px]"}/>
          <ImageTextRow title={"Description"} subtitle={"Here's a short"} image={"bg-[url(Placeholder.png)]"} leftAlign={true} 
                        extras={<div className={"w-[400px] pt-[60px]"}>
                            Lorem ipsum dolor sit amet consecutor idk words words words 
                            Lorem ipsum dolor sit amet consecutor idk words words words
                        </div>}/>
          <Features/>
          <ImportantLinks github={true} itch={true} trello={true}/>
      </div>  
    );
}

export default Project;