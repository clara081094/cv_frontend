<template>
  <div class="px-7 py-7 flex justify-between">
    <div class="flex items-center" @click="goTo('me')">
      <DotApp />
      <p class="font-semibold text-xl ml-2">
        Nicoll Rider <span class="font-light text-base">Editor</span>
      </p>
    </div>
    <div>close</div>
  </div>
</template>

<script>
import DotApp from "./DotApp.vue";
export default {
  components: { DotApp },
  methods: {
    goTo(payload) {
      this.$router.push({ name: payload });
    },
  },
};
</script>

<style></style>
