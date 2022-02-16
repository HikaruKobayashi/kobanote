<template>
  <div class="w-full">
    <div class="w-11/12 lg:w-4/12 mx-auto p-4">
      <div v-for="b in blogs" :key="b.slug">
        <nuxt-link :to="b.slug">
          <div class="py-4">
            <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
            <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
            <Tag>{{ b.category }}</Tag>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from '~/components/atoms/common/tag.vue'

export default Vue.extend({
  components: {
    Tag,
  },
  async asyncData ({ $content }) {
    const query = await $content('blogs' || 'index').sortBy('createdAt', 'desc')
    const blogs = await query.fetch()
    const tags = await query.only(['category']).fetch()
    return { blogs, tags }
  },
})
</script>
