import Observation from "../components/observation";
import Answers from "../components/answers";
import { MainContainer } from "./observationGuesserElements";

const ObservationPage = () => {
  return (
    <div
      style={{
        width: "49%",
      }}
    >
      <MainContainer>
        <Observation />
        <Answers />
      </MainContainer>
    </div>
  );
};

export default ObservationPage;
