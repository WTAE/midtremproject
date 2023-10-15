import Header from "@/components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header head="Main Home" />
      <section className="itlems-center bg-gray-100 w-screen grid place-items-center h-auto">
        <div className="bg-gray-100 h-auto w-4/6 p-10 text-center">
          <header className="bg-gray-100 itlems-center mb-12 mt-12 font-black text-5xl">
            김원태의 포트폴리오 웹페이지입니다.
          </header>
          <div className="flex justify-center mt-12">
            <div className="font-medium pl-3 pr-3 m-10 text-2xl">
              <Link href="/intro" className="hover:text-sky-500">
                자기 소개
              </Link>
            </div>
            <div className="font-medium pl-3 pr-3 m-10 text-2xl">
              <Link href="/team_project" className="hover:text-sky-500">
                팀 프로젝트
              </Link>
            </div>
            <div className="font-medium pl-3 pr-3 m-10 text-2xl">
              <Link href="/project" className="hover:text-sky-500">
                개인 공부
              </Link>
            </div>
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
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
