import Title from "../components/Title";
import MyImg from "../assets/my-img.png";
import Icon from "../components/Icon";

export default function AboutPage() {
  return (
    <main className="pt-50 pb-50">
      <Title value="About" />
      <section>
        <article>
          <figure>
            <img src={MyImg} alt="My-Image" />
          </figure>
          <div>
            <figure>
              <Icon name="github" />
              <figcaption>Github</figcaption>
            </figure>
            <figure>
              <Icon name="velog" />
              <figcaption>Velog</figcaption>
            </figure>
            <figure>
              <Icon name="gmail" />
              <figcaption>Gmail</figcaption>
            </figure>
          </div>
        </article>
        <article>
          <div>
            <h3>
              <span>코드를 그리다,</span> 프론트엔드 김준성입니다.
            </h3>
            <p>
              단단하며 부러지지 않는 유연함을 가진 사람입니다.
              <br />
              부족함을 인정하고 배움의 자세로 노력할 줄 아는 인재입니다.
              <br />
              타인의 생각을 존중하며 커뮤니티에 유연하게 대처할 수 있습니다.
            </p>
          </div>
          <div>
            <h3 className="eng">Career</h3>
            <p>웹 에이전시 | 퍼블리셔</p>
            <div>
              <span>2022.07 ~ 2023.03</span>
            </div>
            <ul>
              <li>Figma를 활용하여 웹 디자이너와 협업 경험</li>
              <li>HTML,CSS,JS,JQuery를 활용하여 웹 페이지 제작 경험</li>
            </ul>
          </div>
          <div>
            <h3 className="eng">Interests</h3>
            <article></article>
          </div>
        </article>
      </section>
    </main>
  );
}
