import {useEffect,useState} from 'react'

function useRandomJoke(firstName,lastName) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const fetchJokke = async () =>( 
          await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`). //fetching joke
          then(res => res.json()) //json object
          .then(data =>{
            setJoke(data.value.joke);//changing value of joke
          })
        )
        fetchJokke();
      }, [firstName,lastName])

      return joke;
} 

export default useRandomJoke