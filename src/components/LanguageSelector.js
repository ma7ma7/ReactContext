import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageSelect("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageSelect("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
