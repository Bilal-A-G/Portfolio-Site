import Styles from "../../Styles.jsx";

const Interests = () => {
    return(
      <div className="bg-black text-white pb-[8%] w-full">
          <p className={`justify-center ${Styles.Body} flex pt-[7%]`}>I have several </p>
          <p className={`justify-center ${Styles.SectionSubHeader} flex mt-[1%]`}>Interests</p>
          <div className={`w-full justify-center flex font-semibold text-white ${Styles.SubSectionHeader}`}>
              <div className="grid md:grid-cols-5 auto-rows-max md:grid-flow-col place-items-center justify-center pt-[5%] md:px-[8%]">
                  <div className="mt-[20px]">
                      <div className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] bg-[url('Chess.svg')] bg-cover bg-center bg-no-repeat mt-[5px]"/>
                      <p className="pt-[25px] md:w-[130px] md:pl-[15px] pl-[20%]">Chess</p>
                  </div>
                  <div className="mt-[20px]">
                      <div className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] bg-[url('Blender.svg')] bg-cover bg-center bg-no-repeat md:ml-[20px] ml-[20%]"/>
                      <p className="pt-[25px] 2xl:w-[200px] md:w-[190px] w-[200px] md:pl-[0%] pl-[18%]">3D Modelling</p>
                  </div>
                  <div className="mt-[12px]">
                      <div className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] bg-[url('Programming.svg')] bg-cover bg-center bg-no-repeat md:ml-[30px] ml-[20%] mt-[10px]"/>
                      <p className="pt-[25px] md:w-[160px] lg:w-[180px] w-[200px] md:pl-[0%] pl-[15%]">Programming</p>
                  </div>
                  <div className="mt-[15px]">
                      <div className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] bg-[url('Atom.svg')] bg-cover bg-center bg-no-repeat mt-[10px] md:ml-[0%] ml-[15%]"/>
                      <p className="pt-[25px] lg:w-[110px] md:w-[20px] w-[150px] md:ml-[1px] ml-[20%]">Science</p>
                  </div>
                  <div className="mt-[21px]">
                      <div className="xl:w-[120px] xl:h-[100px] w-[110px] h-[90px] md:w-[90px] md:h-[70px] bg-[url('Reading.svg')] bg-cover bg-center bg-no-repeat"/>
                      <p className="pt-[25px] md:w-[20px] w-[50px] ml-[10px]">Reading</p>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;