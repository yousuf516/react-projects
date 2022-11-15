import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  const [isMouseOver, setMouseOver] = React.useState(false);

  function fullNameChange(event) {
    const {value, name} = event.target;

    setFullName(prevValue => {
        if(name === "fName"){
            if(value.length < 10) {
                return {
                    fName: value,
                    lName:prevValue.lName
                }
            }
            else {
                return {
                    fName: value.slice(0, 10),
                    lName:prevValue.lName
                }   
            }
        }
        else if(name === "lName") {
            if(value.length < 10) {
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
            else {
                return {
                    fName: prevValue.fName,
                    lName: value.slice(0, 10)
                }
            }
        }
    })

  }


  function changeColor() {
    setMouseOver(true);
  }

  function colorChange() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName + " " + fullName.lName}</h1>
      <form>
        <input
          onChange={fullNameChange}
          type="text"
          placeholder="First Name"
          value={fullName.fName}
          name="fName"
        />
        <input 
          onChange={fullNameChange} 
          type="text" 
          name="lName" 
          placeholder="Last Name" 
          value={fullName.lName}  
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
