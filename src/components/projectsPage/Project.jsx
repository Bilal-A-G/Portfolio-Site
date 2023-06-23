import SectionHeader from "../SectionHeader.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Features from "./Features.jsx";
import ImportantLinks from "./ImportantLinks.jsx";

const Project = ({name, image, description, features, github, itch, trello}) => {
    return(
      <div>
          <SectionHeader title={name} subtitle={"Here's more information about"} underlineLength={"w-[730px]"}/>
          <ImageTextRow title={"Description"} subtitle={"Here's a short"} image={image} leftAlign={true} 
                        extras={<div className={"w-[400px] pt-[60px]"}>
                            {description}
                        </div>}/>
          <Features features={features}/>
          <ImportantLinks githubUrl={github} itchUrl={itch} trelloUrl={trello}/>
      </div>  
    );
}

export default Project;