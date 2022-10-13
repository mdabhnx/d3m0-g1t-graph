import React from "react";
import GitGraph from "./components/GitGraph";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ letterSpacing: "5px" }}>Something Like Git Graph</h1>
      <GitGraph />
    </div>
  );
};

export default App;
