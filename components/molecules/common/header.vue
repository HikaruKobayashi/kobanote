<template>
  <header class="w-full h-10 table z-10">
    <div class="table-cell align-middle">
      <ul class="flex flex-wrap justify-between">
        <li>
          <Title />
        </li>
        <li>
          <SearchForm />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Title from '~/components/atoms/header/title.vue'
import SearchForm from '~/components/atoms/header/searchForm.vue'

export default {
  components: {
    Title,
    SearchForm,
  },
}
</script>