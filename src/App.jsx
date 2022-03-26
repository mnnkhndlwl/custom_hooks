import {useEffect,useState} from "react";

function App() {

  const [joke, setJoke] = useState('');

  //custom hook 
  const jk = useRandomJoke("manan","khandelwal");

  useEffect(() => {
    const fetchJokke = async () =>( 
      await fetch(`http://api.icndb.com/jokes/random?firstName=fuck&lastName=yeah`). //fetching joke
      then(res => res.json()) //json object
      .then(data =>{
        setJoke(data.value.joke);
      })
    )
    fetchJokke();
  }, [])

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
          <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  )
}

export default App
