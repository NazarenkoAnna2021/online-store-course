import { FC } from "react";

interface IProps {
    height?: number,
    width?: number,
    color?: string,
};

export const FilledStar: FC<IProps> = ({  height, width, color }) => (
    <svg width={width || 286} height={height || 286} viewBox="0 0 286 286" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
            fill={color || "#C4C4C4"} />
    </svg>


);