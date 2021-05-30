<template>
  <div class="w-full lg:w-9/12 h-full mx-auto">
    <ul class="w-full mx-auto flex flex-wrap justify-center pb-12">
      <li class="w-11/12 mt-8 p-4 lg:p-8 border-2 rounded-md border-gray-100 shadow-md bg-white" v-for="b in blogs" :key="b.slug">
        <nuxt-link :to="b.slug">
          <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
          <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
          <Tag>{{ b.category }}</Tag>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const query = await $content('blogs' || 'index').sortBy('createdAt', 'desc')
    const blogs = await query.fetch()
    return { blogs }
  },
})
</script>
