<template>
  <section>
    <div class="border" v-for="b in blogs" :key="b.slug">
      <nuxt-link :to="b.slug">
        <h2 class="text-xl font-bold">{{ b.title }}</h2>
        <time class="">{{ b.date }}</time>
      </nuxt-link>
    </div>
  </section>
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

<style>
</style>
