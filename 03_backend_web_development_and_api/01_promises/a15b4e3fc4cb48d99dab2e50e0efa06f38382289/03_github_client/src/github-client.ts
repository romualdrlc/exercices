import { Response } from "node-fetch";
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
    console.log(data);
    return data;
  }

  static printRepository(newrepo: Repo): Promise<string | Repo> {
    // You code goes here
    console.log(`this is a ${newrepo.description}`);
  }

  static getProjectInformations(url: string): Promise<string | Repo> {
    // You code goes here
    return getOneRepoInfos(url);
  }
}
