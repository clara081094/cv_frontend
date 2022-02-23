<template>
  <HeaderApp></HeaderApp>
  <div class=" flex justify-center">
    <div class="w-5/6 sm:w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2 2xl:w-5/12">
      <router-view />
    </div>
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
