import { defineStore } from 'pinia'
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    isLogin: false,
    books:[],

  }),
  getters: {
  
  },
  actions: {
    isloginAction(payload) {
      this.isLogin = payload
    },
    registAction(payload) {
      return axios.post("/auth/do-register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        profileName: payload.profileName
      })
    },
    loginAction(payload) {
      return axios.post("/auth/do-login", {
      username: payload.username,
      password: payload.password,
      });
    },
    async getBooks(payload){
      try {
        const data = await axios.get("/books",{
          headers:{
            Authorization: localStorage.getItem("token")
          },
          params:{
            limit: 20,
            offset:0
          }
        })
        this.books= data.data.data
      } catch (error) {
        console.log("error: ", error);
        
      }
    }
  }
})
