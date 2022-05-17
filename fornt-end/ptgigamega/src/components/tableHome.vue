<template>
   <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">{{index+1}}</td>
                    <td class="p-2 border-r">{{book.title}}</td>
                    <td class="p-2 border-r">{{book.isbn}}</td>
                    <td class="p-2 border-r">{{book.publisher}}</td>
                    <td class="p-2 border-r">{{book.description}}</td>
                    <td>
                        <a @click.prevent="editBook(book.id)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                        <a @click.prevent="removeBook(book.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                    </td>
                </tr>
</template>
<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
name:"tableHome",
props:["book","index"],
methods:{
    ... mapActions(useCounterStore,["deleteBook","getDataById"]),
    removeBook(id){
        this.deleteBook(id)
    },
    editBook(id){
        this.getDataById(id)
        this.$router.push('/formEdit')
    }
}
}
</script>

<style>

</style>