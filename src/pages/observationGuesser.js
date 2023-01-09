import Observation from "../components/observation";
import Answers from "../components/answers";
import { MainContainer } from "./observationGuesserElements";
import { useState, useEffect } from "react";
import axios from "axios";
import DifficultyDropdown from "../components/difficulty";

const ObservationPage = () => {
  const [state, setState] = useState({
    loading: true,
    obs: null,
    correct: null,
  });

  useEffect(() => {
    const newObservation = async () => {
      try {
        axios.get("http://localhost:3000/observations").then((response) => {
          setState((state) => ({
            ...state,
            obs: response.data,
            // correct: true,
          }));
          // console.log(response.data);
        });
      } catch (err) {
        console.log("Whoops, there was an error when getting an image!");
      }
      console.log("Got a new observation!");
    };

    // if the answer is correct and it's selected, get a new observation
    if (state.correct !== false || state.selected) {
      newObservation();
      setState((state) => ({ ...state, correct: false }));
    } else if (state.selected == false) {
    }
  }, [state.correct]);

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <MainContainer>
        <DifficultyDropdown
          appState={state}
          setAppState={setState}
        ></DifficultyDropdown>
        <Observation appState={state} setAppState={setState} />
        <Answers appState={state} setAppState={setState} />
      </MainContainer>
    </div>
  );
};

export default ObservationPage;
