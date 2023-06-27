import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";

const Feature = ({name, description, image, odd, underline}) => {
    return(
      <div>
          {odd ? 
              <div>
                  <div className="md:flex block pt-[3%]">
                      <div className="md:w-1/2 w-full text-white">
                          <p className={`${Styles.SubSectionHeader} font-semibold pl-[30%] flex w-full pt-[10%]`}>{name}</p>
                          <div className="w-full flex justify-center">
                              <div className={`${Styles.Body} pt-[8%] md:pl-[30%] pl-[10%]`}>{description}</div>
                          </div>
                      </div>
                      <div className="w-1/2 justify-center flex grid place-items-center md:ml-[0%] ml-[40%] md:pt-[0%] pt-[10%]">
                        <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                  </div>
                  {underline ? <div className="w-[85%] lg:h-[2px] h-[1px] mt-[4%] ml-[10%] bg-white"/> : <div></div>}
              </div>
              :
              <div>
                  <div className="md:flex hidden pt-[3%]">
                      <div className="md:w-1/2 w-full text-white justify-center flex grid place-items-center">
                          <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                      <div className="w-1/2 text-white">
                          <p className={`${Styles.SubSectionHeader} font-semibold flex w-full pt-[10%] pr-[30%]`}>{name}</p>
                          <div className="w-full flex justify-center">
                              <div className={`${Styles.Body} pt-[8%] pr-[30%]`}>{description}</div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="md:hidden block pt-[3%]">
                      <div className="w-1/2 text-white">
                          <p className={`${Styles.SubSectionHeader} font-semibold flex w-full pt-[10%] md:pr-[30%] md:ml-[0%] ml-[60%]`}>{name}</p>
                          <div className="w-full md:pl-[0%] pl-[20%]">
                              <div className={`${Styles.Body} md:pt-[8%] pt-[20%] md:pr-[30%] md:w-full w-[400px]`}>{description}</div>
                          </div>
                      </div>
                      <div className="md:w-1/2 w-full text-white justify-center flex grid place-items-center md:pt-[0%] pt-[6%]">
                          <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                  </div>
                  {underline ? <div className="w-[85%] lg:h-[2px] h-[1px] mt-[4%] ml-[5%] bg-white"/> : <div></div>}
              </div>
          }
      </div>  
    );
}

export default Feature;