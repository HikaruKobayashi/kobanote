<template>
  <footer class="w-full text-center py-4 footer">
    <p
      class="copyright text-white"
      v-html="copy + space + year + space + name"
    ></p>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      copy: "&copy;",
      space: "&nbsp;",
      year: "",
      name: "Kobayashi",
    };
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
  },
};
</script>

<style scoped>
.footer {
  background-color: #333;
}
</style>
