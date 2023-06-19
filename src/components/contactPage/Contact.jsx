import SectionHeader from "../SectionHeader.jsx";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
    return(
      <div>
          <SectionHeader title="Contact Me" subtitle="Here's how you can" underlineLength="w-[580px]"/>
          <ContactForm/>
      </div>  
    );
}

export default Contact;