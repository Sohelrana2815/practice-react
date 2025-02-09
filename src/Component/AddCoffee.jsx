import { useState } from "react";

const AddCoffee = () => {
  // State to manage inputs

  const [formData, setFormData] = useState({
    name: "",
    chef: "",
    supplier: "",
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
      !formData.category ||
      !formData.details ||
      !formData.photoURL
    ) {
      alert("Please fill out all fields");
      return;
    }
  };

  return <div></div>;
};

export default AddCoffee;
