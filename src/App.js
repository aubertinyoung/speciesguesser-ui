import logo from "./logo.svg";
import "./App.css";
import ObservationPage from "./pages/observationGuesser";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ObservationPage />
      </div>
    </div>
  );
}

export default App;
