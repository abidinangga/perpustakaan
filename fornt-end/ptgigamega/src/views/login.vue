<template>
  <div class="bg-gradient-to-tr from-sky-400 to-sky-600">
    <section id="login" class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
      <div class="p-6 bg-sky rounded">
        <div class="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
          <h1 class="tracking-wide">Perpustakaan<span class="font-mono"></span></h1>
        </div>
        <form
          @submit.prevent="submitLogin"
          id="login_form"
          action=""
          method="POST"
          class="flex flex-col justify-center"
        >
          <label class="text-sm font-medium">Username</label>
          <input
            v-model="username"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            name="username"
            placeholder="roby"
            required
          />
          <label class="text-sm font-medium">Password</label>
          <input
            v-model="password"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="password"
            name="password"
            placeholder="********"
            required
          />
          <button
            class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
            type="submit"
          >
            <span id="login_default_state">Login</span>
          </button>
        </form>
        <div>
          <p class="flex items-center justify-center text-2 ">
             belum punya akun? 
          </p>
          <button
            class="px-4 py-1.5 w-full rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
          >
          <router-link to="/register" class="text-sm font-medium text-black-600"
            >Register</router-link
          >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginAction", "isloginAction"]),
    async submitLogin() {
      try {
        const data = await this.loginAction({
          username: this.username,
          password: this.password,
        });
        this.isloginAction("true");
        localStorage.setItem("token", data.data.data.token);
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
