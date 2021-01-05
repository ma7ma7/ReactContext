import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderValue(value) {
    return value === "english" ? "submit" : "vorleggan";
  }

  render() {
    return (
      <div className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderValue(value)}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Button;
