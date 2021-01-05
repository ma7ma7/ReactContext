import React from "react";
import UserSelect from "./UserSelect";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageSelect = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageSelect("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageSelect("dutch")}
          />
          <LanguageContext.Provider value={this.state.language}>
            <UserSelect />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
