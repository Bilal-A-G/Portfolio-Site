import Styles from "../../Styles.jsx";

const Interests = () => {
    return(
      <div className="bg-black text-white pb-[8%] w-full">
          <p className={`justify-center ${Styles.Body} flex pt-[7%]`}>I have several </p>
          <p className={`justify-center ${Styles.SectionSubHeader} flex mt-[1%]`}>Interests</p>
          <div className={`w-full justify-center flex font-semibold text-white ${Styles.SubSectionHeader}`}>
              <div className="grid auto-cols-max md:grid-flow-col gap-10 place-items-center justify-center pt-[5%]">
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Chess.svg')] bg-cover bg-center bg-no-repeat mt-[5px]"/>
                      <p className="pt-[25px] md:w-[130px] md:pl-[15px] pl-[20%]">Chess</p>
                  </div>
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Blender.svg')] bg-cover bg-center bg-no-repeat md:ml-[20px] ml-[20%]"/>
                      <p className="pt-[25px] md:w-[190px] w-[200px] md:pl-[0%] pl-[18%]">3D Modelling</p>
                  </div>
                  <div className="mt-[12px]">
                      <div className="w-[110px] h-[90px] bg-[url('Programming.svg')] bg-cover bg-center bg-no-repeat md:ml-[30px] ml-[20%] mt-[10px]"/>
                      <p className="pt-[25px] md:w-[190px] w-[200px] md:pl-[0%] pl-[15%]">Programming</p>
                  </div>
                  <div className="mt-[15px]">
                      <div className="w-[110px] h-[90px] bg-[url('Atom.svg')] bg-cover bg-center bg-no-repeat mt-[10px] md:ml-[0%] ml-[15%]"/>
                      <p className="pt-[25px] md:w-[140px] w-[150px] md:ml-[5px] ml-[20%]">Science</p>
                  </div>
                  <div>
                      <div className="w-[110px] h-[90px] bg-[url('Reading.svg')] bg-cover bg-center bg-no-repeat"/>
                      <p className="pt-[25px] w-[50px] ml-[10px]">Reading</p>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;