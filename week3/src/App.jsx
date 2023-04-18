import { useState } from "react";
import "./App.css";
import Box from "./BoxComp.jsx";
import Text from "./TextComp.jsx";
import Button from "./BtnComp.jsx";
import SuperComp from "./SuperComp.jsx";

const App = () => {
  const [textColor, setTextColor] = useState("#000");

  const handleRedBtnClick = () => {
    setTextColor("#ff0000");
    alert("Red text enabled.");
  };

  const handleBlueBtnClick = () => {
    setTextColor("#0000FF");
    alert("Blue text enabled.");
  };

  return (
    <>
      <hr></hr>
      <h2>Box Component</h2>
      <div>
        <Box size="small"></Box>
        <Box size="medium"></Box>
        <Box size="large"></Box>
      </div>

      <br></br>
      <hr></hr>
      <h2>Text Component</h2>

      <div>
        <p><Text size="small" color={textColor}>
          Small text
        </Text></p>
        <p><Text size="medium" color={textColor}>
        medium text
        </Text></p>
        <p><Text size="large" color={textColor}>
        large text
        </Text></p>
      </div>

      <br></br>
      <hr></hr>
      <h2>Button Component</h2>

      <div>
        <Button color="red" onClick={handleRedBtnClick}>
          Click me!
        </Button>
        <Button color="blue" onClick={handleBlueBtnClick}>
          Click me!
        </Button>
      </div>

      <br></br>
      <hr></hr>
      <h2>Super Component</h2>

      <SuperComp />
    </>
  );
};

export default App;
