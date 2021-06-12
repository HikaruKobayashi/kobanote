<template>
  <div class="w-full lg:w-9/12 h-full lg:mx-auto lg:flex">
    <div>
      <ul class="w-full pb-12 mx-auto flex flex-wrap justify-center lg:justify-between">
        <li class="w-11/12 lg:w-8/12 p-4" v-for="b in blogs" :key="b.slug">
          <nuxt-link :to="b.slug">
            <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
            <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
            <Tag>{{ b.category }}</Tag>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="w-full pl-4">
      <p class="py-2">All Topics</p>
      <ul class="w-full">
        <li class="border border-gray-500 inline-block p-2 mr-2 rounded" v-for="t in tags" :key="t.slug">
          <p class="text-sm text-gray-500">{{ t.category }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const query = await $content('blogs' || 'index').sortBy('createdAt', 'desc')
    const blogs = await query.fetch()
    const tags = await query.only(['category']).fetch()
    return { blogs, tags }
  },
})
</script>
