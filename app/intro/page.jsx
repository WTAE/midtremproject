import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header head="나를 소개합니다" />
      <div className="itlems-center bg-gray-100 w-screen grid place-items-center h-auto">
        <section className="bg-gray-100 h-auto w-4/6 p-10">
          <header className="bg-gray-100 itlems-center mb-12 mt-12 font-black text-5xl">
            자기 소개
          </header>

          <article className="bg-gray-100">
            <section>
              <h1 className="font-black text-3xl">기본 정보</h1>
              <hr class="h-px my-5 border-0 dark:bg-black"></hr>
              <div className="m-5 flex divide-x-2 divide-gray-400">
                <ul className="items-center flex-col px-1 mx-1">
                  <li>이름 : 김원태</li>
                  <li>생년월일 : 2001.08.29</li>
                  <li>거주지 : 인천광역시 부평구</li>
                  <li>연락처 : 010-8707-6821</li>
                  <li>이메일 : rladnjsxo524@naver.com</li>
                </ul>
              </div>
            </section>
            <section>
              <h1 className="font-black text-3xl">활동 이력</h1>
              <hr class="h-px my-5 border-0 dark:bg-black"></hr>

              <div className="m-5 flex divide-x-2 divide-gray-400">
                <table>
                  <tbody>
                    <tr className="divide-x-2 divide-gray-400">
                      <td className="pr-2">2020.03 ~</td>
                      <td className="pl-2">중부대학교 정보호호학과 입학</td>
                    </tr>
                    <tr className="divide-x-2 divide-gray-400">
                      <td className="pr-2">2020.05 ~ 2021.11  </td>
                      <td className="pl-2">
                        군 입대 및 전역
                      </td>
                    </tr>
                    <tr className="divide-x-2 divide-gray-400">
                      <td className="pr-2">2023.03~</td>
                      <td className="pl-2">
                        중부대 정보보안동아리 S.C.P 부원
                      </td>
                    </tr>
                    <tr className="divide-x-2 divide-gray-400">
                      <td className="pr-2">2023.06 ~</td>
                      <td className="pl-2">
                          Hsapce Incognito '홈캠 취약점 분석' 진행
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h1 className="font-black text-3xl">관심 분야</h1>
              <hr class="h-px my-5 border-0 dark:bg-black"></hr>
              <div className="ml-10 mt-10">
                <h1 className="font-black text-2xl">웹 해킹</h1>
                <hr class="h-px my-5 border-0 dark:bg-black"></hr>
                <div className="m-5">
                  웹 해킹 기술에 관심 있으며, 다양한 웹 해킹 방법에 대해 공부 중에 있습니다.
                </div>
              </div>
            </section>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
