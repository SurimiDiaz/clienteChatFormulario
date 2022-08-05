import React from "react";

export const Header = ({ title = "Titulo de formulario" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>En menos de 5 minutos</p>
    </div>
  );
};
