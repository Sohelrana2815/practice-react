import { useState, useEffect } from "react";
import Coffees from "./Coffees";
const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching coffees:", error));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4">Coffee Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Coffees key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Home;
