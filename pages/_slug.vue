<template class="w-full h-screen">
  <article class="w-9/12 mx-auto">
    <h1 class="text-6xl text-center p-8">{{ blogs.title }}</h1>
    <nuxt-content class="w-4/5 mx-auto" :document="blogs" />
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
