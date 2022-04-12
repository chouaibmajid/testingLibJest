import React from "react";

function Input() {
  const [data, setData] = React.useState({ name: "", lastName: "" });
  return (
    <div>
      <label htmlFor="name">Nom</label>
      <input
        onChange={(e) => setData({ ...data, name: e.target.value })}
        type="text"
        value={data.name}
        id="name"
        placeholder="entrez votre nom"
      />
      <label htmlFor="lastName">lastName</label>
      <input
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
        type="text"
        value={data.lastName}
        id="lastName"
        placeholder="entrez votre prenom"
      />
    </div>
  );
}

export default Input;
