import React, { useId, useState } from "react";

const GraphBox = ({ value = "", status }) => {
  const [isActivate, setIsActivate] = useState(status);
  return (
    <div
      style={{
        height: "23px",
        width: "22px",
        background: isActivate ? "green" : "gray",
        margin: "2px",
        borderRadius: "3px",
        textAlign: "center",
      }}
      onClick={() => {
        setIsActivate(!isActivate);
      }}
    >
      {value}
    </div>
  );
};

const GitGraph = () => {
  const keys = useId();
  let x = 0;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="main__container"
        style={{
          border: "1px solid #f1eaea",
          padding: "20px",
          maxWidth: "50%",
          minWidth: "50vw",
          borderRadius: "10px",
          marginLeft: "10px",
        }}
      >
        <div
          className="month_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="month__container" style={{ color: "gray" }}>
            Oct
          </div>
          <div className="graph__container" style={{ marginTop: "5px" }}>
            {[...Array(5)].map((_) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                  }}
                  key={`${keys} + ${Math.random() * 10000}`}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {[...Array(7)].map((_) => {
                      x++;
                      return (
                        <GraphBox
                          value={x}
                          status={
                            Math.floor(Math.random() * 10) % 2 === 0
                              ? true
                              : false
                          }
                          key={`${keys} + ${Math.random() * 10000}`}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitGraph;
