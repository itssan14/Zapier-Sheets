import React from "react";

const NoMatch = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <b style={{ fontSize: "50px" }}>404 Page Not Found!</b>
    </div>
  );
};

export default NoMatch;
