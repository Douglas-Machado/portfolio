import { IconType } from "react-icons/lib";

export interface IconsInterface {
    name: string;
    size: number;
    type: Array<string>;
    img: IconType;
    color: string;
    children: null;
    link?: string;
}

export type IconImageParams = {
    item: IconsInterface;
}
