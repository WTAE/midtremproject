const Header = (props) => {
  return (
    <>
      <div className="items-center bg-orange-100  w-screen grid place-items-center pt-10 pb-10 pl-10 pr-10">
        <h1 className="font-black text-5xl">{props.head}</h1>
        <p className="mt-6">김원태의 포트폴리오 웹페이지</p>
      </div>
    </>
  );
};

export default Header;
