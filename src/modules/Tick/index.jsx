import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import { setTick } from "./reducer";

const Tick = () => {
  const { isTick } = useSelector((state) => state.Tick);
  const dispatch = useDispatch();

  useEffect(()=>{
    
  },[])

  return (
    <div className="p-2">
      <div className="flex justify-center">
        <Button
          className={`bg-${isTick ? "green" : "pink"}-600`}
          onClick={() => dispatch(setTick(!isTick))}
        >
          {isTick ? "tick" : "untick"}{" "}
        </Button>
      </div>
    </div>
  );
};

export default Tick;
