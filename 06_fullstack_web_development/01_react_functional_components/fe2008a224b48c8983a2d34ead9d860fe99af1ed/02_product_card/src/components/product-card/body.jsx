import React from "react";

const CardBody = (props) => {
  console.log({ props });
  const [display, isDisplayed] = React.useState(false);

  return (
    <>
      <img src={props.cover} />
      {props.firstReleaseDate}
      {props.genres.map((genre) => genre)}
      {props.summary}
      <button onClick={() => isDisplayed(true)}>
        {display ? props.screenshots.map((screen) => <img key={props._id} src={screen} />) : null}
      </button>
    </>
  );
};

export default CardBody;
