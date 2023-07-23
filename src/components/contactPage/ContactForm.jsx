import Styles from "../../Styles.jsx";

const ContactForm = () => {
    return(
        <div className="w-full pb-[15%] bg-off-white">
            <p className={`w-full flex justify-center pt-[7%] ${Styles.SectionSubHeader}`}>Contact Form</p>
            <div className="w-full flex justify-center">
                <form className="md:px-[7%] px-[2%] py-[3%] mt-[5%] md:border-[2px] border-[0px] lg:rounded-[20px] sm:rounded-[10px] rounded-[5px] border-black">
                    <div className={`pl-[4%] flex ${Styles.Body}`}>
                        <label htmlFor="name">Name:</label>
                        <div className="ml-[4%] w-[50%] h-[2%] md:border-[2px] border-[1px] rounded-full border-black justify-center flex">
                            <input id="name" placeholder="Your name here" name="name" type={"text"} required={true} className={`bg-transparent rounded-full w-full px-[5%] ${Styles.Body}`}/>
                        </div>
                    </div>
                    <div className={`pt-[3%] pl-[4%] flex ${Styles.Body}`}>
                        <label htmlFor="email">Email:</label>
                        <div className="ml-[4%] w-[50%] h-[2%] md:border-[2px] border-[1px] rounded-full border-black flex justify-center">
                            <input id="email" placeholder="Your email here" name="email" type={"email"} required={true} className={`bg-transparent rounded-full w-full px-[5%] ${Styles.Body}`}/>
                        </div>
                    </div>
                    <div className={`pt-[3%] pl-[1%] flex ${Styles.Body}`}>
                        <label htmlFor="message">Message:</label>
                        <div className=" ml-[3%] w-[80%] lg:h-[150px] sm:h-[50px] h-[50px] md:border-[2px] border-[1px] lg:rounded-[20px] sm:rounded-[10px] rounded-[5px] border-black flex justify-center">
                            <textarea id="message" placeholder="Your message here" name="message" rows="4" required={true} cols="60" className={`resize-none w-full h-full px-[2%] py-[1%] ${Styles.Body} md:rounded-[20px] rounded-[5px] bg-transparent`}/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={`md:w-[25%] w-[30%] h-[4%] rounded-full bg-dark-red mt-[7%] py-[0.5%] justify-center flex text-white ${Styles.Button}`}>
                            <input type={"submit"} className="cursor-pointer w-full h-full"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;