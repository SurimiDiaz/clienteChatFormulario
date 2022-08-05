import React, { useState } from "react";

import { InfoShow } from "../informationShow";

export const Name = () => {
  const [input, setInput] = useState({
    userName: "",
    middleName: "",
    lastname: "",
    motherLastName: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>¿Cual es tu nombre?</h3>
      <>
        <input
          type="text"
          name="userName"
          onChange={(e) => handleChange(e)}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="middleName"
          onChange={(e) => handleChange(e)}
          placeholder="Segundo Nombre"
        />
        <input
          type="text"
          name="lastname"
          onChange={(e) => handleChange(e)}
          placeholder="Apellido Paterno"
        />
        <input
          type="text"
          name="motherLastName"
          onChange={(e) => handleChange(e)}
          placeholder="Apellido Materno"
        />
      </>
      <InfoShow input={input} />
    </>
  );
};
