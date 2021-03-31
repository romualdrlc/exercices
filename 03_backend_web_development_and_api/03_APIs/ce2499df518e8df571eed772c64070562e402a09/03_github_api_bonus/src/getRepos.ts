import fetch from "node-fetch";
import { PresentationRepo } from "./types";

function getRepos(url: string): Promise<PresentationRepo[]> {
  // code the function here
  return fetch(`${url}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Page not found");
      }
      return response.json();
    })
    .then((afficheRepo) => {
      return [afficheRepo.name, afficheRepo.url];
    });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getRepos };
