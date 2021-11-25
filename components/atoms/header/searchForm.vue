<template>
  <div>
    <v-form class="w-44 px-4 mx-auto" @submit.prevent="submit">
      <v-text-field
        ref="searchForm"
        v-model="query"
        placeholder='Search'
        prepend-inner-icon="mdi-magnify"
        Dense
      />
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    validQuery() {
      return !!this.query &&
        !/^\s+$/.test(this.query) &&
        this.$route.query.q !== this.query
    }
  },
  methods: {
    submit() {
      if (this.validQuery) {
        this.$router.push({ path: '/search', query: { q: this.query } })
        this.query = ''
        this.$refs.searchForm.blur()
      }
    }
  }
}
</script>
