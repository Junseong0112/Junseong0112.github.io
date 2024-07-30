import { Player } from "@lottiefiles/react-lottie-player";
import RunMan from "../Lottie/runman.json";

export default function Main() {
  return (
    <main>
      <h1>
        <span>코</span>
        <span>드</span>
        <span>를</span>
        <span>그</span>
        <span>리</span>
        <span>다.</span>
      </h1>
      <div>
        <h2 className="eng">Front-End Developer</h2>
        <Player
          autoplay
          loop
          src={RunMan}
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    </main>
  );
}
