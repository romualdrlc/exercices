import fetch from "node-fetch";

function getChuckNorrisJoke(categories: string) {
  // code the function here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${categories}`)
    .then((reponse) => reponse.json())
    .then((joke) => console.log(joke))
    .catch((error) => console.error(error));
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
