<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img src="http://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png" />
          <img alt="Vue logo" src="../assets/logo.png" />ues
        </h1>
      </div>
    </div>
    <div class="row">
      <Search />
    </div>
    <div class="row">
      <NasaImage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NasaImage from "../components/NasaImage";
import Search from "../components/Search";

export default {
  name: "home",
  components: {
    NasaImage,
    Search
  }
};
</script>

<style scoped>
img {
  height: 100px;
}
</style>
