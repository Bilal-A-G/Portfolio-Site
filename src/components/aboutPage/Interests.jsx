const Interests = () => {
    return(
      <div className="bg-black h-[520px] w-full">
          <p className="justify-center text-white text-[16px] flex pt-[110px]">I have several </p>
          <p className="justify-center text-white text-5xl flex pt-[10px] font-semibold">Interests</p>
          <div className="w-full justify-center flex">
              <div className="grid auto-cols-max grid-flow-col gap-10 place-items-center justify-center h-[150px] mt-[80px]">
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Chess.svg')] bg-cover bg-center bg-no-repeat mt-[5px]"/>
                      <p className="text-white text-[25px] font-semibold pt-[25px] w-[130px] pl-[15px]">Chess</p>
                  </div>
                  <div className="mt-[20px]">
                      <div className="w-[110px] h-[90px] bg-[url('Blender.svg')] bg-cover bg-center bg-no-repeat ml-[20px]"/>
                      <p className="text-white text-[25px] font-semibold pt-[25px] w-[190px]">3D Modelling</p>
                  </div>
                  <div className="mt-[12px]">
                      <div className="w-[110px] h-[90px] bg-[url('Programming.svg')] bg-cover bg-center bg-no-repeat ml-[20px] mt-[10px]"/>
                      <p className="text-white text-[25px] font-semibold pt-[25px] w-[190px]">Programming</p>
                  </div>
                  <div className="mt-[15px]">
                      <div className="w-[110px] h-[90px] bg-[url('Atom.svg')] bg-cover bg-center bg-no-repeat mt-[10px]"/>
                      <p className="text-white text-[25px] font-semibold pt-[25px] w-[140px] ml-[5px]">Science</p>
                  </div>
                  <div className="mt-[23px]">
                      <div className="w-[110px] h-[90px] bg-[url('Reading.svg')] bg-cover bg-center bg-no-repeat"/>
                      <p className="text-white text-[25px] font-semibold pt-[25px] w-[50px] ml-[10px]">Reading</p>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;