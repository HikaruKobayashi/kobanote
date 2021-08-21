<template class="w-full h-full">
  <div>
    <ArticleImg :title=blogs.title />
    <article class="w-11/12 lg:w-5/12 mx-auto p-4">
      <!-- <Profile /> -->
      <nuxt-content :document="blogs" />
      <Tag>{{ blogs.category }}</Tag>
    </article>
  </div>
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
