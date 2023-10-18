import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // ==========================destructuring the object=======================================
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;
  // ===============================  =============== =============== =============== =============== ===============

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-espresso-emporium-server-j73bby34g.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter(
                (parameter) => parameter._id !== _id
              );
              setCoffees(remaining);
            }
          });
      }
    });
  };

  //   =================================================================
  return (
    <section className="font-rancho mb-6">
      <div className="bg-[#F5F4F1] rounded-lg shadow-2xl">
        <section className="grid lg:grid-cols-3 gap-3">
          {/* photo */}
          <div className="py-2 px-4">
            <img src={photo} className="w-[190px] h-[200px]" />
          </div>

          {/* info */}
          <div className="py-10">
            <h1 className="text-xl">
              <span className="font-bold"> Coffee Name: </span>
              <span className="text-[5C5B5B]">{name}</span>
            </h1>
            <p className="py-6">
              <span className="text-2xl">Chef: </span> {supplier}
            </p>
            <p className="text-2xl">
              Price: <span className="text-amber-900">{price}</span>
            </p>
          </div>
          {/* info */}

          {/* update view delete  */}
          <div className="py-10 px-12">
            <div className="w-[40px] h-[40px] bg-[#D2B48C] rounded-lg">
              <AiFillEye className="text-white ml-3"></AiFillEye>
            </div>
            <Link to={`/updateCoffee/${_id}`}>
              <div className="w-[40px] h-[40px] bg-[#3C393B] rounded-lg my-4">
                <AiFillEdit className="text-white ml-3"></AiFillEdit>
              </div>
            </Link>
            <button onClick={() => handleDelete(_id)}>
              <div className="w-[40px] h-[40px] bg-[#EA4744] rounded-lg">
                <AiFillDelete className="text-white ml-3 "></AiFillDelete>
              </div>
            </button>
          </div>
          {/* update view delete  */}
        </section>
      </div>
    </section>
  );
};

export default CoffeeCard;
