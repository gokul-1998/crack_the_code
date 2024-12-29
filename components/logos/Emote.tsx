import type { FC, SVGAttributes } from "react";

export type EmoteLogoProps = SVGAttributes<SVGSVGElement>;

export default function EmoteLogo(props: EmoteLogoProps) {
  return (
    <svg
      width="120"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 30"
      {...props}
    >
      <text 
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="currentColor"
      >
        Emote
      </text>
    </svg>
  );
}