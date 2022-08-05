import React, { useState } from "react";

import { InfoShow } from "../informationShow";

export const Birth = () => {
  const [input, setInput] = useState({ birth: "" });
  const handleChange = (e) => {
    const dateControl = document.querySelector('input[type="date"]');

    setInput({
      ...input,
      birth: dateControl.value,
    });
  };

  console.log(input);

  return (
    <>
      <h3>¿Fecha de nacimiento?</h3>
      <>
        <input
          type="date"
          name="birth"
          onChange={(e) => handleChange(e)}
          value="2018-07-22"
        />
      </>
      <InfoShow input={input} />
    </>
  );
};
