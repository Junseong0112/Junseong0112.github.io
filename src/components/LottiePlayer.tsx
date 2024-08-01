import { Player } from "@lottiefiles/react-lottie-player";
import { CSSProperties } from "react";

interface Props {
  imgSrc: string;
  style?: CSSProperties;
  className?: string;
}

export default function LottiePlayer({ imgSrc, style, className }: Props) {
  return (
    <Player autoplay loop src={imgSrc} style={style} className={className} />
  );
}
