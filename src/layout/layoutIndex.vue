<template>
  <HeaderApp></HeaderApp>
  <div class="p-5">
    <router-view />
  </div>
</template>

<script>
import HeaderApp from "./components/header/HeaderApp.vue";
export default {
  components: {
    HeaderApp,
  },
};
</script>

<style></style>
