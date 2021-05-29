<template>
  <div>
    <div v-if="!articles.length">
      <p class="text-center p-4 lg:p-8">検索結果は0件です</p>
    </div>
    <div class="w-full lg:w-9/12 h-full mx-auto" v-if="articles.length">
      <p class="text-center p-4 lg:p-8">{{ articles.length }}件の結果</p>
      <ul class="w-full mx-auto flex flex-wrap justify-center pb-12">
        <li class="w-11/12 mt-8 p-4 lg:p-8 border-2 rounded-2xl border-gray-100 shadow-md bg-white" v-for="b in articles" :key="b.slug">
          <nuxt-link :to="b.slug">
            <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
            <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
            <Tag>{{ b.category }}</Tag>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    '$route.query.q': {
      handler(newVal) {
        this.query = newVal
      },
      immediate: true
    },
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }
      this.articles = await this.$content('blogs')
        .only(['title', 'category', 'description', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(50)
        .search(query)
        .fetch()
    }
  }
}
</script>
