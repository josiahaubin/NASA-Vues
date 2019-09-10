<template>
  <div class="Search col-12 mt-3">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="YYYY-MM-DD" v-model="query" />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          type="button"
          id="button-addon2"
          @click="apodSearch()"
        >Search</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    apodSearch() {
      this.$store.dispatch("requestApod", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
button {
  background-color: #0066b2;
  border-color: #ec1c24;
}
button:hover {
  background-color: #ec1c24;
  border-color: #0066b2;
}
</style>