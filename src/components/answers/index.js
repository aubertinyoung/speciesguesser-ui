import React from "react";
// import axios from "axios";
import { OptionsElement, OptionsRow } from "./answersElements";

const Answers = () => {
  //   const options = axios.get();
  const options = ["a", "b", "c", "d"];
  //   const opt = options.map((o) => o);

  return (
    <OptionsRow>
      {options.map((o, i) => {
        return (
          <OptionsElement key={i}>
            <span style={{ height: "100%" }}>{o}</span>
          </OptionsElement>
        );
      })}
    </OptionsRow>
  );
};

export default Answers;
