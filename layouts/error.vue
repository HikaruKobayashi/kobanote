<template>
  <div id="error" class="w-full h-screen flex flex-col items-center justify-center">
    <div class="text-center">
      <p class="text-3xl mb-4">{{ status }}</p>
      <nuxt-link to="/" class="bg-gray-300 rounded-2xl px-5 py-2">Back to page top</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    status() {
      return this.error.statusCode;
    }
  }
};
</script>