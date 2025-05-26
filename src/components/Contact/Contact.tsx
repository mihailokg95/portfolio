import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Fell free to contact me</h2>
        <p>Send me an e-mail or call me.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:mstojkovic955@gmail.com">mstojkovic955@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Telephone" />
          <a href="tel:+381608058241">(381) 60805-8241</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}