import { ProjectInformation, GithubProject } from "./types";
import fetch from "node-fetch";

function extracturl(urlChooseByOwner: GithubProject): ProjectInformation {
  const toto = {
    description: urlChooseByOwner.description,
    language: urlChooseByOwner.language,
    subscribers_count: urlChooseByOwner.subscribers_count,
    stargazers_count: urlChooseByOwner.stargazers_count,
    git_url: urlChooseByOwner.git_url,
  };
  return toto;
}

function getProjectInformation(url: string): Promise<ProjectInformation> {
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
      return extracturl(urlChooseByOwner);
    });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getProjectInformation };
