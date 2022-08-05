import React, { useState } from "react";

import { InfoShow } from "../informationShow";
export const Contact = () => {
  const [input, setInput] = useState({
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    console.log("s", e.target.placeholder);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Datos de contacto</h3>
      <>
        <input
          type="email"
          name="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          onChange={(e) => handleChange(e)}
          placeholder="Correo electónico"
        />
        <input
          type="tel"
          name="phone"
          onChange={(e) => handleChange(e)}
          placeholder="Teléfono celular"
        />
      </>
      <InfoShow input={input} />
    </>
  );
};
