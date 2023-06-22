const Feature = ({name, description, image, odd, underline}) => {
    return(
      <div className="flex">
          {odd ? <>
                  <div className="w-1/2 text-white">
                      <p className="text-3xl font-semibold justify-center flex w-full pt-[130px] pl-[180px]">{name}</p>
                      <p className="text-[16px] justify-center flex w-full pt-[30px] pl-[400px]">{description}</p>
                      {underline ? <div className="w-[1200px] h-[2px] mt-[130px] ml-[220px] bg-white"/> : <div></div>}
                  </div>
                  <div className="w-[300px] h-[300px] ml-[50px] mt-[40px] border-2 border-white rounded-full">
                      <div className={`w-[260px] h-[260px] mt-[18px] ml-[18px] rounded-full ${image} bg-cover bg-center`}></div>
                  </div>
              </>
              :
              <>
                  <div className="w-1/2">
                      <div className="w-[300px] h-[300px] ml-[400px] mt-[40px] border-2 border-white rounded-full">
                          <div className={`w-[260px] h-[260px] mt-[18px] ml-[18px] rounded-full ${image} bg-cover bg-center`}></div>
                      </div>
                      {underline ? <div className="w-[1200px] h-[2px] mt-[40px] ml-[80px] bg-white"/> : <div></div>}
                  </div>
                  <div className="w-1/2 text-white">
                      <p className="text-3xl font-semibold justify-start flex w-full pt-[130px] pl-[60px]">{name}</p>
                      <p className="text-[16px] justify-start flex w-1/2 pt-[30px] pl-[60px]">{description}</p>
                  </div>
              </>
          }
      </div>  
    );
}

export default Feature;