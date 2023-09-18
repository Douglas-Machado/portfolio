import {
  FooterMain,
  FooterWrapper,
  Link,
  ContactInfosSpan,
  ContactInfosDiv,
} from "./styles";
import { icons, IconImage } from "../../utils/icon";

export function Footer() {
  return (
    <FooterMain>
      <FooterWrapper>
        <ContactInfosDiv>
          <ContactInfosSpan>
            Email: douglasclaudino10.dc@gmail.com
          </ContactInfosSpan>
          <ContactInfosSpan>Made by Douglas C. Machado</ContactInfosSpan>
        </ContactInfosDiv>
        <div>
          {icons.map((icon) => {
            if (icon.type.includes("social")) {
              return (
                <Link target="_blank" href={icon.link}>
                  <IconImage item={icon} />
                </Link>
              );
            }
          })}
        </div>
      </FooterWrapper>
    </FooterMain>
  );
}
