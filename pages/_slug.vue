<template class="w-full h-full">
  <div>
    <article class="w-11/12 lg:w-4/12 mx-auto p-4">
      <h1 class="font-bold text-4xl pt-6 pb-2">{{ blogs.title }}</h1>
      <p class="text-sm">{{ blogs.date }}</p>
      <nuxt-content :document="blogs" />
    </article>
  </div>
</template>

<script>
export default {
  name: "Slug",
  async asyncData({ $content, params }) {
    const blogs = await $content("blogs", params.slug || "index").fetch();
    return { blogs };
  },
};
</script>
