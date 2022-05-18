<script>
import navbar from '@/components/navbar.vue'
import { mapActions } from "pinia";
import { useCounterStore} from "@/stores/counter.js";
export default{
    name :"app",
    components: {
    navbar
  },
  methods:{
    ...mapActions(useCounterStore, ["isloginAction"]),
  },
  created() {
    if (localStorage.getItem("token")) {
      this.isloginAction("true");
    }
  },
}
</script>

<template>
  <div>
    <div>
      <navbar></navbar>
    </div>
  <router-view />
</div>
</template>

<style>
</style>
