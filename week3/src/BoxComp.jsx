import React from "react";

// switch cases for size = widths BOXES
const BoxComp = (props) => {
  let width;
  switch (props.size) {
    case "small":
      width = "150px";
      break;
    case "medium":
      width = "250px";
      break;
    case "large":
      width = "350px";
      break;
    default:
      width = "250px";
  }

  // style for the boxes. Set width = to the variable width, and set border radius.
  const boxStyle = {
    width: width,
    // if not true, then apply 0px default.
    borderRadius: props.borderRadius ? "15px" : "0px",
  };

  return (
    <div className="box" style={boxStyle}>
      {props.children}
    </div>
  );
};

export default BoxComp;
