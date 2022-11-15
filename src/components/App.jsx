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
      if (name === "fName") {
        if (value.length < 10) {
          return {
            fName: value,
            lName: prevValue.lName,
            email: prevValue.email
          };
        } else {
          return {
            fName: value.slice(0, 10),
            lName: prevValue.lName,
            email: prevValue.email
          };
        }
      } else if (name === "lName") {
        if (value.length < 10) {
          return {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
          };
        } else {
          return {
            fName: prevValue.fName,
            lName: value.slice(0, 10),
            email: prevValue.email
          };
        }
      } else if (name === "email") {
        if (value.length < 20) {
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value
          };
        } else {
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value.slice(0, 30)
          };
        }
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
