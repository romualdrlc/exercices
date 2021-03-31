import fetch from "node-fetch";

function getReposUrl(githubNickname: string): Promise<string> {
  // code the function here
  return fetch(`https://api.github.com/users/${githubNickname}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Page not found");
      }
      return response.json();
    })
    .then((urlResult) => {
      return urlResult.repos_url;
    });
}

// Leave the line below for tests and `src/index.ts` to work properly
export { getReposUrl };
