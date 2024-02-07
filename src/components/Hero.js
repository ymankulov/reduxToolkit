import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/reducerToolkitSlice";

const Hero = () => {
  const { count } = useSelector((s) => s.toolkit);
  const dispatch = useDispatch();
  return (
    <center>
      <div>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </center>
  );
};

export default Hero;
