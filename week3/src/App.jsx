import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  // textcolor & setTextColor params -> default color black;
  const [textColor, setTextColor] = useState("#000");

  // if red btn clicked -> red text.
  const handleRedBtnClick = () => {
    setTextColor("#ff0000");
    alert("Red text enabled.");
  };

  // if blue btn clicked -> blue text.
  const handleBlueBtnClick = () => {
    setTextColor("#0000FF");
    alert("Blue text enabled.");
  };

  return (
    // I was a little confused by how you wanted us to show the steps, sorry. :( 
    // First div shows boxes small -> large
    // Second div shows text small -> large
    // third div combines them all 
    <>
      <div>
        <Box size="small"></Box>
        <Box size="medium"></Box>
        <Box size="large"></Box>
      </div>

      <div>
        <p><Text size="small" color={textColor}>
          Small Text
        </Text></p>
        

        <p><Text size="medium" color={textColor}>
          Medium Text
        </Text></p>

        <p><Text size="large" color={textColor}>
          Large Text
        </Text></p>
      </div>

      <div>
        <Box size="small">
          <Text size="small" color={textColor}>
            Small Box
          </Text>
        </Box>
        <Box size="medium">
          <Text size="medium" color={textColor}>
            Medium Box
          </Text>
        </Box>
        <Box size="large">
          <Text size="large" color={textColor}>
            Large Box
          </Text>
        </Box>
      </div>

      <div>
        <Button color="red" onClick={handleRedBtnClick}>
          Click me!
        </Button>
        <Button color="blue" onClick={handleBlueBtnClick}>
          Click me!
        </Button>
      </div>
    </>
  );
};

// switch cases for size = widths BOXES
const Box = (props) => {
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

// switch cases for FONT size
const Text = (props) => {
  let fontSize;
  switch (props.size) {
    case "small":
      fontSize = "15px";
      break;
    case "medium":
      fontSize = "20px";
      break;
    case "large":
      fontSize = "25px";
      break;
    default:
      fontSize = "12px";
  }

  const textStyle = {
    fontSize: fontSize,
    color: props.color || "#000000",
  };

  return <span style={textStyle}>{props.children}</span>;
};

const Button = ({ color, onClick, children }) => {
  const buttonStyle = {
    backgroundColor: color || "#808080",
    padding: "10px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
