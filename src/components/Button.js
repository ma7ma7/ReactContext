import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderValue(language) {
    return language === "english" ? "submit" : "vorleggan";
  }

  renderButton(color) {
    return (
      <div className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ langauge }) => this.renderValue(langauge)}
        </LanguageContext.Consumer>
      </div>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
