import React from "react";
import ChipInput from "./chipInput.js";
import './App.css';



const App = () => {
  const availableItems = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },

    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
    },

    {
      id: 4,
      name: "Michael Brown",
      email: "michael@example.com",
    },
    {
      id: 5,
      name: "William Jones",
      email: "william@example.com",
    },
    {
      id: 6,
      name: "David Miller",
      email: "david@example.com",
    },
    {
      id: 7,
      name: "Richard Davis",
      email: "richard@example.com",
    
    },
    {
      id: 8,
      name: "Charles Garcia",
      email: "charles@example.com",
    },

    {
      id: 9,
      name: "Joseph Rodriguez",
      email: "joseph@example.com",
    },
    {
      id: 10,
      name: "Christopher Martinez",
      email: "christopher@example.com",
    },

  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 className="text-primary">Pick users</h1>
      <ChipInput availableItems={availableItems} />
    </div>
  );
};

export default App;
