import React from "react";

import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = (props) => {
  return (
    <>
      {/* <CardHeader name={props.name} platforms={props.platforms} /> */}
      <CardFooter slug={props.slug} />
    </>
  );
};

export default ProductCard;
