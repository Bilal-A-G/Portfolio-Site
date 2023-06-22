import Feature from "../Feature.jsx";

const Features = () => {
    return(
      <div className="w-full h-[1400px] bg-black">
          <p className="pt-[120px] w-full flex justify-center text-white">This project has the following</p>
          <p className="pt-[10px] w-full flex justify-center text-white font-semibold text-5xl">Features</p>
          <div className="mt-[40px] w-[1200px] bg-white h-[2px] ml-[70px]"/>
          <Feature image={"bg-[url('Placeholder.png')]"} name={"Feature 1"} description={"Lorem ipsum dolor sit amet consecutor idk words words words"} odd={true} underline={true}/>
          <Feature image={"bg-[url('Placeholder.png')]"} name={"Feature 2"} description={"Lorem ipsum dolor sit amet consecutor idk words words words"} odd={false} underline={true}/>
          <Feature image={"bg-[url('Placeholder.png')]"} name={"Feature 3"} description={"Lorem ipsum dolor sit amet consecutor idk words words words"} odd={true} underline={false}/>
      </div>  
    );
}

export default Features;