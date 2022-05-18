import { defineStore } from "pinia";
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    books: [],
    dataEdit: {
      id: "",
      author: "",
      publisher: "",
      title: "",
      isbn: "",
      description: "",
    },
    newData: [],
  }),
  getters: {},
  actions: {
    isloginAction(payload) {
      this.isLogin = payload;
    },
    registAction(payload) {
      return axios.post("/auth/do-register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        profileName: payload.profileName,
      });
    },
    loginAction(payload) {
      return axios.post("/auth/do-login", {
        username: payload.username,
        password: payload.password,
      });
    },
    addBook(payload) {
      return axios.post(
        "/books",
        {
          author: payload.author,
          description: payload.description,
          title: payload.title,
          isbn: payload.isbn,
          publisher: payload.publisher,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    },
    editDataBook(payload) {
      return axios.put(
        "/books",
        {
          id: payload.id,
          author: payload.author,
          description: payload.description,
          title: payload.title,
          isbn: payload.isbn,
          publisher: payload.publisher,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    },
    async getBooks(payload) {
      try {
        const data = await axios.get("/books", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          params: {
            limit: 20,
            offset: 0,
          },
        });
        this.books = data.data.data;
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async deleteBook(id) {
      try {
        const data = await axios.delete(`/books/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        this.getBooks();
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async getDataById(id) {
      try {
        const data = await axios.get(`/books/findbyid/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        this.dataEdit = {
          id: data.data.data.id,
          author: data.data.data.author,
          publisher: data.data.data.publisher,
          title: data.data.data.title,
          isbn: data.data.data.isbn,
          description: data.data.data.description,
        };
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
});
