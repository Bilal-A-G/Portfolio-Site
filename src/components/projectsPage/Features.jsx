import Feature from "../Feature.jsx";

const Features = ({features}) => {
    return(
      <div className="w-full pb-[5%] bg-black">
          <p className="pt-[120px] w-full flex justify-center text-white">This project has the following</p>
          <p className="pt-[10px] w-full flex justify-center text-white font-semibold text-5xl">Features</p>
          <div className="mt-[2%] w-[75%] bg-white h-[2px] ml-[5%] mb-[5%]"/>
          {features.map(({name, description, odd, underline}) => 
              <Feature image={"bg-[url('Placeholder.png')]"} name={name} description={description} odd={odd} underline={underline}/>
          )}
      </div>  
    );
}

export default Features;