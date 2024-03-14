import { useEffect, useState } from "react";

export default function Joker(){
let [joke, setJoke]= useState({});

    const URL = "https://official-joke-api.appspot.com/jokes/random";

const getJoke=async()=>{
let response = await fetch(URL);
let jsonResponse = await response.json();
setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
}

useEffect(()=>{
    async function getRandomJokes(){
   let response = await fetch(URL);
let jsonResponse = await response.json();
setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});     
    }
    getRandomJokes();
}, [])


    return(
        <div>
            <h1>Get a joke</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getJoke}>New Joke</button>
        </div>
    )
}