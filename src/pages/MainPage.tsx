// JSON 파일의 URL을 임포트 Type string 오류
import RunMan from "../Lottie/runman.json?url";
import TypedText from "../components/TypedText";
import LottiePlayer from "../components/LottiePlayer";
import Arrow from "../assets/arrow.svg?react";

export default function Main() {
  return (
    <main className="flex flex-col justify-center h-screen gap-14">
      <h1 className="flex flex-col gap-6 text-orange">
        <span className="text-6xl ">코</span>
        <span className="text-6xl ">드</span>
        <span className="text-6xl ">를</span>
        <span className="text-6xl ">그</span>
        <span className="text-6xl ">리</span>
        <span className="text-6xl ">다.</span>
      </h1>
      <div className="relative flex items-end">
        <TypedText />
        <LottiePlayer
          imgSrc={RunMan}
          style={{ height: "150px", position: "relative", right: "60px" }}
          className="animate-pulse-3"
        />
      </div>
      <div>
        <Arrow />
      </div>
    </main>
  );
}
