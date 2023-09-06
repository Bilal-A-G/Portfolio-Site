import Styles from "../../Styles.jsx";
import FadeIn from "../FadeIn.jsx";
import Resources from "../../Resources.jsx";

const Interests = () => {
    return(
      <div className="bg-black text-white pb-[8%] w-full">
          <FadeIn>
              <p className={`justify-center ${Styles.Body} flex pt-[7%]`}>I have several </p>
          </FadeIn>
          <FadeIn>
              <p className={`justify-center ${Styles.SectionSubHeader} flex mt-[1%]`}>Interests</p>
          </FadeIn>
          <div className={`w-full justify-center flex font-semibold text-white ${Styles.SubSectionHeader}`}>
              <div className="grid md:grid-cols-5 auto-rows-max md:grid-flow-col place-items-center justify-center pt-[5%] md:px-[8%]">
                  <div className="mt-[20px]">
                      <FadeIn>
                          <img src={Resources.ChessLogo} alt={"Chess"} className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] object-cover object-center object-no-repeat mt-[5px]"/>
                      </FadeIn>
                      <FadeIn>
                          <p className="pt-[25px] md:w-[130px] md:pl-[15px] pl-[20%]">Chess</p>
                      </FadeIn>
                  </div>
                  <div className="mt-[20px]">
                      <FadeIn>
                          <img src={Resources.BlenderLogo} alt={"3D Modelling"} className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] object-cover object-center object-no-repeat md:ml-[20px] ml-[20%]"/>
                      </FadeIn>
                      <FadeIn>
                          <p className="pt-[25px] 2xl:w-[200px] md:w-[190px] w-[200px] md:pl-[0%] pl-[18%]">3D Modelling</p>
                      </FadeIn>
                  </div>
                  <div className="mt-[12px]">
                      <FadeIn>
                          <img src={Resources.ProgrammingLogo} alt={"Programming"} className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] object-cover object-center object-no-repeat md:ml-[30px] ml-[20%] mt-[10px]"/>
                      </FadeIn>
                      <FadeIn>
                          <p className="pt-[25px] md:w-[160px] lg:w-[180px] w-[200px] md:pl-[0%] pl-[15%]">Programming</p>
                      </FadeIn>
                  </div>
                  <div className="mt-[15px]">
                      <FadeIn>
                          <img src={Resources.AtomLogo} alt={"Science"} className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] object-cover object-center object-no-repeat mt-[10px] md:ml-[0%] ml-[15%]"/>
                      </FadeIn>
                      <FadeIn>
                          <p className="pt-[25px] lg:w-[110px] md:w-[20px] w-[150px] md:ml-[1px] ml-[20%]">Science</p>
                      </FadeIn>
                  </div>
                  <div className="mt-[21px]">
                      <FadeIn>
                          <img src={Resources.ReadingLogo} alt={"Reading"} className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] object-cover object-center object-no-repeat"/>
                      </FadeIn>
                      <FadeIn>
                          <p className="pt-[25px] md:w-[20px] w-[50px] ml-[10px]">Reading</p>
                      </FadeIn>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;