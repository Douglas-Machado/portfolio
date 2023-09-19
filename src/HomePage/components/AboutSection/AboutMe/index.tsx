import { Subtitle } from "../../../styles";
import { AboutMe, Paragraph } from "../styles";

export function AboutMeComponenent() {
  return (
    <AboutMe>
      <Subtitle>About me</Subtitle>
      <Paragraph>Fullstack developer Python | TypeScript | MySQL | MongoDB</Paragraph>

      <Paragraph style={{
        paddingTop: "12px"
      }}>
      I am driven by innovation, new developments, and I greatly enjoy solving problems through technology. I believe that with a focused effort, working alongside motivated and aligned individuals, it is possible to change the world.
      </Paragraph>
    </AboutMe>
  );
}
