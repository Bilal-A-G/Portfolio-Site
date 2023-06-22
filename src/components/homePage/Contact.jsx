import Button from "../Button.jsx";

const Contact = () => {
    return (
      <div className="bg-off-white h-[430px] w-full">
          <p className="w-full flex justify-center text-[16px] pt-[78px]">If you are interested</p>
          <p className="w-full flex justify-center text-5xl font-semibold pt-[10px]">Contact Me</p>
          <p className="ml-[620px] w-[280px] text-[16px] pt-[70px] text-center pb-[50px]">For any business inquiries, questions, or feedback</p>
          <Button link={"/contact"} text={"Contact Form"} width={"px-[60px]"} extras={"ml-[645px]"}/>
      </div>  
    );
}

export default Contact;