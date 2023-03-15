import React, { useReducer } from "react";

const Counter = () => {
  const count = 0;

  const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    }
    if (action.type === "DEC") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, count);
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-96 shadow-xl rounded-md p-5">
        <h4 className="text-xl text-center mb-5">{state}</h4>
        <div className="flex justify-around">
          <button
            onClick={() => dispatch({ type: "INC" })}
            className="px-5 py-2 bg-green-300 rounded-md"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "DEC" })}
            className="px-5 py-2 bg-red-300 rounded-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
