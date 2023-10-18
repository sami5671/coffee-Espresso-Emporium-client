import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { FaCoffee } from "react-icons/fa";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
const Home = () => {
  // =================================================================

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // =================================================================
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
      {/* <h2>Coffee items: {coffees.length}</h2> */}

      <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </section>

      {/* coffee card */}

      {/* instagram */}
      <section className="container mx-auto mt-7 font-rancho">
        <div className="text-center">
          <p className="text-xl">Follow Us Now</p>
          <h1 className="text-6xl font-rancho text-[#331A15]">
            Follow on Instagram
          </h1>
        </div>

        <div className="flex justify-center gap-3 my-2">
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/6O3PUkP.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/n6zvsxW.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/ahlfAXC.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/l92q95u.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/FnWAbQp.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/gl1YRFo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/jEKqJJZ.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[150px] h-[150px]"
              src="https://imgur.com/Jq3BI2w.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* instagram */}
    </>
  );
};

export default Home;
