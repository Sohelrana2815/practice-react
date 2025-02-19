import { useState, useEffect } from "react";
import CoffeesCard from "./CoffeesCard";
const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching coffees:", error));
  }, []);

  const removeCoffeeFromUI = (id) => {
    setCoffees((prevCoffees) =>
      prevCoffees.filter((coffee) => coffee._id !== id)
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4">Coffee Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeesCard
            key={coffee._id}
            coffee={coffee}
            onDelete={removeCoffeeFromUI}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
