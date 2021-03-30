import fetch, { Response } from "node-fetch";

function getCategories() {
  // code the function here
  return (
    fetch("https://api.chucknorris.io/jokes/categories")
      /*.then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.statusText);
    })*/
      .then((reponse) => reponse.json())
      .then((category) => console.log(category))
      .catch((error) => console.error(error))
  );
}

// leave line below for tests to work properly
export { getCategories };
