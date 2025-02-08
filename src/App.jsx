import { useState, useEffect } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <div>
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-lg font-semibold">E-mail: {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
