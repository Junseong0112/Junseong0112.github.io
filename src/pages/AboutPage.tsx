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
            <article>
              <Icon name="exercise" />
              <div>
                <p>운동을 좋아해요</p>
                <span>헬스, 러닝을 즐겨해요 운동은 스트레스 풀기에 제격</span>
              </div>
            </article>
            <article>
              <Icon name="communication" />
              <div>
                <p>대화를 좋아해요</p>
                <span>
                  다른 사람들과 얘기를 통해 지식을 담는 것을 좋아해요 새로운
                  세상에 눈뜬 기분
                </span>
              </div>
            </article>
            <article>
              <Icon name="food" />
              <div>
                <p>음식을 좋아해요</p>
                <span>
                  다양한 음식을 먹는것을 좋아해요 음식을 좋아해 요리를 즐겨해요
                </span>
              </div>
            </article>
          </div>
          <div>
            <h3 className="eng">Certificates</h3>
            <div>
              <p>
                <span>
                  GTQi(그래픽기술자격 일러스트) 1급 | 한국생산성본부 | 2022.01
                </span>
              </p>
              <p>
                <span>GTQ(그래픽기술자격) 1급 | 한국생산성본부 | 2021.10</span>
              </p>
              <p>
                <span>
                  정보기술자격(ITQ) 한글파워포인트 B | 한국생산성본부 | 2014.05
                </span>
              </p>
              <p>
                <span>워드프로세서 | 대한상공회의소 | 2013.03</span>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
