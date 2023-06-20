const Interests = () => {
    return(
      <div className="bg-black h-[520px] w-full">
          <p className="justify-center text-white text-[16px] flex pt-[110px]">I have several </p>
          <p className="justify-center text-white text-5xl flex pt-[10px] font-semibold">Interests</p>
          <div className="w-full justify-center flex">
              <div className="grid auto-cols-max grid-flow-col gap-5 place-items-center justify-center h-[150px] mt-[80px]">
                  <div className="w-[140px] h-[140px] bg-[url('ChessPieces.svg')] bg-cover bg-center bg-no-repeat">
                      <p className="text-white text-[25px] font-semibold pt-[145px] pl-[35px]">Chess</p>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[url('Atom.svg')] bg-cover bg-center bg-no-repeat">
                      <p className="text-white text-[25px] font-semibold pt-[150px] pl-[35px]">Science</p>
                  </div>
              </div>
          </div>
      </div>  
    );
}

export default Interests;