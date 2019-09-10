<template>
  <div class="NasaImage col-12 mt-5">
    <h3>NASA APOD</h3>
    <button class="btn btn-success" @click="getApod()">Get APOD</button>
  </div>
</template>


<script>
export default {
  name: "NasaImage",
  data() {
    return {};
  },
  computed: {},
  methods: {
    getApod() {}
  },
  components: {}
};
</script>


<style scoped>
</style>