import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [display, isDisplayed] = React.useState(true);

  return (
    <div>
      <button onClick={() => isDisplayed(false)}>
        hide Content
        {display ? <p>some test</p> : null}
      </button>
    </div>
  );
};
