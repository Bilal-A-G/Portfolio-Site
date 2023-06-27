import SectionHeader from "../SectionHeader.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Features from "./Features.jsx";
import ImportantLinks from "./ImportantLinks.jsx";
import Styles from "../../Styles.jsx";

const Project = ({name, image, description, features, github, itch, trello}) => {
    return(
      <div>
          <SectionHeader title={name} subtitle={"Here's more information about"}/>
          <ImageTextRow title={"Description"} subtitle={"Here's a short"} image={image} leftAlign={true} 
                        extras={<div className={`md:pr-[20%] md:px-[0%] px-[20%] md:pt-[10%] pt-[5%] ${Styles.Body}`}>
                            {description}
                        </div>}/>
          <Features features={features}/>
          <ImportantLinks githubUrl={github} itchUrl={itch} trelloUrl={trello}/>
      </div>  
    );
}

export default Project;