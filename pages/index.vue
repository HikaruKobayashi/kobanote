<template>
  <div class="w-full h-full">
    <div class="bg-top-img bg-cover w-full h-screen">
      <div class="text-center w-3/6 mx-auto my-0 px-0 py-64">
        <!-- <h1 class="font-bold text-6xl inline-block">Title</h1> -->
      </div>
    </div>
    <div class="w-9/12 mx-auto">
      <ul class="flex flex-wrap">
        <li class="w-1/2 odd:mt-20 even:mt-8 mx-auto text-center p-8" v-for="b in blogs" :key="b.slug">
          <nuxt-link :to="b.slug">
            <h2 class="text-xl font-bold">{{ b.title }}</h2>
            <time class="">{{ b.date }}</time>
            <p>{{ b.description }}</p>
          </nuxt-link>
      </li>
      </ul>
    </div>
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

