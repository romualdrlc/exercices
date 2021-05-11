import React from "react";

const CardHeader = (props) => {
  return (
    <>
      {props.name}
      {props.platformLogos.map((platform) => (
        <img key={props.name} src={platform} />
      ))}
    </>
  );
};

export default CardHeader;
