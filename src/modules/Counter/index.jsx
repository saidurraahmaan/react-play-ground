import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounterValue } from "./reducer";
import Button from "../../components/Button";

const Counter = () => {
  const { value } = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 py-2 justify-items-center gap-4 ">
        <div>Click Here </div>
        <div>
          <Button
            className="bg-green-600"
            onClick={() => dispatch(setCounterValue(value + 1))}
          >
            Click Me
          </Button>
        </div>
        <div>You clicked for </div>
        <div>{value} times</div>
      </div>
    </div>
  );
};

export default Counter;
