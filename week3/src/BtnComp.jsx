import React from 'react';

const BtnComp = ({ color, onClick, children }) => {
  
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

export default BtnComp;
