import React from "react";
import { InfoView } from "../styleForm.js";

export const InfoShow = ({ input }) => {
  if (input) {
    const values = Object.values(input).join(" ");

    return <InfoView>{values}</InfoView>;
  }
};
