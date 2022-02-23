<template>
  <div class="sm:flex sm:py-10">
    <div class="flex items-center sm:order-last sm:w-1/2 sm:m-1 md:m-2 lg:m-3">
      <div class="">
        <p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
          Hello
        </p>
        <p class="mt-3 sm:mt-6 md:mt-8 text-xl font-semibold">A Bit About Me</p>
        <p class="font-light mt-1">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <div class="flex justify-between mt-4 sm:mt-6 md:mt-8">
          <router-link
            to="/resume"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full bg-amber-500 hover:bg-white duration-300 border border-black font-semibold flex items-center justify-center"
          >
            Resume
          </router-link>
          <router-link
            to="/projects"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full bg-red-500 hover:bg-white duration-300 border border-black font-semibold flex items-center justify-center"
          >
            Projects
          </router-link>
          <router-link
            to="/contact"
            class="h-24 w-24 lg:h-28 lg:w-28 rounded-full bg-sky-300 hover:bg-white duration-300 border border-black font-semibold flex items-center justify-center"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="mt-5 flex justify-center items-center sm:w-1/2 sm:m-1 md:m-2 lg:m-3"
    >
      <img
        class="rounded-full w-full"
        src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_280,h_280,al_c,q_80,usm_0.66_1.00_0.01/gettyimages-1284121212-2048x2048_edited_.webp"
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
