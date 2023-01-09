import { React, useEffect, useState } from "react";
import axios from "axios";
import { OptionsElement, OptionsRow } from "./answersElements";
import { PlaceholderButtons } from "../placeholderButtons";

const Answers = ({ appState, setAppState }) => {
  const [state, setState] = useState({
    selected: null,
    alts: null,
    options: [],
  });

  // const taxonID = appState.obs.phylo
  useEffect(() => {
    if (appState.difficulty == "medium") {
      var taxonID = appState.obs?.phylo.family;
    } else if (appState.difficulty == "hard") {
      var taxonID = appState.obs?.phylo.genus;
    } else {
      var taxonID = appState.obs?.phylo.kingdom;
    }

    console.log("Got another set of alternate answers!");

    const getAnswers = async () => {
      // useEffect(() => {

      await axios
        .get(`http://localhost:3000/alternateAnswers?taxonID=${taxonID || 1}`)
        // .get(`http://localhost:3000/alternateAnswers`)
        .then((response) => {
          console.log(response.data);
          setState((state) => ({
            ...state,
            alts: response.data,
          }));
          // setAppState((state) => ({
          //   ...state,
          //   correct: false,
          // }));
        })
        .then(() => {
          setTimeout(() => {
            setAppState((state) => ({ ...state, loading: false }));
          }, 3000);
        });
    };

    getAnswers();
  }, [appState.obs]);

  const toTitleCase = (string) => {
    try {
      const str = string
        .toString()
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      return str.join(" ");
    } catch {}
  };

  const is_correct = ({ state, o }) => {
    return (
      state.selected !== null &&
      state.selected === appState.obs?.comName &&
      state.selected === o
    );
  };

  const is_wrong = ({ state, o }) => {
    return (
      state.selected !== null &&
      state.selected !== appState.obs?.comName &&
      state.selected === o
    );
  };

  useEffect(() => {
    if (is_correct({ state, o: state.selected })) {
      console.log("Correct answer!");
      setAppState((state) => ({ ...state, correct: true }));
      setTimeout(() => {
        setAppState((state) => ({ ...state, correct: false }));
      }, 100);
    }
  }, [state.selected]);

  useEffect(() => {
    var shuffled = state.alts?.comNames
      .concat(appState.obs?.comName)
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setState((state) => ({
      ...state,
      options: shuffled,
    }));
  }, [appState.obs]);

  return (
    <>
      {appState.loading & (state.options != []) ? (
        <>
          <PlaceholderButtons />
        </>
      ) : (
        <OptionsRow>
          {state?.options?.map((o, i) => {
            return (
              <OptionsElement
                key={i}
                onClick={() => {
                  setState((state) => ({ ...state, selected: o }));
                  // console.log(is_correct({ state, o }));
                }}
                className={
                  is_correct({ state, o })
                    ? "correct-answer answer-opt"
                    : is_wrong({ state, o })
                    ? "wrong-answer answer-opt"
                    : "answer-opt"
                }
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "1.25rem",
                  }}
                >
                  {toTitleCase(o)}
                </span>
              </OptionsElement>
            );
          })}
        </OptionsRow>
      )}
    </>
  );
};

export default Answers;
