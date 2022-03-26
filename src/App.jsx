
import useRandomJoke from "./useRandomJoke";

function App() {

  const joke = useRandomJoke("manan","khandelwal");
  

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>

          <h2>{joke}</h2>
          <form >
            <input placeholder="first name" />
            <input placeholder="last name" />
            <button>Generate Joke</button>
          </form>
      </center>
    </div>
  )
}

export default App
