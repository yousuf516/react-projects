import React, { useState } from "react";

function App() {
    const [name, setName] = useState("")
    const [headingText, setHeading] = useState("");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleChange(event) {
        let textValue = event.target.value;
        if (textValue.length < 15){
            setName(textValue);
        }
    }

    function handleClick(event) {
        setHeading(name);
        event.preventDefault();
    }

    function changeColor() {
        setMouseOver(true)
    }

    function colorChange() {
        setMouseOver(false)
    }

    return (
        <form onSubmit={handleClick}>
            <div className="container">
                <h1>Hello {headingText}</h1>
                <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
                <button type="submit" style={{ backgroundColor: isMouseOver ? "black" : "white" }} onMouseOver={changeColor} onMouseOut={colorChange}>Submit</button>
            </div>
        </form>
    );
}

export default App;
