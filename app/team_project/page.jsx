import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header head="함께하는 프로젝트" />
      <div className="itlems-center bg-gray-100 w-screen grid place-items-center h-auto">
        <section className="bg-gray-100 h-auto w-4/6 p-10">
          <header className="bg-gray-100 itlems-center mb-12 mt-12 font-black text-5xl">
            팀 프로젝트
          </header>
          <article>
            <h1 className="font-black text-3xl">
              웹 취약점 테스트 페이지 구축
            </h1>
            <hr class="h-px my-5 border-0 dark:bg-black"></hr>
            <div className="ml-10 mt-10">
              <h1 className="font-black text-2xl">팀 소개</h1>
              <hr class="h-px my-5 border-0 dark:bg-black"></hr>

              <div className="m-5">
                <p>팀명 : 송강보단 종강 </p>
                <p>팀장 : 김원태 </p>
                <p>팀원 : 김수현, 남지우, 임성빈, 전유경</p>
              </div>
              <h1 className="font-black text-2xl">프로젝트 개요</h1>
              <hr class="h-px my-5 border-0 dark:bg-black"></hr>

              <div className="m-5">
                웹의 편리함과 쉬운 접근성으로 이용자들은 계속 증가하고 있으며, 이에 따라
                웹 페이지 해킹 사례 또한 증가하고 있다. 이러한 이유로 웹 보안에 많은 신경을 써야하므로 웹페이지 취약점 테스트 페이지를 구축한다.
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
