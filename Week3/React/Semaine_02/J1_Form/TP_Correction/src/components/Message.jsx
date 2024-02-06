import React from "react";

const color = {
  color: "orange",
};
function Message({ message }) {
  return (
    <>
      <div style={color}>{message}</div>
    </>
  );
}

export default Message;
