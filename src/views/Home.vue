<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />

    <NasaImage />
  </div>
</template>

<script>
// @ is an alias to /src
import NasaImage from "../components/NasaImage";
export default {
  name: "home",
  components: {
    NasaImage
  }
};
</script>
