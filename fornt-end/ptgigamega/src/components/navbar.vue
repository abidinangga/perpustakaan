<template>
  <nav >
  <div class="rounded-lg w-full bg-sky-300">
    <div class="flex  border-t py-0 px-4 bg-gradient-to-tr from-sky-400 to-sky-500">
      <span class="font-bold mt-3 text-xl italic text-sky-800 hover:text-blue-500 focus:text-transparent active:text-transparent border-0 shadow-none">Perpustakaan</span>
      <div class="flex ml-3">
        <router-link to="/addBook" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Add Book</span>
        </router-link>
        <a v-if="isLogin" @click.prevent="logout" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Logout</span>
        </a>
        <router-link v-if="!isLogin" to="/" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Login</span>
        </router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions,mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
 name: "navbar",
 methods:{
  ...mapActions(useCounterStore, ["isloginAction"]),
  logout() {
      localStorage.removeItem("token");
      this.isloginAction(false);
      this.$router.push("/");
    },
 },
 computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
}
</script>

<style>

</style>