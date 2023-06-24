import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";

const Contact = () => {
    return (
      <div className="w-full bg-off-white pb-[5%] w-full">
          <p className={`w-full flex justify-center ${Styles.Body} pt-[8%]`}>If you are interested</p>
          <p className={`w-full flex justify-center ${Styles.SectionSubHeader} mt-[1%]`}>Contact Me</p>
          <p className={`w-full flex justify-center ${Styles.Body} pt-[4%] text-center pb-[4%] px-[40%]`}>For any business inquiries, questions, or feedback</p>
          <div className="w-full flex justify-center">
              <Button link={"/contact"} text={"Contact Form"} width={"px-[5%]"}/>
          </div>
      </div>  
    );
}

export default Contact;