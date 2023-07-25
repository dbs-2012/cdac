import React from "react";

const Triangle = () => {
  return (
    <>
      <div className="left-sidebar" style={{ display: "flex", float: "left", width: "30%", border: "1px solid red", height: "90vh" }}>

      </div>
      
      <div className="middle-bar" style={{height: "90vh", width: "69.7%", border: "1px solid blue", display: "flex"}}>
        <iframe
          title="graph"
          src={process.env.PUBLIC_URL + "/test.html"}
          width="1050"
          height="670"
          style={{display: "flex"}}
        />
      </div>
    </>
  );
};

export default Triangle;