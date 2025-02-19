const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const coffeeData = {
      name: formData.get("name"),
      chef: formData.get("chef"),
      supplier: formData.get("supplier"),
      taste: formData.get("taste"),
      category: formData.get("category"),
      details: formData.get("details"),
      photoURL: formData.get("photoURL"),
    };

    console.log("Coffee Data", coffeeData);

    // Send coffeeData to the server and database

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.insertedId) {
          console.log(data.message);
          alert("Coffee Added Successfully!");
        }
      });
    e.target.reset();
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
              >
                <option value="" disabled selected>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
