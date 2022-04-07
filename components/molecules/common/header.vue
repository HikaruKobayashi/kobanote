<template>
  <header class="w-full h-14 table z-10 border-b-2 fixed bg-white">
    <Title />
  </header>
</template>

<script>
import Title from "~/components/atoms/header/title.vue";

export default {
  name: "header",
  components: {
    Title
  }
};
</script>
