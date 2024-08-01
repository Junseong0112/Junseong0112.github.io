import { Player } from "@lottiefiles/react-lottie-player";
import RunMan from "../Lottie/runman.json";

export default function Main() {
  return (
    <main className="flex flex-col justify-center h-screen gap-14">
      <h1 className="flex flex-col gap-3 ">
        <span className="text-6xl">코</span>
        <span className="text-6xl">드</span>
        <span className="text-6xl">를</span>
        <span className="text-6xl">그</span>
        <span className="text-6xl">리</span>
        <span className="text-6xl">다.</span>
      </h1>
      <div className="relative flex items-end">
        <h2 className="text-5xl font-normal eng">Front-End Developer</h2>
        <Player
          autoplay
          loop
          src={RunMan}
          style={{ height: "150px", position: "relative", right: "60px" }}
          className="animate-pulse-3"
        />
      </div>
    </main>
  );
}
