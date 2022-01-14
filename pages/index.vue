<template>
  <div class="w-full">
    <div class="lg:w-10/12 lg:mx-auto md:w-10/12 md:mx-auto py-8">
      <ul class="article-card-container lg:flex lg:flex-wrap lg:justify-between md:flex md:flex-wrap md:justify-between">
        <li class="article-card w-11/12 sm:mx-auto mb-10 rounded-2xl overflow-hidden" v-for="b in blogs" :key="b.slug">
          <div class="h-full">
            <nuxt-link :to="b.slug">
              <div class="border-b">
                <img :src="require(`@/assets/img/${b.image}.jpg`)" :alt="b.image" class="w-full h-3/5 rounded-tl-2xl rounded-tr-2xl m-auto" />
              </div>
              <div class="w-10/12 py-4 m-auto">
                <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
                <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
                <Tag>{{ b.category }}</Tag>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
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

<style scoped>
.article-card {
  width:31%;
  background-color: rgb(255, 255, 255);
  border-top: 1px;
}
.article-card-container::after{
  content:"";
  display: block;
  width:33%;
}

li {
  margin: 0 auto 20px auto
}

@media screen and (max-width: 769px) {
  .article-card {
    width:45%;
  }
  .article-card-container::after{
    content:"";
    display: block;
    width:45%;
  }
}

@media screen and (max-width: 641px) {
  .article-card {
    width:90%;
  }
}
</style>