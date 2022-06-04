<template>
  <div class="w-full">
    <div class="w-11/12 lg:w-4/12 mx-auto p-4">
      <div
        class="bg-white rounded-md py-6 px-5 mb-4 post-container"
        v-for="b in blogs"
        :key="b.slug"
      >
        <nuxt-link :to="b.slug">
          <h2 class="text-2xl font-semibold">{{ b.title }}</h2>
          <p class="text-xs md:text-sm lg:text-base">{{ b.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  async asyncData({ $content }) {
    const query = await $content("blogs" || "index").sortBy(
        "createdAt",
        "desc"
      ),
      blogs = await query.fetch(),
      tags = await query.only(["category"]).fetch();
    return { blogs, tags };
  },
};
</script>

<style scoped>
.post-container {
  position: relative;
  box-shadow: 0 2px 4px #4385bb12;
}
.post-container::after {
  position: absolute;
  content: "→";
  bottom: 0;
  right: 0;
  font-size: 18px;
  margin-right: 15px;
}
</style>
