import {useEffect} from "react";

function App() {
  useEffect(() => {
    const fetchJokke = async () =>( 
      await fetch(`http://api.icndb.com/jokes/random`). //fetching joke
      then(res => res.json()) //json object
      .then(data =>{
        console.log(data.value.joke); //then whatever data we are having from that data we are returning value.joke 
        //if you didn't understand copy api url and go to that url and see response
      })
    )
    fetchJokke();
  }, [])
  
  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <button>Generate Joke</button>
      </center>
    </div>
  )
}

export default App
