import React, { useState } from "react";

export const Memory2 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className={show ? "card flip" : "card"}
        style={{
          borderRadius: "5px",
          display: "inline-block",
          width: "150px",
          height: "140px",
          maxHeight: "20vw",
          backgroundColor: "rgb(185, 204, 218)",
          margin: "5px",
        }}
        onClick={() => setShow(!show)}
      >
        <div
          className="back-face"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <center>
            <span style={{ userSelect: "none" }}>BACK</span>
          </center>
        </div>

        <div
          className="front-face"
          style={{
            position: "absolute",
            height: "100%",
            display: "flex",
            width: "100%",
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <center>
            <span style={{ userSelect: "none" }}>FRONT</span>
          </center>
        </div>
      </div>
    </div>
  );
};
