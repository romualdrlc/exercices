import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<Author[]> {
    return fetch(`${this.baseUrl}/authors`, {
      method: "GET",
    })
      .then((allAuthors) => allAuthors.json())
      .then((afficheAuthor) => {
        return afficheAuthor;
      })
      .catch((error) => console.error(error));
  }
  getOne(id: number): Promise<number> {
    return fetch(`${this.baseUrl}/authors/${id}`, {
      method: "GET",
    })
      .then((idAuthor) => idAuthor.json())
      .then((afficheIdAuthor) => {
        return afficheIdAuthor;
      })
      .catch((error) => console.error(error));
  }
  getAuthorBooks(id: number): Promise<string> {
    return fetch(`${this.baseUrl}/authors/${id}/books`, {
      method: "GET",
    })
      .then((allBookPerAuthor) => allBookPerAuthor.json())
      .then((listOfBook) => {
        return listOfBook;
      })
      .catch((error) => console.error(error));
  }
  searchByName(term: string): Promise<string[]> {
    return fetch(`${this.baseUrl}/authors?q=${term}`, {
      method: "GET",
    })
      .then((authorByName) => authorByName.json())
      .then((search) => {
        return search;
      })
      .catch((error) => console.error(error));
  }
}

// Leave the line below for tests to work
export { AuthorRepository };
