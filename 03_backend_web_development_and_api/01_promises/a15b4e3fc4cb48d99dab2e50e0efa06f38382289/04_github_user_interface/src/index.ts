import { ask, closeRl } from "../interface";
import { getOneRepoInfos, listRepos } from "../utils";
import { GithubClient, Repo } from "./github-client";

ask("Github nickname\n> ")
.then((nickname) => GithubClient.getReposUrl(nickname));
.then((descrepo) => GithubClient.printRepos(descrepo))
// Continue to chain here
