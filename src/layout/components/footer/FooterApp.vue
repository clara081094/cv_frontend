<template>

  <div class="p-2 md:p-2 lg:p-2 xl:p-2">
    <div class="h-0.5 bg-gray-300 mt-10"></div>
    <div class=" sm:flex sm:justify-between px-4">
      <div class="mt-6">
        <p class="text-lg font-semibold">Phone</p>
        <p class="text-base font-light">213-321-213</p>
      </div>
      <div class="mt-6">
        <p class="text-lg font-semibold">Email</p>
        <p class="text-base font-light">info.bae@gmail.com</p>
      </div>
      <div class="mt-6">
        <p class="text-lg font-semibold">Follow Me</p>
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        <font-awesome-icon class="ml-2" :icon="['fab', 'twitter']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
