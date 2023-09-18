import { IIcon } from "../../../../types";
import { IconImage } from "../../../utils/icon";
import { SkillDescription } from "../styles";

interface Iprops {
  skill: IIcon;
}

export function SkillDescriptionContainer({ skill }: Iprops) {
  return (
    <div>
      <IconImage item={skill} />
      <SkillDescription>{skill.description}</SkillDescription>
    </div>
  );
}
