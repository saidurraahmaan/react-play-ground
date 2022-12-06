import React, { useEffect } from "react";
import Counter from "./Counter";
import Tick from "./Tick";
import Button from "../components/Button";

const Home = () => {
  useEffect(() => {
    console.log("Last Step");
    return () => {
      console.log("cleanUp");
    };
  }, []);

  return (
    <>
      <Counter />
      <Tick />
      <div>Changes happend</div>
    </>
  );
};

export default Home;
