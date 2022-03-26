import { useState,useRef } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

 
  
  const [firstName, setFirstName] = useState("elon");
  const [lastName, setLastName] = useState("musk");

  const generate = (e) =>{
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  const joke = useRandomJoke(firstName,lastName);
  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>

          <h2>{joke}</h2>
          <form >
            <input placeholder="first name" ref={firstNameRef}/>
            <input placeholder="last name" ref={lastNameRef}/>
            <button onClick={generate}>Generate Joke</button>
          </form>
      </center>
    </div>
  )
}

export default App
