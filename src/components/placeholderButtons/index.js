import Observation from "../observation";
import Answers from "../answers";
import { ImageContainer } from "../observation/observationElements";
import { OptionsElement, OptionsRow } from "../answers/answersElements";

export const PlaceholderButtons = () => {
  const placeOptions = ["a", "b", "c", "d"];

  return (
    <>
      <OptionsRow>
        {placeOptions.map((o, i) => {
          return (
            <OptionsElement key={i} style={{ border: "none" }}></OptionsElement>
          );
        })}
      </OptionsRow>
    </>
  );
};

export default PlaceholderButtons;
