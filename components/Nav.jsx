import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="bg-orange-100 px-4 py-8">
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center font-black text-4xl pl-3 pr-3">
              Wontae's Portfolio
            </div>
          </Link>
          <div className="flex">
          <Link href="/intro">
            <div className="flex items-center font-medium pl-3 pr-3 hover:underline underline-offset-8 decoration-2">
              자기 소개
            </div>
          </Link>
          <Link href="/team_project">
            <div className="flex items-center font-medium pl-3 pr-3 hover:underline underline-offset-8 decoration-2">
              팀 프로젝트
            </div>
          </Link>
          <Link href="/project">
            <div className="flex items-center font-medium pl-3 pr-3 hover:underline underline-offset-8 decoration-2" >
              개인 공부
            </div>
          </Link>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
