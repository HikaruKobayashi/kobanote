<template>
  <header class="header w-full h-14 table z-10 bg-white">
    <Title />
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 1px 6px #4385bb12;
}
</style>

<script>
import Title from "~/components/atoms/header/title.vue";

export default {
  components: {
    Title,
  },
};
</script>
