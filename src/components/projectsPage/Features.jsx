import Feature from "../Feature.jsx";

const Features = ({features}) => {
    return(
      <div className="w-full h-[1400px] bg-black">
          <p className="pt-[120px] w-full flex justify-center text-white">This project has the following</p>
          <p className="pt-[10px] w-full flex justify-center text-white font-semibold text-5xl">Features</p>
          <div className="mt-[40px] w-[1200px] bg-white h-[2px] ml-[70px]"/>
          {features.map(({name, odd, underline}) => 
              <Feature image={"bg-[url('Placeholder.png')]"} name={name} description={"Lorem ipsum dolor sit amet consecutor idk words words words"} odd={odd} underline={underline}/>
          )}
      </div>  
    );
}

export default Features;