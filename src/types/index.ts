import { IconType } from "react-icons/lib";

export interface IIcon {
    name: string;
    size: number;
    type: Array<string>;
    img: IconType;
    color: string;
    children: null;
    link?: string;
    description?: string;
}

export type IconImageParams = {
    item: IIcon;
}
