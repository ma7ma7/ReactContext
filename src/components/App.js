import React from "react";

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
          {this.state.language}
        </div>
      </div>
    );
  }
}

export default App;
