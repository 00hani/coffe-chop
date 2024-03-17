import React, { useState } from "react";

export default function Coffee() {
  const [coffee, setCoffee] = useState("");
  const [message, setMessage] = useState("");
  const drinks = ["coffee", "tea", "cappuccino", "espresso"];

  const boisson = () => {
    if (drinks.includes(coffee.toLowerCase())) {
      setMessage(`Vous avez choisi : ${coffee}`);
    } else {
      setMessage(`Votre demande "${coffee}" n'est pas disponible`);
    }
  };

  return (
    <>
      <div className="menu">
        <h1>Menu</h1>
        {drinks.map((drink, index) => (
          <div key={index}>
            <p>{drink}</p>
          </div>
        ))}
      </div>
      <div className="coffee-shop">
        <h1>Coffee Shop</h1>
        <p>Client</p>
        <input
          type="text"
          placeholder="Enter your order"
          value={coffee}
          onChange={(e) => setCoffee(e.target.value)}
        />
        <button onClick={boisson}>Send</button>
      </div>
      <div className="server">
        <h2>Server</h2>
        <p>{message}</p>
      </div>
    </>
  );
}
