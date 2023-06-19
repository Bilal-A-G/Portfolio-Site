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
                                <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">Lorem ipsum dolor sit amet consecutor idk words words words</p>
                                <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">Lorem ipsum dolor sit amet consecutor idk words words words</p>
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