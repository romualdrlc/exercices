import { ProjectInformation } from "./types";
import fetch from "node-fetch";

function getProjectInformation(url: string): Promise<ProjectInformation[]> {
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
    .then((urlChooseByOwner) => {
      return [
        urlChooseByOwner.description,
        urlChooseByOwner.language,
        urlChooseByOwner.subscribers_count,
        urlChooseByOwner.stargazers_count,
        urlChooseByOwner.git_url,
      ];
    });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getProjectInformation };
