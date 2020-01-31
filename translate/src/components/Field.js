import React from "react";
import LanguageContext from "./context/LanguageContext";

class Field extends React.Component {
  // This is how you hook up a context object to a component
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
