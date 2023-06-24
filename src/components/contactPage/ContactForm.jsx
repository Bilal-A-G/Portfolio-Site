const ContactForm = () => {
    return(
        <div className="w-full pb-[15%] bg-off-white">
            <p className="w-full flex justify-center pt-[90px] font-semibold text-5xl">Contact Form</p>
            <div className="w-full flex justify-center">
                <form className="px-[7%] py-[3%] mt-[85px] border-2 rounded-[20px] border-black">
                    <div className="pl-[30px] flex">
                        <label htmlFor="name">Name:</label>
                        <div className="mt-[2px] ml-[30px] w-[250px] h-[25px] border-2 rounded-full border-black justify-center flex">
                            <input id="name" placeholder="Your name here" name="name" type={"text"} required={true} className="bg-transparent rounded-full w-full px-[5%] text-[14px]"/>
                        </div>
                    </div>
                    <div className="pt-[25px] pl-[30px] flex">
                        <label htmlFor="email">Email:</label>
                        <div className="ml-[30px] w-[330px] h-[25px] border-2 rounded-full border-black flex justify-center">
                            <input id="email" placeholder="Your email here" name="email" type={"email"} required={true} className="bg-transparent rounded-full w-full px-[5%] text-[14px]"/>
                        </div>
                    </div>
                    <div className="pt-[25px] pl-[10px] flex">
                        <label htmlFor="message">Message:</label>
                        <div className="ml-[30px] w-[650px] h-[200px] border-2 rounded-[20px] border-black flex justify-center">
                            <textarea id="message" placeholder="Your message here" name="message" rows="4" required={true} cols="60" className="w-full h-full px-[2%] py-[1%] text-[14px] rounded-[20px] bg-transparent"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-[240px] h-[30px] rounded-full bg-dark-red mt-[7%] justify-center flex font-semibold text-[16px] text-white absolute">
                            <input type={"submit"} className="cursor-pointer w-full h-full"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;