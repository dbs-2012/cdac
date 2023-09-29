import React, { useState } from "react";
import "./Triangle.css";

const steps = [
  "Input the values of x and y coordinates of the three vertices of the triangle in the specified fields",
  "Once all coordinates have been entered click on the draw triangle button to get the triangle on the graph.",
  "Click on the points of the base of the triangle to get a line parallel to the base.",
  "Drag the line drawn on the base parallel to base to divide the sides of the triangle.",
  "Click on the Use scale button to get the scale on the graph.",
  "With the help of the scale measure the sides of the triangle bisected by the parallel line to the base and note them down.",
  "With the noted down the lengths of the bisected sides calculate the ratio.",
  "Use the Calculate ratio button to get the ratio and compare the correctness of the one calculated by you.",
];
const Triangle = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(steps[0]);
  const [btn, setBtn] = useState(false);

  const displayNext = () => {
    if (count < steps.length - 1) {
      setCount(count + 1);
      setStep(steps[count + 1]);
    }
  };

  const displayPrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setStep(steps[count - 1]);
    }
  };

  const setStyle = () => {
    setBtn(true);
  };

  return (
    <>
      <div className="left-sidebar-container">
        <div className="left-sidebar">
          <div className="steps-slideshow-container">
            <div className="step-number">Step {count + 1}</div>
            <div className="steps-container">{step}</div>
          </div>
          <div className="left-sidebar-buttons">
            <div className="prev">
              <button className="side-buttons" onClick={displayPrev}>
                Prev
              </button>
            </div>
            <div className="next">
              <button className="side-buttons" onClick={displayNext}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="display-all-steps-container">
          <div className="display-steps-button">
            <button onClick={setStyle} className="side-buttons">
              Click Here to See All Steps
            </button>
          </div>
          {btn && (
            <div className="all-steps-container">
              <ol type="I">
                {steps.map((s) => (
                  <li key={s} className="all-steps">
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      <div className="middle-bar">
        <iframe
          title="graph"
          src={process.env.PUBLIC_URL + "/test.html"}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Triangle;
