<template>
  <footer class="w-full text-center border-t-2 py-4">
    <p class="copyright" v-html="copy + space + year + space + name"></p>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      copy: "&copy;",
      space: "&nbsp;",
      year: "",
      name: "Kobayashi"
    };
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
  }
};
</script>
