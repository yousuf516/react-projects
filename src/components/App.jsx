import React from "react";

function App() {
  const [fName, setfName] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleChange(event) {
    let textValue = event.target.value;
    if (textValue.length < 15) {
        setfName(textValue);
    }
  }

  function changeColor() {
    setMouseOver(true);
  }

  function colorChange() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {fName}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={fName}
        />
        <input name="lName" placeholder="Last Name" />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={changeColor}
          onMouseOut={colorChange}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
