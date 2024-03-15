import React from "react";

const MyComponent = ({ count, setCount }) => {
  return (
    <div>
      <h2>vvv This button is from a component one level below App.jsx vvv</h2>
      <button
        onClick={() =>
          setCount((currcount) => {
            return currcount + 1;
          })
        }
      >
        +
      </button>
      <h2>
        ^^^ See how it can alter a state above by passing in count and setCount
        :0 ^^^
      </h2>
      <h1>Controlled Component (Form)</h1>
    </div>
  );
};

export default MyComponent;
