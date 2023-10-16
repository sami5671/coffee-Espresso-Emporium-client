import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { FaCoffee } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section>
        <div>
          <Banner></Banner>
        </div>
      </section>

      <section className="container mx-auto font-rancho mt-12 mb-12">
        <div className="text-center">
          <p className="text-[20px]">--- Sip & Savor ---</p>
          <h1 className="text-6xl">Our Popular Products</h1>
          <Link to="/addCoffee">
            <button className="btn bg-amber-600 border-none text-white hover:text-black">
              Add coffee
              <FaCoffee></FaCoffee>
            </button>
          </Link>
        </div>
      </section>

      {/* coffee card */}

      {/* coffee card */}
    </>
  );
};

export default Home;
