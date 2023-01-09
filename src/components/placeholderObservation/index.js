import Observation from "../observation";
import Answers from "../answers";
import { ImageContainer } from "../observation/observationElements";
import { OptionsElement, OptionsRow } from "../answers/answersElements";

export const PlaceholderObservation = () => {
  const placeOptions = ["a", "b", "c", "d"];

  return (
    <>
      <ImageContainer
        style={{ height: "50%", background: "#F0F0F0" }}
      ></ImageContainer>
    </>
  );
};

export default PlaceholderObservation;
