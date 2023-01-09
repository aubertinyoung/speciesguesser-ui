import { useEffect, useState } from "react";

export const DifficultyDropdown = ({ appState, setAppState }) => {
  const diff = ["easy", "medium", "hard"];
  const [state, setState] = useState({ difficulty: "easy" });
  //   diff.indexOf(appState.difficulty);

  //   useEffect(() => {changeDifficulty = () => {
  //     // const diff = ["easy", "medium", "hard"];

  //     if (appState.difficulty == "hard") {
  //       var nextIndex = 1;
  //     } else {
  //       var nextIndex = diff[diff.indexOf(appState.difficulty) + 1];
  //     }

  //     setAppState((state) => ({
  //       ...state,
  //       difficulty: diff[nextIndex],
  //     }))}, [])

  return (
    <>
      <div
        onClick={() => {
          if (state.difficulty != "hard") {
            setState((state) => ({
              ...state,
              difficulty: diff[diff.indexOf(state.difficulty) + 1],
            }));
          } else {
            setState((state) => ({
              ...state,
              difficulty: diff[0],
            }));
          }
        }}
      >
        {state.difficulty}
      </div>
    </>
  );
};

export default DifficultyDropdown;
