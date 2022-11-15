
import React, { useState } from "react";

function App() {
  function changeColor() {
    setMouseOver(true);
  }
  function colorChange() {
    setMouseOver(false);
  }
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function credentialsChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={credentialsChange}
          type="text"
          placeholder="First Name"
          value={contact.fName}
          name="fName"
        />
        <input
          onChange={credentialsChange}
          type="text"
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={credentialsChange}
          type="email"
          value={contact.email}
          name="email"
          placeholder="Email"
        />
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
