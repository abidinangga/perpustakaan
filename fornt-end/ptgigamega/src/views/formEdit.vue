<template>
  <div>
    <div v-if="!dataEdit">Loading....</div>
    <div
      class="min-h-screen p-6 bg-gray-100 flex items-center justify-center bg-gradient-to-tr from-sky-300 to-sky-500"
    >
      <div class="bg-gradient-to-tr from-sky-300 to-sky-500 container max-w-screen-lg mx-auto">
        <dataEdit :dataEdit="dataEdit"> </dataEdit>
      </div>
    </div>
  </div>
</template>

<script>
import dataEdit from "@/components/dataEdit.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "formEdit",
  components: {
    dataEdit,
  },
  methods: {
    ...mapActions(useCounterStore, ["getDataById"]),
  },
  computed: {
    ...mapState(useCounterStore, ["dataEdit"]),
  },
};
</script>

<style></style>
