<template>
  <div>
    <div v-for="b in blogs" :key="b.slug">
      <nuxt-link :to="b.slug">{{ b.title }}</nuxt-link>
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

<style>
</style>
