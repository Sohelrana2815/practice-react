import { useState } from "react";

const AddCoffee = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photoURL: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (optional)
    if (
      !formData.name ||
      !formData.chef ||
      !formData.supplier ||
      !formData.taste ||
      !formData.category ||
      !formData.details ||
      !formData.photoURL
    ) {
      alert("Please fill out all fields");
      return;
    }

    // Send data to the server
    try {
      const response = await fetch("http://localhost:5000/coffees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Parse the response JSON
      console.log("Server response:", result);

      if (response.ok) {
        alert("Coffee added successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          chef: "",
          supplier: "",
          taste: "",
          category: "",
          details: "",
          photoURL: "",
        });
      } else {
        alert(`Failed to add coffee: ${result.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding coffee");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Coffee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Chef */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Chef
          </label>
          <input
            type="text"
            name="chef"
            value={formData.chef}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Supplier
          </label>
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Taste */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Taste
          </label>
          <input
            type="text"
            name="taste"
            value={formData.taste}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category (Dropdown) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Hot">Hot</option>
            <option value="Cold">Cold</option>
            <option value="Espresso">Espresso</option>
            <option value="Latte">Latte</option>
            <option value="Milk-based">Milk Based</option>
            <option value="Black Coffee">Black Coffee</option>
          </select>
        </div>

        {/* Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="url"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Add Coffee Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
