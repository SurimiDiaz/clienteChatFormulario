import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import { InfoShow } from "../informationShow";
import { Article, Input, Submit } from "../styleForm";
export const Birth = () => {
  const [input, setInput] = useState({ birth: "2018-07-22" });
  const dispatch = useDispatch();
  const [sig, setSig] = useState(false);
  const handleChange = (e) => {
    const dateControl = document.querySelector('input[type="date"]');

    setInput({
      ...input,
      birth: dateControl.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(input));
    setSig(!sig);
  };
  return (
    <Article>
      <h3>¿Fecha de nacimiento?</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="date"
          name="birth"
          onChange={(e) => handleChange(e)}
          value={input.birth}
        />
        <Submit type="submit" value="siguiente" />
      </form>
      <InfoShow input={input} />
    </Article>
  );
};
