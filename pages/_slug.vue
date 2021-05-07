<template class="w-full h-full">
  <article class="w-11/12 lg:w-9/12 mx-auto p-8">
    <h1 class="text-4xl lg:text-6xl text-center p-8">{{ blogs.title }}</h1>
    <nuxt-content :document="blogs" />
    <Tag>{{ blogs.category }}</Tag>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content, params }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch()
    return { blogs }
  },
})
</script>
