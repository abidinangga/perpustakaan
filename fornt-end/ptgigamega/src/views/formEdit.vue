<template>
 <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <dataEdit
    :dataEdit="dataEdit"
    >
    </dataEdit>
  </div>
</div>
</template>

<script>
import dataEdit from "@/components/dataEdit.vue";
import { mapActions,mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
name:"formEdit",
components:{
    dataEdit
},
methods:{
  ... mapActions(useCounterStore,["getDataById"]),
},
computed:{
...mapState(useCounterStore,["dataEdit"])
},
}
</script>

<style>

</style>