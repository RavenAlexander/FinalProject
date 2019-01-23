//NOTE: THE ROUTES HERE ARE SET TO LOCALHOST, MEANING THEY WILL NOT WORK WITH HEROKU. UNFORTUNATELY I COULD NOT SOLVE HOW TO GET THE PROXY TO WORK WITHOUT LOCALHOST AND HAD TO USE THIS AS A LAST RESORT.
import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("http://localhost:3001/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("http//localhost:3001/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("http://localhost:3001/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("http://localhost:3001/api/books", bookData);
  }
};
