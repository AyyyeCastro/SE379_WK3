import { useState } from "react";
import Box from "./BoxComp.jsx";
import Text from "./TextComp.jsx";
import Button from "./BtnComp.jsx";

const SuperComp = () => {
  const [textColor, setTextColor] = useState("#000");

  const handleRedBtnClick = () => {
    setTextColor("#8b0000");
    alert("Red text enabled.");
  };

  const handleBlueBtnClick = () => {
    setTextColor("#00008B");
    alert("Blue text enabled.");
  };

  return (
    <>
      <Box size="large">
        <Text size="large" color={textColor}>
          large Box
        </Text>
      </Box>
      <Box size="medium">
        <Text size="medium" color={textColor}>
          medium Box
        </Text>
      </Box>
      <Box size="small">
        <Text size="small" color={textColor}>
          small Box
        </Text>
      </Box>
      <Button color="Brown" onClick={handleRedBtnClick}>
        Click me!
      </Button>
      <Button color="DarkBlue" onClick={handleBlueBtnClick}>
        Click me!
      </Button>
    </>
  );
};

export default SuperComp;
