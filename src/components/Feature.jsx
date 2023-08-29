import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";
import FadeIn from "./FadeIn.jsx";

const Feature = ({name, description, image, odd, underline}) => {
    return(
      <div>
          {odd ? 
              <div>
                  <div className="md:flex block pt-[3%]">
                      <div className="md:w-1/2 w-full text-white">
                          <FadeIn>
                              <p className={`${Styles.SubSectionHeader} font-semibold justify-center flex w-full pt-[10%]`}>{name}</p>
                          </FadeIn>
                          <FadeIn>
                              <div className="w-full flex justify-center">
                                  <div className={`${Styles.Body} pt-[8%] md:pl-[30%] pl-[0%] md:mx-[0%] mx-[10%]`}>{description}</div>
                              </div>
                          </FadeIn>
                      </div>
                      <div className={`w-1/2 justify-center flex grid place-items-center md:ml-[0%] ml-[25%] md:pt-[0%] pt-[10%] ${!underline ? "md:pb-[0%] pb-[10%]" : ""}`}>
                        <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                  </div>
                  <FadeIn>
                      {underline ? <div className="md:w-[85%] w-full lg:h-[2px] h-[1px] md:mt-[4%] mt-[10%] md:ml-[10%] ml-[0%] bg-white"/> : null}
                  </FadeIn>
              </div>
              :
              <div>
                  <div className={`md:flex hidden pt-[3%]`}>
                      <div className="md:w-1/2 w-full text-white justify-center flex grid place-items-center">
                          <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                      <div className={`w-1/2 text-white ${!underline ? "md:pb-[0%] pb-[10%]" : ""}`}>
                          <FadeIn>
                              <p className={`${Styles.SubSectionHeader} font-semibold flex w-full pt-[10%] pr-[30%]`}>{name}</p>
                          </FadeIn>
                          <FadeIn>
                              <div className="w-full flex justify-center md:px-[0%] px-[10%]">
                                  <div className={`${Styles.Body} pt-[8%] pr-[30%]`}>{description}</div>
                              </div>
                          </FadeIn>
                      </div>
                  </div>
                  <div className={`md:hidden block pt-[3%]`}>
                      <div className="w-full text-white">
                          <FadeIn>
                              <p className={`${Styles.SubSectionHeader} font-semibold flex w-full pt-[10%] justify-center`}>{name}</p>
                          </FadeIn>
                          <FadeIn>
                              <div className="w-full">
                                  <div className={`${Styles.Body} pt-[10%] px-[10%]`}>{description}</div>
                              </div>
                          </FadeIn>
                      </div>
                      <div className={`md:w-1/2 w-full text-white justify-center flex grid place-items-center md:pt-[0%] pt-[6%] ${!underline ? "md:pb-[0%] pb-[10%]" : ""}`}>
                          <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                  </div>
                  <FadeIn>
                      {underline ? <div className="md:w-[85%] w-full lg:h-[2px] h-[1px] md:mt-[4%] mt-[10%] md:ml-[5%] ml-[0%] bg-white"/> : null}
                  </FadeIn>
              </div>
          }
      </div>  
    );
}

export default Feature;