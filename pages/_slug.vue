<template class="w-full h-full">
  <article class="w-11/12 lg:w-5/12 mx-auto p-8">
    <h1 class="text-2xl lg:text-4xl font-bold text-center p-8">{{ blogs.title }}</h1>
    <Profile />
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
