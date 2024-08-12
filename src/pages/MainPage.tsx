// JSON 파일의 URL을 임포트 Type string 오류
import RunMan from "../Lottie/runman.json?url";
import TypedText from "../components/TypedText";
import LottiePlayer from "../components/LottiePlayer";
import MainSpan from "../components/MainSpan";
import Icon from "../components/Icon";

export default function Main() {
  return (
    <main className="flex flex-col justify-center gap-8">
      <h1 className="flex flex-col text-orange">
        <MainSpan />
      </h1>
      <div className="relative flex items-end">
        <TypedText />
        <LottiePlayer
          imgSrc={RunMan}
          style={{ height: "150px", position: "relative", right: "60px" }}
        />
      </div>
      <div className="absolute left-2/4 bottom-[50px]">
        <Icon name="arrow" className="animate-bounce-1.25" />
      </div>
    </main>
  );
}
