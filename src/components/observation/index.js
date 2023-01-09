import { ImageContainer, PhotoCredit, Hint } from "./observationElements";
import { useState } from "react";
import PlaceholderObservation from "../placeholderObservation";

const Observation = ({ appState }) => {
  const [state, setState] = useState({ hintActive: false });

  return appState.loading ? (
    <>
      <PlaceholderObservation />
    </>
  ) : (
    <ImageContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "50px",
          // background: "red",
        }}
      >
        <Hint
          onClick={() => {
            setState({ ...state, hintActive: !state.hintActive });
          }}
          className={state.hintActive ? "hide-hint" : "show-hint"}
        >
          {state.hintActive ? appState?.obs?.place : "Hint"}
        </Hint>
        <PhotoCredit>
          <span>
            Photo by {appState.obs?.observedBy?.name} /{" "}
            {appState.obs?.observedBy.login} on iNaturalist
          </span>
        </PhotoCredit>
      </div>
      <img
        style={{
          maxWidth: "100%",
          // width: "100%",
          maxHeight: "100%",
          borderRadius: "10px",
          background: "grey",
        }}
        src={`${appState.obs?.photo}`}
      />
    </ImageContainer>
  );
};

export default Observation;
