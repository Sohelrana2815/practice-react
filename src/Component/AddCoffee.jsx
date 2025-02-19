import { useState } from "react";

const imgBBApiKey = import.meta.env.VITE_IMG_BB_API_KEY;
const AddCoffee = () => {
  // State to store error message
  const [fileError, setFileError] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    // Reset error message
    setFileError("");
    // Check if a file is selected

    if (!file) {
      setFileError("Please select an image file.");
      return;
    }
    // Check file size (1 MB limit)
    if (file.size > 1 * 1024 * 1024) {
      setFileError("Image file size must be less than 1 MB.");
      e.target.value = "";
      return;
    }

    // Check file type

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setFileError("Only JPEG, PNG, WEBP AND GIF images are allowed.");
      e.target.value = "";
      return;
    }

    // if all validations pass, you can proceed

    console.log("File is valid", file);
  };
  const handleAddCoffee = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imageFile = formData.get("photo");

    try {
      // Step 1: Upload image to ImgBB
      const imgBBFormData = new FormData();

      imgBBFormData.append("image", imageFile);

      const imgBBResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
        {
          method: "POST",
          body: imgBBFormData,
        }
      );

      const imgBBData = await imgBBResponse.json();

      console.log(imgBBData);

      if (!imgBBData.success) {
        throw new Error("Failed to upload image to ImgBB");
      }

      const imageURL = imgBBData.data.url;

      // Step 2: Prepare coffee data with the image URL
      const coffeeData = {
        name: formData.get("name"),
        chef: formData.get("chef"),
        supplier: formData.get("supplier"),
        taste: formData.get("taste"),
        category: formData.get("category"),
        details: formData.get("details"),
        photoURL: imageURL, // Image URL from imgBB
      };

      // Step 3: Send coffee data to your backend

      const response = await fetch("http://localhost:5000/coffees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coffeeData),
      });

      const data = await response.json();

      if (data.data.insertedId) {
        alert("Coffee Added Successfully!");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Failed to add coffee. Please try again.");
    }
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Coffee!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddCoffee} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                {/* Coffee name */}
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                {/* Chef name */}
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                {/* supplier */}
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                {/* taste */}
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="taste name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                {/* category */}
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select coffee category
                </option>
                <option value="Hot Coffee">Hot Coffee</option>
                <option value="Iced Coffee">Iced Coffee</option>
                <option value="Espresso">Espresso</option>
                <option value="Cappuccino">Cappuccino</option>
                <option value="Latte">Latte</option>
                <option value="Cold Brew">Cold Brew</option>
                <option value="Pour Over">Pour Over</option>
                <option value="French Press">French Press</option>
                <option value="Turkish Coffee">Turkish Coffee</option>
                <option value="Specialty Drinks">Specialty Drinks</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                {/* details */}
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              {/* photoURL */}
              <span className="label-text">Coffee Image</span>
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              placeholder="Photo url"
              className="file-input file-input-bordered"
              onChange={handleFileChange}
              // required
            />
            {fileError && (
              <p className="text-red-500 text-sm mt-2">{fileError}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
