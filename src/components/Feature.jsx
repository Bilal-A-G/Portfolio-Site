import ImageWithBorder from "./ImageWithBorder.jsx";
import Styles from "../Styles.jsx";

const Feature = ({name, description, image, odd, underline}) => {
    return(
      <div>
          {odd ? 
              <div>
                  <div className="flex">
                      <div className="w-1/2 text-white">
                          <p className="text-3xl font-semibold pl-[30%] flex w-full pt-[10%]">{name}</p>
                          <div className="w-full flex justify-center">
                              <div className="text-[16px] pt-[8%] pl-[30%]">{description}</div>
                          </div>
                      </div>
                      <div className="w-1/2 justify-center flex grid place-items-center">
                        <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                  </div>
                  {underline ? <div className="w-[85%] h-[2px] mt-[2%] ml-[10%] bg-white"/> : <div></div>}
              </div>
              :
              <div>
                  <div className="flex">
                      <div className="w-1/2 justify-center flex grid place-items-center">
                          <ImageWithBorder image={image} style={Styles.MediumImage}/>
                      </div>
                      <div className="w-1/2 text-white">
                          <p className="text-3xl font-semibold flex w-full pt-[10%] pr-[30%]">{name}</p>
                          <div className="w-full flex justify-center">
                              <div className="text-[16px] pt-[8%] pr-[30%]">{description}</div>
                          </div>
                      </div>
                  </div>
                  {underline ? <div className="w-[85%] h-[2px] mt-[2%] ml-[5%] bg-white"/> : <div></div>}
              </div>
          }
      </div>  
    );
}

export default Feature;