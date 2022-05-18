<template>
  <div class="bg-gradient-to-tr from-sky-400 to-sky-600">
    <section class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
    <div class="p-6 rounded">
        <div class="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
        <h1 class="tracking-wide">Perpustakaan<span class="font-mono"></span></h1>
        </div>
        <form
        @submit.prevent="submitRegist"
        id="login_form"
        action=""
        method="POST"
        class="flex flex-col justify-center"
        >
        <label class="text-sm font-medium">Name</label>
        <input
            v-model="username"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            placeholder="rich brian"
            required
        />
        <label class="text-sm font-medium">Profile Name</label>
        <input
            v-model="profileName"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            placeholder="jugo"
            required
        />
        <label class="text-sm font-medium">Address</label>
        <input
            v-model="address"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            placeholder="jalan jendral sudirman"
            required
        />
        <label class="text-sm font-medium">Password</label>
        <input
            v-model="password"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="password"
            placeholder="********"
            required
        />
        <button
            class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
            type="submit"
        >
            <span id="login_default_state">Create Account</span>
        </button>
        </form>
        <div>
        </div>
    </div>
    </section>
</div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
name:"register",
data() {
    return {
        username: "",
        profileName: "",
        address: "",
        password: "",
    };
},
methods: {
    ...mapActions(useCounterStore, ["registAction"]),
    async submitRegist() {
    try {
        const data = await this.registAction({
        username: this.username,
        profileName: this.profileName,
        address: this.address,
        password: this.password,
        });
        this.$router.push("/");
        this.$swal({
        title: `Success Register`,
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
        });
    } catch (error) {
        this.$swal({
        title: `Failed register`,
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
        });
    }
    },
},
}
</script>

<style>

</style>