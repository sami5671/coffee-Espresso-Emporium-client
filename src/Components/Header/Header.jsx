const Header = () => {
  return (
    <>
      <section className="bg-amber-950 font-rancho">
        <div className="flex items-center justify-center">
          <div>
            <img
              className="w-[50px]"
              src="https://imgur.com/zDXG24k.png"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-2xl lg:text-4xl text-white">
              Espresso Emporium
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
