import React from "react";

export const InfoShow = ({ input }) => {
  if (input) {
    const values = Object.values(input).join(" ");

    return <div>{values}</div>;
  }
};
