import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header head="나만의 공부 시간" />
      <div className="itlems-center bg-gray-100 w-screen grid place-items-center h-auto">
        <section className="bg-gray-100 h-auto w-4/6 p-10">
          <header className="bg-gray-100 itlems-center mb-12 mt-12 font-black text-5xl">
            개인 공부
          </header>
          <article className="bg-gray-100">
            <h1 className="font-black text-3xl">
              공부 내용들은 개인 노션에 저장 중
            </h1>
            <hr class="h-px my-5 border-0 dark:bg-black"></hr>

            <div className="ml-1 mt-10">
              <h1 className="font-black text-2xl">노션 링크</h1>
              <p className="font-bold ml-1 mt-5">
                <a href="https://autumn-stitch-cea.notion.site/83dcbe20b9004ceb8cea5d1b5ceaff8f?pvs=4"
                  className="text-blue-500 hover:text-blue-800"
                >
                  https://autumn-stitch-cea.notion.site/83dcbe20b9004ceb8cea5d1b5ceaff8f?pvs=4
                </a>
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
