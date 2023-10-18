import { AiFillCaretLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  // =================================================================
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;

  // =================================================================

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };

    console.log(updatedCoffee);

    fetch(
      `https://coffee-espresso-emporium-server-j73bby34g.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool you have updated the coffee!!!",
          });
        }
      });
  };

  // send data to server

  // =================================================================
  return (
    <>
      <section className="container mx-auto mt-12">
        <Link to="/">
          <AiFillCaretLeft></AiFillCaretLeft>Back to home
        </Link>
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-5xl font-extrabold font-rancho text-[#374151] text-center mb-4">
            Update the Existing Coffee
          </h2>
          <form onSubmit={handleUpdate}>
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
                    defaultValue={name}
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
                    defaultValue={quantity}
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
                    defaultValue={supplier}
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
                    defaultValue={taste}
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
                    defaultValue={price}
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
                    defaultValue={details}
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
                    defaultValue={photo}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-block bg-amber-800 text-white hover:text-black"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateCoffee;
