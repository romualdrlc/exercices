import { Response } from "node-fetch";
import { report } from "node:process";
import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string | GitHub> {
    // You code goes here
    return getReposUrlByNickname(nickname).then((data) => {
      if (data.message === "Not Found") {
        throw new Error("pas de user");
      }
      return data.repos_url;
    });
  }

  static getRepos(url: string): Promise<Repo[]> {
    // You code goes here
    return listRepos(url);
  }

  static printRepos(data: Repo[]): Promise<string | Repo[]> {
    // You code goes here

    data.forEach((repo, index) => {
      console.log(`${index + 1} . ${repo.name}`);
    });
    return data;
  }

  static printRepository(newrepo: Repo): Promise<string | Repo> {
    // You code goes here
    console.log(newrepo.name);
    console.log(newrepo.description);
    console.log(newrepo.subscribers_count);
    console.log(newrepo.stargazers_count);
    console.log(newrepo.language);
    console.log(newrepo.url);
  }

  static getProjectInformations(url: string): Promise<string | Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }
}
