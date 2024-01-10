import "./App.css";
import AccessDomElm from "./components/AccessDomElms";
import KeepTrackOfStateChanges from "./components/KeepTrackOfStateChanges";
import PreventReRender from "./components/PreventReRender";

function App() {
  return (
    <>
      {/* <PreventReRender /> */}
      <AccessDomElm />
      {/* <KeepTrackOfStateChanges /> */}
    </>
  );
}

export default App;
