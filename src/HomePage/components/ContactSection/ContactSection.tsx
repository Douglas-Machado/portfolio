import { ContactForm, ContactMain, UserInput, UserMessage } from "./styles";
import { Title } from "../../styles";


export function ContactSection(){
  return(
    <ContactMain>
      <Title>Contact</Title>
      <ContactForm>
        <UserInput type="text" name="name"  placeholder="Name"/>
        <UserInput type="text" name="email" placeholder="Email"/>
        <UserMessage placeholder="Mensagem"></UserMessage>
      </ContactForm>
    </ContactMain>
  )
}