import { FaRegEdit } from "react-icons/fa";
import { BsInfoSquare } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
const Coffees = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photoURL, _id } =
    coffee;

  // Delete function

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

 if(confirmDelete.isConfirmed){
  try{}
  catch(){
    
  }
 }

  };

  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl border border-yellow-700">
        <figure className="h-52 relative max-w-xs mx-auto border-b border-yellow-700">
          <h4 className="absolute top-1 right-2 font-medium italic text-yellow-700">
            {category}
          </h4>
          <img src={photoURL} className="w-1/2" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{taste}</p>
          <div className="join gap-x-4">
            <button className="btn btn-sm  btn-success">
              <FaRegEdit />
            </button>
            <button className="btn btn-sm btn-info">
              <BsInfoSquare />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error"
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffees;
