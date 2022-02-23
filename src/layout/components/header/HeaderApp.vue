<template>
  <div class="px-7 py-7 flex justify-between">
    <router-link to="/me" class="flex items-center">
      <DotApp />
      <p class="font-semibold text-xl ml-2">
        Nicoll Rider <span class="font-light text-base">Editor</span>
      </p>
    </router-link>
    <div class="static flex sm:hidden">
      <button @click="switchMenu">
        <font-awesome-icon class="ml-2 text-2xl" :icon="['fas', 'bars']" />
      </button>
      <div
        :class="{ hidden: isClosed }"
        class="absolute flex items-center justify-center h-screen w-screen bg-white top-0 left-0"
      >
        <button class="absolute top-7 right-11" @click="switchMenu">
          <font-awesome-icon class="ml-2 text-2xl" :icon="['fas', 'xmark']" />
        </button>
        <div class="flex flex-col">
          <button
            @click="goTo('resume')"
            class="hover:text-amber-700 duration-200 text-2xl font-light"
          >
            Resume
          </button>
          <button
            @click="goTo('projects')"
            class="hover:text-amber-700 duration-200 text-2xl font-light mt-5"
          >
            Projects
          </button>
          <button
            @click="goTo('contact')"
            class="hover:text-amber-700 duration-200 text-2xl font-light mt-5"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex justify-between items-center">
      <router-link
        to="/resume"
        class="hover:text-amber-700 duration-200 font-light"
        >Resume</router-link
      >
      <div class="bg-black w-0.5 h-5 mx-3"></div>
      <router-link
        to="/projects"
        class="hover:text-amber-700 duration-200 font-light"
        >Projects</router-link
      >
      <div class="bg-black w-0.5 h-5 mx-3"></div>
      <router-link
        to="/contact"
        class="hover:text-amber-700 duration-200 font-light"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script>
import DotApp from "./DotApp.vue";
export default {
  components: { DotApp },
  methods: {
    goTo(payload) {
      this.isClosed = true;
      this.$router.push({ name: payload });
    },
    switchMenu() {
      this.isClosed = !this.isClosed;
    },
  },
  data() {
    return {
      isClosed: true,
    };
  },
};
</script>

<style></style>
