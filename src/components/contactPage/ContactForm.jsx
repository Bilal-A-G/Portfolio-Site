const ContactForm = () => {
    return(
        <div className="w-full h-[810px] bg-off-white">
            <p className="w-full flex justify-center pt-[90px] font-semibold text-5xl">Contact Form</p>
            <div className="w-[940px] ml-[300px] h-[370px] mt-[85px] border-2 rounded-[20px] border-black">
                <div className="pt-[25px] pl-[30px] flex">
                    <div>Name:</div>
                    <div className="mt-[2px] ml-[30px] w-[250px] h-[25px] border-2 rounded-full border-black"/>
                </div>
                <div className="pt-[25px] pl-[30px] flex">
                    <div>Email:</div>
                    <div className="ml-[30px] w-[330px] h-[25px] border-2 rounded-full border-black"/>
                </div>
                <div className="pt-[25px] pl-[30px] flex">
                    <div>Message:</div>
                    <div className="ml-[30px] w-[650px] h-[200px] border-2 rounded-[20px] border-black"/>
                </div>
            </div>
            <a className="w-[240px] h-[30px] rounded-full bg-dark-red mt-[60px] pt-[1px] 
            justify-center flex font-semibold text-[16px] text-white ml-[650px] z-20" href={"/"}>
                Send
            </a>
        </div>
    );
}

export default ContactForm;