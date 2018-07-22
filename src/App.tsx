import * as React from "react";
import "./App.css";
import MainScreen from "./MainScreen";

class App extends React.Component {
  public render() {
    return (
      <div>
        <MainScreen>This is some text</MainScreen>
      </div>
    );
  }
}

export default App;
