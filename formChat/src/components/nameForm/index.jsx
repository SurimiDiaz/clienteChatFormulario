import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import { Article, Input, Submit, Error } from "../styleForm";
import { InfoShow } from "../informationShow";

export const Name = () => {
  const [input, setInput] = useState({
    userName: "",
    middleName: "",
    lastname: "",
    motherLastName: "",
  });

  const dispatch = useDispatch();
  const [empy, setEmpy] = useState(false);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const vacio = <Error>¡Completa los campos!</Error>;
  const handleSubmit = (e) => {
    if (
      !input.userName ||
      !input.middleName ||
      !input.lastname ||
      !input.motherLastName
    ) {
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
      <h3>¿Cual es tu nombre?</h3>
      {empy ? vacio : <></>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="userName"
          onChange={(e) => handleChange(e)}
          placeholder="Nombre"
        />
        <Input
          type="text"
          name="middleName"
          onChange={(e) => handleChange(e)}
          placeholder="Segundo Nombre"
        />
        <Input
          type="text"
          name="lastname"
          onChange={(e) => handleChange(e)}
          placeholder="Apellido Paterno"
        />
        <Input
          type="text"
          name="motherLastName"
          onChange={(e) => handleChange(e)}
          placeholder="Apellido Materno"
        />
        <Submit type="submit" value="siguiente" />
      </form>
      <InfoShow input={input} />
    </Article>
  );
};
