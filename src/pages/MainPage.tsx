// JSON 파일의 URL을 임포트 Type string 오류
import RunMan from "../Lottie/runman.json?url";
import TypedText from "../components/TypedText";
import LottiePlayer from "../components/LottiePlayer";
import Arrow from "../assets/arrow.svg?react";

export default function Main() {
  return (
    <main className="relative flex flex-col justify-between p-pt-main">
      <h1 className="flex flex-col gap-5 text-orange">
        <span className="text-5xl ">코</span>
        <span className="text-5xl ">드</span>
        <span className="text-5xl ">를</span>
        <span className="text-5xl ">그</span>
        <span className="text-5xl ">리</span>
        <span className="text-5xl ">다.</span>
      </h1>
      <div className="relative flex items-end">
        <TypedText />
        <LottiePlayer
          imgSrc={RunMan}
          style={{ height: "150px", position: "relative", right: "60px" }}
        />
      </div>
      <div className="absolute left-2/4 bottom-[50px]">
        <Arrow className="animate-bounce-1.25" />
      </div>
    </main>
  );
}
