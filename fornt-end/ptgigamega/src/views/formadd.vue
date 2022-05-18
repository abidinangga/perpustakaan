<template>
  <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center bg-gradient-to-tr from-sky-300 to-sky-500">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Add Book</p>
            <p>Please insert new data Book.</p>
          </div>
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5" >
                <label for="author">Author</label>
                <input type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="author">
              </div>
              <div class="md:col-span-5">
                <label for="publisher">Publisher</label>
                <input type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="publisher" >
              </div>

              <div class="md:col-span-3">
                <label for="title">Title</label>
                <input type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="title" >
              </div>

              <div class="md:col-span-2">
                <label for="isbn">ISBN</label>
                <input  type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="isbn" >
              </div>

              <div class="md:col-span-5">
                <label for="country">Description</label>
                  <textarea v-model="description" cols="30" rows="10" class="border mt-1 rounded bg-gray-50 px-4 w-full"></textarea>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <router-link to="/home" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</router-link>
                </div>
                <div class="inline-flex items-end">
                  <button @click.prevent="submitAdd" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
name : "formAdd",
data () {
  return{
    author: "",
    publisher: "",
    title: "",
    isbn: "",
    description: "",
  }
},
methods:{
  ...mapActions(useCounterStore,["addBook"]),
  async submitAdd(){
    try {
      const data = await this.addBook({
        author: this.author,
        publisher: this.publisher,
        title: this.title,
        isbn: this.isbn,
        description: this.description,
      })
      this.$router.push('/home')
    } catch (error) {
      console.log("error: ", error);
    }
}
},
}
</script>

<style>

</style>