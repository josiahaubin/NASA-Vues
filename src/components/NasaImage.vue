<template>
  <div class="NasaImage col-12 mt-5">
    <h3>NASA APOD</h3>
    <!-- <button class="btn btn-success" @click="getApod()">Get APOD</button> -->
    <img :src="apodPic.url" class="mt-1" />
  </div>
</template>


<script>
export default {
  name: "NasaImage",
  data() {
    return {};
  },
  mounted() {
    this.getApod();
  },
  computed: {
    apodPic() {
      return this.$store.state.apod;
    }
  },
  methods: {
    getApod() {
      this.$store.dispatch("getApod");
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>