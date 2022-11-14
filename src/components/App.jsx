import React, { useState } from "react";

function App() {
    const [name, setName] = useState("")
    const [isMouseOver, setMouseOver] = useState(false);

    function handleChange(event) {
        let textValue = event.target.value;
        if (textValue.length < 15){
            setName(textValue);
        }
    }

    function changeColor() {
        setMouseOver(true)
    }

    function colorChange() {
        setMouseOver(false)
    }

    return (
        <div className="container">
            <h1>Hello {name}</h1>
            <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
            <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onMouseOver={changeColor} onMouseOut={colorChange}>Submit</button>
        </div>
    );
}

export default App;
