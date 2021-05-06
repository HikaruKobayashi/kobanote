<template>
  <div class="w-full h-full">
    <div class="bg-top-img bg-cover w-4/6 h-64 m-auto my-10 lg:my-20" />
    <ul class="w-11/12 lg:w-9/12 mx-auto flex flex-wrap pb-12">
      <li class="w-1/2 mt-8 mx-auto text-center p-2 md:p-4 lg:p-8" v-for="b in blogs" :key="b.slug">
        <nuxt-link :to="b.slug">
          <h2 class="text-3xl font-semibold">{{ b.title }}</h2>
          <time>{{ b.date }}</time>
          <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const query = await $content('blogs' || 'index').limit(10)
    const blogs = await query.fetch()
    return { blogs }
  },
})
</script>
