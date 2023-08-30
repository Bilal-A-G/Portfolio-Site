import Styles from "../../Styles.jsx";
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser"
import FadeIn from "../FadeIn.jsx";
import Hover from "../Hover.jsx";
import PopIn from "../PopIn.jsx";
import sentSound from "../EmailSent.wav"

const ContactForm = () => {
    
    const form = useRef();
    const [getDidEmailSend, setDidEmailSend] = useState(true);
    const [getTrigger, setTrigger] = useState(false);


    const SubmitForm = (e) => {
        e.preventDefault();
        setTrigger(true);
        
        new Audio(sentSound).play();
        
        emailjs.sendForm('service_uw9s5am', 'template_0vjo14k', form.current, 'ZRibGyEB94DNxM86U')
            .then((result) => {
                setDidEmailSend(true);
                e.target.reset();
            }, (error) => {
                setDidEmailSend(false);
                console.log(error.text);
                e.target.reset();
            });
    }
    
    const [getHovering, setHovering] = useState(false);
    
    return(
        <div className="bg-off-white">
            <FadeIn>
                <div className="w-full pb-[15%]">
                    <p className={`w-full flex justify-center pt-[7%] ${Styles.SectionSubHeader}`}>Contact Form</p>
                    <div className="w-full flex justify-center">
                        <form className="md:px-[7%] px-[2%] py-[3%] mt-[5%] md:border-[2px] border-[0px] lg:rounded-[20px] sm:rounded-[10px] rounded-[5px] border-black" onSubmit={SubmitForm} ref={form}>
                            <div className={`pl-[4%] flex ${Styles.Body}`}>
                                <label htmlFor="user_name">Name:</label>
                                <div className="ml-[4%] w-[50%] h-[2%] md:border-[2px] border-[1px] rounded-full border-black justify-center flex">
                                    <input id="user_name" placeholder="Your name here" name="user_name" type={"text"} required={true} className={`bg-transparent rounded-full w-full px-[5%] ${Styles.Body}`}/>
                                </div>
                            </div>
                            <div className={`pt-[3%] pl-[4%] flex ${Styles.Body}`}>
                                <label htmlFor="user_email">Email:</label>
                                <div className="ml-[4%] w-[50%] h-[2%] md:border-[2px] border-[1px] rounded-full border-black flex justify-center">
                                    <input id="user_email" placeholder="Your email here" name="user_email" type={"email"} required={true} className={`bg-transparent rounded-full w-full px-[5%] ${Styles.Body}`}/>
                                </div>
                            </div>
                            <div className={`pt-[3%] pl-[1%] flex ${Styles.Body}`}>
                                <label htmlFor="message">Message:</label>
                                <div className=" ml-[3%] w-[80%] lg:h-[150px] sm:h-[50px] h-[50px] md:border-[2px] border-[1px] lg:rounded-[20px] sm:rounded-[10px] rounded-[5px] border-black flex justify-center">
                                    <textarea id="message" placeholder="Your message here" name="message" rows="4" required={true} cols="60" className={`resize-none w-full h-full px-[2%] py-[1%] ${Styles.Body} md:rounded-[20px] rounded-[5px] bg-transparent`}/>
                                </div>
                            </div>
                            <Hover isHovering = {getHovering}>
                                <div className="w-full flex justify-center">
                                    <div className={`md:w-[25%] w-[30%] h-[4%] rounded-full bg-dark-red mt-[7%] py-[0.5%] justify-center flex text-white ${Styles.Button}`}>
                                        <input type={"submit"} className="cursor-pointer w-full h-full" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}/>
                                    </div>
                                </div>
                            </Hover>
                        </form>
                    </div>
                </div>
            </FadeIn>

            <div className={` ${getDidEmailSend ? "block" : "hidden"}`}>
                <PopIn trigger={getTrigger}>
                    <div className={`fixed top-0 left-0`}>
                        <div className={`w-[170px] h-[50px] bg-lime-900 rounded-xl transition ease-in-out delay-300 duration-300 ${getTrigger ? "translate-y-0 opacity-1" : "translate-y-10 opacity-0"}`}>
                            <p className={`w-full flex justify-center pt-[7%] ${Styles.Subtitle} text-white select-none`}>Message sent</p>
                        </div>
                    </div>
                </PopIn>
            </div>
            <div className={` ${getDidEmailSend ? "hidden" : "block"}`}>
                <PopIn trigger = {getTrigger}>
                    <div className={`fixed top-0 left-0`}>
                        <div className={`w-[180px] h-[50px] bg-rose-900 rounded-xl transition ease-in-out delay-300 duration-300 ${getTrigger ? "translate-y-0 opacity-1" : "translate-y-10 opacity-0"}`}>
                            <p className={`w-full flex justify-center pt-[7%] ${Styles.Subtitle} text-white select-none`}>Failed to send message</p>
                        </div>
                    </div>
                </PopIn>
            </div>
        </div>
    );
}

export default ContactForm;