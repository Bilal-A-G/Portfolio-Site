const About = () => {
    return (
        <div className="h-[650px] w-full bg-off-white flex">
            <div className="ml-[80px] mt-[70px] h-[540px] w-[740px] bg-black rounded-[40px] inline flex">
                <div className="ml-[120px] mt-[40px] h-[460px] w-[460px] border-2 rounded-full absolute"/>
                <div className="ml-[570px] mt-[450px] h-[60px] w-[60px] border-2 rounded-full absolute"/>
                <div className='h-[400px] w-[400px] bg-[url("Placeholder.png")] bg-cover rounded-full ml-[152px] mt-[69px]'/>
            </div>
            <div className="w-1/2 text-black mt-[120px] pl-[130px] space-y-2 h-[150px]">
                <p className="text-[16px] text-black">Here's a little bit</p>
                <p className="text-5xl font-semibold text-black">About Me</p>
                <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">I'm a games programmer, that's interested in gameplay, graphics and engines.</p>
                <p className="pt-[20px] text-[14px] text-black w-[300px] tracking-wide">I'm proficient in the following tools:</p>
                <div className="flex w-full h-full pt-2">
                    <div className='h-[60px] w-[60px] bg-[url("CSharpLogo.png")] bg-cover bg-center'/>
                    <div className='h-[48px] w-[43px] bg-[url("C++Logo.png")] bg-cover bg-center mt-[6px] ml-1'/>
                    <div className='h-[65px] w-[65px] bg-[url("OpenGLLogo.png")] bg-cover bg-center ml-2'/>
                    <div className='h-[50px] w-[50px] bg-[url("UnityLogo.png")] bg-cover bg-center ml-1 mt-[3px]'/>
                    <div className='h-[50px] w-[50px] bg-[url("UnrealLogo.png")] bg-cover bg-center ml-1 mt-[3px]'/>
                </div>
                <a className="select-none bg-dark-red text-white px-20 py-1 rounded-full mt-[15px] font-semibold" href="/about">Read More</a>
            </div>
        </div>
    );
}

export default About;