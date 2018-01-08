import React from "react";

const NotFound = () => {
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
      <br />
      <div style={{ fontSize: "20px" }}>
        The page you are trying to access does'nt exist. Go back to{" "}
        <a href="/">home</a>
      </div>
    </div>
  );
};

export default NotFound;
