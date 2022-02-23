<template>
  <div>
    <p class="text-5xl font-semibold">Hello</p>
    <p class="mt-3 text-xl font-semibold">A Bit About Me</p>
    <p class="font-light mt-1">
      I'm a paragraph. Click here to add your own text and edit me. I’m a great
      place for you to tell a story and let your users know a little more about
      you.
    </p>
    <div class="flex justify-between mt-4">
      <button
        class="h-24 w-24 rounded-full bg-amber-500 border border-black font-semibold"
      >
        Resume
      </button>
      <button
        class="h-24 w-24 rounded-full bg-red-500 border border-black font-semibold"
      >
        Projects
      </button>
      <button
        class="h-24 w-24 rounded-full bg-sky-300 border border-black font-semibold"
      >
        Contact
      </button>
    </div>
    <div class="mt-5 flex justify-center">
      <img
        class="rounded-full"
        src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_280,h_280,al_c,q_80,usm_0.66_1.00_0.01/gettyimages-1284121212-2048x2048_edited_.webp"
        alt="me photo"
      />
    </div>
    <div class="h-0.5 bg-gray-300 mt-10"></div>
    <div class="mt-5">
      <p class="text-lg font-semibold">Phone</p>
      <p class="text-base font-light">213-321-213</p>
    </div>
    <div class="mt-5">
      <p class="text-lg font-semibold">Email</p>
      <p class="text-base font-light">info.bae@gmail.com</p>
    </div>
    <div class="mt-5">
      <p class="text-lg font-semibold">Follow Me</p>
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      <font-awesome-icon class="ml-2" :icon="['fab', 'twitter']" />
    </div>
    <div class="mt-5">
      <p class="text-xs font-light">© 2023 By Nicol Rider.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
