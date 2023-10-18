import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="text-white font-rancho">
        {/* banner  */}
        <div className="background-img flex items-center justify-end lg:px-24">
          <div className="">
            <h1 className="text-6xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-xl mt-3 mb-3">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion <br />
              of every moment!!! Enjoy the beautiful moments and make them
              memorable.
            </p>
            <button className="btn bg-amber-600 border-none text-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>

        {/* banner */}

        <section className="grid lg:grid-cols-4 lg:px-24 py-6 gap-12 bg-[#ECEAE3] text-[#331A15]">
          <div>
            <img src="https://imgur.com/okufz1K.png" alt="" />
            <h1>Awesome Aroma</h1>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src="https://imgur.com/bplYGk1.png" alt="" />
            <h1>High Quality</h1>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div>
            <img src="https://imgur.com/m6PxEuG.png" alt="" />
            <h1>Pure Grades</h1>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src="https://imgur.com/EcoaXmq.png" alt="" />
            <h1>Proper Roasting</h1>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Banner;
