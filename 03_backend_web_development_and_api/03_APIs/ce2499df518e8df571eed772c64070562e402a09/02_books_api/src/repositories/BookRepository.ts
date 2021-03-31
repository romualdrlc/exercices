import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL;

  // Code functions here like this
  /*
  neededFunction() {}
  */
  getAll(): Promise<void> {
    return fetch(`${this.baseUrl}/books`, {
      method: "GET",
    })
      .then((info) => info.json())
      .then((afficheBook) => {
        return afficheBook;
      })
      .catch((error) => console.error(error));
  }
  getOne(id: number): Promise<number> {
    return fetch(`${this.baseUrl}/books/${id}`, {
      method: "GET",
    })
      .then((idBook) => idBook.json())
      .then((afficheBookPerId) => {
        return afficheBookPerId;
      })
      .catch((error) => console.error(error));
  }
  getBookComments(id: number): Promise<string> {
    return fetch(`${this.baseUrl}/books/${id}/comments`, {
      method: "GET",
    })
      .then((infoRequest) => infoRequest.json())
      .then((commentBooks) => {
        return commentBooks;
      })
      .catch((error) => console.error(error));
  }
  searchByTitle(term: string): Promise<string[]> {
    return fetch(`${this.baseUrl}/books?q=${term}`, {
      method: "GET",
    })
      .then((search) => search.json())
      .then((bookByName) => {
        return bookByName;
      })
      .catch((error) => console.error(error));
  }
}

// Leave the line below for tests to work
export { BookRepository };
