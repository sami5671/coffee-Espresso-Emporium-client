import { AiFillCaretLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  // =============================here the admin will add coffee and the coffee data will go to the server then database after that it will show on the UI ====================================

  const handleCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    // making object
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch(
      "https://coffee-espresso-emporium-server-j73bby34g.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Added successfully!!!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };

  // =================================================================================================
  return (
    <>
      <section className="container mx-auto mt-12">
        <Link to="/">
          <AiFillCaretLeft></AiFillCaretLeft>Back to home
        </Link>
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-5xl font-extrabold font-rancho text-[#374151] text-center mb-4">
            Add a Coffee
          </h2>
          <form onSubmit={handleCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block bg-amber-800 text-white hover:text-black"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default AddCoffee;
