import React from "react";
import { Name } from "../nameForm";
import { Birth } from "../birthForm";
import { Contact } from "../contactForm";
import { InfoShow } from "../informationShow";
import { useSelector, useDispatch } from "react-redux";
import { CREATE_USER } from "../../graphql/mutations.js";
import { useMutation } from "@apollo/client";
import { clean } from "../../redux/actions";

export const Content = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.info);
  const [_, b, c, d] = infoUser;
  const info = { ...d, ...b, ...c };

  const handleClick = () => {
    createUser({
      variables: {
        userName: info.userName,
        middleName: info.middleName,
        lastname: info.lastname,
        motherLastName: info.motherLastName,
        birth: info.birth,
        email: info.email,
        phone: info.phone,
      },
    });
    dispatch(clean());
  };
  if (error) console.error(error);
  const finalElement = (
    <>
      <p>Si tus datos son correctos por favor continuemos</p>
      <button onClick={() => handleClick()}>Iniciar</button>
      <InfoShow />
    </>
  );
  return (
    <>
      <>
        <Name />
        {infoUser.length > 1 && <Birth />}
        {infoUser.length > 2 && <Contact />}
      </>
      {infoUser.length > 3 && finalElement}
    </>
  );
};

export default Content;
