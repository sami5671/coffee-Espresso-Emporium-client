import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section>
        {/*  */}
        <section className="bg-slate-100 flex justify-center mt-12 py-12">
          {/*  */}

          <div className="">
            <img
              className="w-[40px] h-[40px]"
              src="https://imgur.com/zDXG24k.png"
              alt=""
            />
            <h1 className="text-[#331A15] font-rancho text-4xl font-bold">
              Espresso Emporium
            </h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments,
              <br /> to share with your best companion.
            </p>

            <div className="flex text-[#331A15] text-5xl mt-4">
              <AiFillFacebook></AiFillFacebook>
              <AiFillTwitterCircle></AiFillTwitterCircle>
              <AiFillInstagram></AiFillInstagram>
              <AiFillLinkedin></AiFillLinkedin>
            </div>

            <h1 className="text-[#331A15] font-rancho text-4xl font-bold mt-4">
              Get in Touch
            </h1>
            <p>+88 01533 333 333</p>
            <p>info@gmail.com</p>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
          {/*  */}

          {/*  */}
          <div className="px-12">
            <h1 className="text-[#331A15] font-rancho text-4xl font-bold">
              Connect with Us
            </h1>
            <input type="text" placeholder="Name---" className="lg:w-[320px]" />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email---"
              className="lg:w-[320px]"
            />
            <br />
            <br />
            <textarea
              placeholder="Message"
              className="lg:w-[320px] lg: h-[120px]"
            ></textarea>
            <br />
            <br />
            <button className="btn btn-ghost rounded-lg text-[#331A15] font-rancho">
              Send Message
            </button>
          </div>

          {/*  */}
        </section>

        {/*  */}
        <div className="bg-amber-950 font-rancho text-center">
          <h1 className="text-2xl text-white">
            Copyright Espresso Emporium ! All Rights Reserved
          </h1>
        </div>
      </section>
    </>
  );
};
export default Footer;
