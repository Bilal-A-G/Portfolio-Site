import Feature from "../Feature.jsx";
import Styles from "../../Styles.jsx";

const Features = ({features}) => {
    return(
      <div className="w-full pb-[5%] bg-black">
          <p className={`pt-[8%] ${Styles.Body} w-full flex justify-center text-white`}>This project has the following</p>
          <p className={`pt-[1%] w-full flex justify-center text-white ${Styles.SectionSubHeader}`}>Features</p>
          <div className="mt-[2%] w-[75%] bg-white md:h-[2px] h-[1px] ml-[5%] mb-[1%]"/>
          {features.map(({name, description, odd, underline}) =>
              <Feature image={"bg-[url('Placeholder.png')]"} name={name} description={description} odd={odd} underline={underline}/>
          )}
      </div>  
    );
}

export default Features;