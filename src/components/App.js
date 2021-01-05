import React from "react";
import UserSelect from "./UserSelect";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageSelect = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <LanguageSelector
            onLanguageSelect={this.onLanguageSelect(this.state.language)}
          />
          <ColorContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
              <UserSelect />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
