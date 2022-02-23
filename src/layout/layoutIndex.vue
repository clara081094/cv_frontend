<template>
  <HeaderApp></HeaderApp>
  <div class="p-5">
    <router-view />
  </div>
  <FooterApp></FooterApp>
</template>

<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import FooterApp from "./components/footer/FooterApp.vue";

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style></style>
