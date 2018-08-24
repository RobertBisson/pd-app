import * as React from "react";

import "./App.css";
import { TextInput } from "./components/TextInput";

import logo from "./logo.svg";

interface State {
  value: string;
}
class App extends React.Component <{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "bob"
    };
  }
  
  handleChange = (value: string) => {
    this.setState({value: value});
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <TextInput 
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
