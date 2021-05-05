<template class="w-full h-screen">
  <div class="w-9/12 mx-auto">
    <ul class="flex">
      <li class="w-1/3 mt-8 mx-auto" v-for="b in blogs" :key="b.slug">
        <nuxt-link :to="b.slug">
          <h2 class="text-xl font-bold">{{ b.title }}</h2>
          <time class="">{{ b.date }}</time>
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

