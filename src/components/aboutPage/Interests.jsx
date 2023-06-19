const Interests = () => {
    return(
      <div className="bg-black h-[520px] w-full">
          <p className="justify-center text-white text-[16px] flex pt-[110px]">I have several </p>
          <p className="justify-center text-white text-5xl flex pt-[10px] font-semibold">Interests</p>
          <div className="w-full justify-center flex">
              <div className="grid auto-cols-max grid-flow-col gap-20 place-items-center justify-center h-[150px] mt-[80px]">
                  <div className="w-[100px] h-[100px] bg-red-200"></div>
                  <div className="w-[100px] h-[100px] bg-red-200"></div>
                  <div className="w-[100px] h-[100px] bg-red-200"></div>
                  <div className="w-[100px] h-[100px] bg-red-200"></div>
                  <div className="w-[100px] h-[100px] bg-red-200"></div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;