import fetch, { Response } from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<void> {
    return fetch(`${this.baseUrl}/users`, {
      method: "GET",
    })
      .then((infoUser) => infoUser.json())
      .then((afficheUser) => {
        return afficheUser;
      })
      .catch((error) => console.error(error));
  }
  getOne(id: number): Promise<number> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "GET",
    })
      .then((idUser) => idUser.json())
      .then((afficheIdUser) => {
        return afficheIdUser;
      })
      .catch((error) => console.error(error));
  }
  getUserComments(id: number): Promise<string> {
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
      method: "GET",
    })
      .then((idInfo) => idInfo.json())
      .then((commentByUser) => {
        return commentByUser;
      })
      .catch((error) => console.error(error));
  }
  create(params: Record<string, unknown>): Promise<void> {
    return fetch(`${this.baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((nouvelUser) => {
        return nouvelUser;
      })
      .catch((error) => console.error(error));
  }
  update(id: number, params: Record<string, unknown>): Promise<void> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((modifUser) => {
        return modifUser;
      })
      .catch((error) => console.error(error));
  }

  delete(id: number): Promise<string> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "DELETE",
    })
      .then((idInfo) => idInfo.json())
      .then((deleteId) => {
        return deleteId;
      })
      .catch((error) => console.error(error));
  }
}

// Leave the line below for tests to work
export { UserRepository };
