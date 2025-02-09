import { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
const Home = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all coffees

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch("http://localhost:5000/coffees");
        const data = await response.json();
        setCoffees(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffees:", error);
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this coffee?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/coffees/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCoffees(coffees.filter((coffee) => coffee._id !== id));
        // alert("Coffee deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting coffee:", error);
    }
  };

  if (loading)
    return (
      <span className="loading text-blue-500 loading-ring loading-lg"></span>
    );

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <h1>Coffee Collection</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={coffee.photoURL}
                alt={coffee.name}
                className="w-auto max-w-[300px] mx-auto object-cover h-48 rounded-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                }}
              />

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{coffee.name}</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Chef:</span> {coffee.chef}
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-semibold">Category:</span>{" "}
                  {coffee.category}
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => alert(`View details for ${coffee.name}`)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaEye size={20} />
                  </button>
                  <button
                    onClick={() => alert(`Edit ${coffee.name}`)}
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(coffee._id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
