const Header = (props) => {
  return (
    <>
      <div className="items-center bg-green-900  w-screen grid text-white place-items-center pt-10 pb-10 pl-10 pr-10">
        <h1 className="font-black text-5xl">{props.head}</h1>
        <p className="mt-6 text-white">WT's Webpage</p>
      </div>
    </>
  );
};

export default Header;
