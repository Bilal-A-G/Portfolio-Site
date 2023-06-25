import Styles from "../../Styles.jsx";

const Interests = () => {
    return(
      <div className="bg-black text-white pb-[8%] w-full">
          <p className={`justify-center ${Styles.Body} flex pt-[7%]`}>I have several </p>
          <p className={`justify-center ${Styles.SectionSubHeader} flex mt-[1%]`}>Interests</p>
          <div className={`w-full justify-center flex font-semibold text-white ${Styles.SubSectionHeader}`}>
              <div className="grid auto-cols-max grid-flow-col gap-10 place-items-center justify-center pt-[5%]">
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Chess.svg')] bg-cover bg-center bg-no-repeat mt-[5px]"/>
                      <p className="pt-[25px] w-[130px] pl-[15px]">Chess</p>
                  </div>
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Blender.svg')] bg-cover bg-center bg-no-repeat ml-[20px]"/>
                      <p className="pt-[25px] w-[190px]">3D Modelling</p>
                  </div>
                  <div className="mt-[12px]">
                      <div className="w-[110px] h-[90px] bg-[url('Programming.svg')] bg-cover bg-center bg-no-repeat ml-[30px] mt-[10px]"/>
                      <p className="pt-[25px] w-[190px]">Programming</p>
                  </div>
                  <div className="mt-[15px]">
                      <div className="w-[110px] h-[90px] bg-[url('Atom.svg')] bg-cover bg-center bg-no-repeat mt-[10px]"/>
                      <p className="pt-[25px] w-[140px] ml-[5px]">Science</p>
                  </div>
                  <div className="mt-[23px]">
                      <div className="w-[110px] h-[90px] bg-[url('Reading.svg')] bg-cover bg-center bg-no-repeat"/>
                      <p className="pt-[25px] w-[50px] ml-[10px]">Reading</p>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;