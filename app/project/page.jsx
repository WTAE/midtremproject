import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header head="나의 공부 기록" />
      <div className="itlems-center bg-gray-50 w-screen grid place-items-center h-auto">
        <section className="bg-gray-50 h-auto w-4/6 p-10">
          <header className="bg-gray-50 itlems-center mb-12 mt-12 font-black text-5xl">
            개인 공부
          </header>
          <article className="bg-gray-50">
            <h1 className="font-black text-3xl">
              Notion과 Github에 기록
            </h1>
            <hr class="h-px my-5 border-0 dark:bg-black"></hr>

            <div className="ml-1 mt-10 mb-4">
              <h1 className="font-black text-2xl mb-4 ">노션</h1>
              <p className="font-bold ml-1 mt-2 mb-4">
                <a href="https://autumn-stitch-cea.notion.site/83dcbe20b9004ceb8cea5d1b5ceaff8f?pvs=4"
                  className="text-green-400 hover:text-green-600"
                >
                  WT's notion Page
                </a>

                <h1 className="font-black text-2xl mb-4">깃허브</h1>
                <p className="font-bold ml-1 mt-2"></p>
                <a href="https://github.com/WTAE" className="text-green-400 hover:text-green-600"
                >
                  WT's notion Page
                </a>
                <h1 className="font-black text-3xl mt-12">
              2023-2학기 웹서버보안프로그래밍을 통해 배운 것
            </h1>
            <hr class="h-px my-5 border-0 dark:bg-black"></hr>

            <div className="ml-1 mt-10 mb-4">
              <h1 className="font-black text-2xl mb-4">Next.js, React, MongoDB...etc.</h1>
              <h1 className="font-black text-2xl mb-4">이 외에도 많은 것을 배울 수 있었고 모든 실습 코드는 깃허브를 통해 관리하고 있으며 계속 수정 및 추가하며 공부할 수 있습니다.</h1>
            </div>
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
