import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import { Article, Input, Submit, Error } from "../styleForm";

import { InfoShow } from "../informationShow";
export const Contact = () => {
  const dispatch = useDispatch();
  const [empy, setEmpy] = useState(false);
  const vacio = <Error>¡Completa los campos!</Error>;
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
  const handleSubmit = (e) => {
    if (!input.email || !input.phone) {
      e.preventDefault();
      setEmpy(true);
      return false;
    }
    setEmpy(false);
    e.preventDefault();
    dispatch(addUser(input));
  };
  return (
    <Article>
      <h3>Datos de contacto</h3>
      {empy ? vacio : <></>}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Correo electónico"
        />
        <Input
          type="tel"
          name="phone"
          onChange={(e) => handleChange(e)}
          placeholder="Teléfono celular"
        />
        <Submit type="submit" value="siguiente" />
      </form>
      <InfoShow input={input} />
    </Article>
  );
};
