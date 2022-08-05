import React from "react";
import { Name } from "../nameForm";
import { Birth } from "../birthForm";
import { Contact } from "../contactForm";
import { InfoShow } from "../informationShow";

export const Content = () => {
  return (
    <>
      <form>
        <Name />
        <Birth />
        <Contact />
      </form>
      <p>Si tus datos son correctos por favor continuemos</p>
      <button>Iniciar</button>
      <InfoShow />
    </>
  );
};

export default Content;
