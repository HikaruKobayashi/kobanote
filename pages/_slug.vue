<template class="w-full h-full">
  <div>
    <article class="w-11/12 lg:w-5/12 mx-auto p-4">
      <h1 class="font-bold text-4xl pt-6 pb-2">{{ blogs.title }}</h1>
      <p class="text-sm">{{ blogs.date }}</p>
      <nuxt-content :document="blogs" />
      <Tag>{{ blogs.category }}</Tag>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleImg from '~/components/molecules/article/articleImg.vue'
import Tag from '~/components/atoms/common/tag.vue'

export default Vue.extend({
  components: {
    ArticleImg,
    Tag,
  },
  async asyncData ({ $content, params }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch()
    return { blogs }
  },
})
</script>
