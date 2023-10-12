<template>
  <div class="sm:flex sm:py-36 md:flex md:py-24 lg:flex lg:py-15 xl:flex xl:py-10">
    <div class="flex items-center sm:order-last sm:w-1/2 sm:m-2 md:m-2 lg:m-3">
      <div class="px-3">
        <p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
          Hello
        </p>
        <p class="mt-3 mb-12 sm:mt-6 md:mt-8 lg:mt-10 text-xl">
          I'm a backend developer with a talent for turning coffee into code. 
        </p>
        <div class="flex justify-between mt-4 sm:mt-6 md:mt-8">
          <router-link
            to="/resume"
            style="background-color: #CFC982;"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full font-semibold flex items-center justify-center"
          >
            Resume
          </router-link>
          <router-link
            to="/projects"
            style="background-color: #CF9D82;"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full font-semibold flex items-center justify-center"
          >
            Projects
          </router-link>
          <router-link
            to="/contact"
            style="background-color: #82AECF;"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full font-semibold flex items-center justify-center"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="mt-5 flex justify-center items-center sm:w-1/2 sm:m-1 md:m-2 lg:m-8"
    >
      <img
        class="rounded-full w-full"
        :src="require('@/assets/my_photo.jpg')"
        alt="me photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
};
</script>

<style></style>
