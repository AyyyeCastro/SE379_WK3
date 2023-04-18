import React from 'react';

// switch cases for FONT size
const TextComp = (props) => {
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

 export default TextComp;