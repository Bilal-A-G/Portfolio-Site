import Button from "../Button.jsx";

const Contact = () => {
    return (
      <div className="bg-off-white pb-[5%] w-full">
          <p className="w-full flex justify-center text-[16px] pt-[78px]">If you are interested</p>
          <p className="w-full flex justify-center text-5xl font-semibold pt-[10px]">Contact Me</p>
          <p className="w-full flex justify-center text-[16px] pt-[70px] text-center pb-[50px]">For any business inquiries, questions, or feedback</p>
          <div className="w-full flex justify-center">
              <Button link={"/contact"} text={"Contact Form"} width={"px-[60px]"}/>
          </div>
      </div>  
    );
}

export default Contact;