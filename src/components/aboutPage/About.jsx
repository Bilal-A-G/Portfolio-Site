﻿import SectionHeader from "../SectionHeader.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Interests from "./Interests.jsx";
import Accomplishments from "./Accomplishments.jsx";
import Styles from "../../Styles.jsx";
import Resources from "../../Resources.jsx";

const About = () => {
    return(
      <div>
          <SectionHeader title="About Me" subtitle="Here's more information"/>
          <ImageTextRow leftAlign={false} title="Description" subtitle="Here's a brief" image={Resources.ReadingPicture} sphere={true}
                        extras={
                            <div className={`${Styles.Body} text-black w-full md:pr-[30%] md:px-[0%] px-[20%]`}>
                                <p className="pt-[15%]">
                                    I'm a Canadian game programmer, living in the Greater Toronto Area. Currently I am also a student at Ontario Tech University, working with a team of developers to make great games
                                </p>
                                <p className="pt-[10%]">
                                    I am also very interested in science and reading, naturally, my favourite genre is sci fi 
                                </p>
                            </div>
                        }/>
          <Interests/>
          <Accomplishments/>
      </div>  
    );
}

export default About;