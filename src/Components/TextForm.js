import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Upeercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleOnClick = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopyClick = () => {
    var copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaceClick = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };
  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          {props.heading}
        </h2>
        <textarea
          className="form-control mb-3"
          style={{
            background: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "#042743" : "white",
          }}
          id="myBox"
          rows="8"
          placeholder="Required example textarea"
          value={text}
          onChange={handleOnClick}
        ></textarea>
        <button className="btn mx-2 btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn mx-2 btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn mx-2 btn-primary" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn mx-2 btn-primary" onClick={handleClearClick}>
          Clear
        </button>
        <button
          className="btn mx-2 btn-primary"
          onClick={handleExtraSpaceClick}
        >
          RemoveExtraSpace
        </button>
      </div>
      <div className="container my-3">
        <h2 style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          Your Text Summary
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2 style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0
            ? text
            : "Enter somthing in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
