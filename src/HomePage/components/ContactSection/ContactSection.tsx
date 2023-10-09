import { ContactForm, ContactMain, ContactsContainer, UserInput, UserMessage, WhatsappLink } from "./styles";
import { Title } from "../../styles";
import { ImWhatsapp } from "react-icons/im"

export function ContactSection() {
  return (
    <ContactMain>
      <Title>Contact</Title>
      <ContactsContainer>
        <a href="https://api.whatsapp.com/send?phone=5541999809735">
          <WhatsappLink>
            <ImWhatsapp size={60}/>
          </WhatsappLink>
        </a>
        {/* <ContactForm>
          <UserInput type="text" name="name" placeholder="Name" />
          <UserInput type="text" name="email" placeholder="Email" />
          <UserMessage placeholder="Mensagem"></UserMessage>
        </ContactForm> */}
      </ContactsContainer>
    </ContactMain>
  );
}
