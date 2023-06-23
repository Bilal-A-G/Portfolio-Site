import SectionHeader from "../SectionHeader.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Interests from "./Interests.jsx";
import Accomplishments from "./Accomplishments.jsx";

const About = () => {
    return(
      <div>
          <SectionHeader title="About Me" subtitle="Here's more information" underlineLength="w-[525px]"/>
          <ImageTextRow leftAlign={false} title="Description" subtitle="Here's a brief" image="bg-[url('Placeholder.png')]" 
                        extras={
                            <>
                                <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">
                                    I'm a Canadian game programmer, living in the Greater Toronto Area. Currently I am also a student at Ontario Tech University, working with a team of developers to make great games
                                </p>
                                <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">
                                    I am also very interested in science and reading, naturally, my favourite genre is sci fi 
                                </p>
                                <div className="flex w-full h-full pt-2">
                                </div>
                            </>
                        }/>
          <Interests/>
          <Accomplishments/>
      </div>  
    );
}

export default About;