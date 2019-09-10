<template>
  <div class="NasaImage col-12 mt-3">
    <h3>NASA APOD</h3>
    <!-- <button class="btn btn-success" @click="getApod()">Get APOD</button> -->
    <h5>Date: {{apodPic.date}}</h5>
    <img :src="apodPic.url" class="mt-1 mb-1" />
    <p class="mt-2">{{apodPic.explanation}}</p>
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