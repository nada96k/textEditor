import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    currentColor: null,
    boldStyle: null,
    italicStyle: null,
    underlineStyle: null,
    activebtn1: "btn btn-light",
    activebtn2: "btn btn-light",
    activebtn3: "btn btn-light"
  };

  selectedColor = color => {
    this.setState({ currentColor: color });
  };

  selectedStyle = fstyle => {
    if (fstyle === "bold")
      this.setState({ boldStyle: fstyle, activebtn1: "btn btn-primary" });
    if (fstyle === "italic")
      this.setState({ italicStyle: fstyle, activebtn2: "btn btn-primary" });
    if (fstyle === "underline")
      this.setState({ underlineStyle: fstyle, activebtn3: "btn btn-primary" });
  };

  undoClick = fstyle => {
    if (fstyle === "bold" && this.state.activebtn1 === "btn btn-primary")
      this.setState({ boldStyle: "normal", activebtn1: "btn btn-light" });
    if (fstyle === "italic" && this.state.activebtn2 === "btn btn-primary")
      this.setState({ italicStyle: "normal", activebtn2: "btn btn-light" });
    if (fstyle === "underline" && this.state.activebtn3 === "btn btn-primary")
      this.setState({ underlineStyle: "none", activebtn3: "btn btn-light" });
  };

  render() {
    const styles = {
      bold: { fontWeight: "bold" },
      italic: { fontStyle: "italic" },
      underline: { textDecorationLine: "underline" }
    };

    const styleNames = ["bold", "italic", "underline"];
    const colors = [
      "yellow",
      "orange",
      "red",
      "pink",
      "purple",
      "blue",
      "green",
      "grey",
      "black"
    ];

    const colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectedColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">
          <button
            className={this.state.activebtn1}
            style={styles[styleNames[0]]}
            key={styleNames[0]}
            onClick={() => {
              {
                this.selectedStyle(styleNames[0]);
                {
                  this.undoClick(styleNames[0]);
                }
              }
            }}
          >
            {styleNames[0]}
          </button>
          <button
            className={this.state.activebtn2}
            style={styles[styleNames[1]]}
            key={styleNames[1]}
            onClick={() => {
              {
                this.selectedStyle(styleNames[1]);
                {
                  this.undoClick(styleNames[1]);
                }
              }
            }}
          >
            {styleNames[1]}
          </button>
          <button
            className={this.state.activebtn3}
            style={styles[styleNames[2]]}
            key={styleNames[2]}
            onClick={() => {
              {
                this.selectedStyle(styleNames[2]);
                {
                  this.undoClick(styleNames[2]);
                }
              }
            }}
          >
            {styleNames[2]}
          </button>
        </div>

        <textarea
          style={{
            color: `${this.state.currentColor}`,
            fontStyle: `${this.state.italicStyle}`,
            fontWeight: `${this.state.boldStyle}`,
            textDecorationLine: `${this.state.underlineStyle}`
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
