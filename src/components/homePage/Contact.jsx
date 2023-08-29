import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";
import FadeIn from "../FadeIn.jsx";

const Contact = () => {
    return (
      <div className="w-full bg-off-white pb-[10%] w-full">
          <FadeIn>
              <p className={`w-full flex justify-center ${Styles.Body} pt-[8%]`}>If you are interested</p>
          </FadeIn>
          <FadeIn>
              <p className={`w-full flex justify-center ${Styles.SectionSubHeader} mt-[1%]`}>Contact Me</p>
          </FadeIn>
          <FadeIn>
              <p className={`w-full flex justify-center ${Styles.Body} pt-[4%] text-center pb-[4%] md:px-[40%] px-[10%]`}>For any business inquiries, questions, or feedback</p>
              <div className="w-full flex justify-center md:pt-[0%] pt-[10%]">
                  <Button link={"/contact"} text={"Contact Form"} width={"md:px-[5%] px-[5%]"}/>
              </div>
          </FadeIn>
      </div>  
    );
}

export default Contact;