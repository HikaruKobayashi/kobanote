<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/molecules/common/header.vue";
import Footer from "~/components/molecules/common/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@charset "utf-8";
body {
  font-family: "ヒラギノ角ゴシック", "Hiragino Sans", sans-serif;
  margin: 0;
  padding: 0;
  color: #292929;
}
.nuxt-content {
  & h2 {
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  & h3 {
    font-weight: bold;
    font-size: 20px;
  }
  & p {
    line-height: 2;
    margin-bottom: 30px;
  }
  & a {
    text-decoration: underline;
    color: rgb(0, 68, 204);
  }
  & li {
    list-style: inside;
  }
  & blockquote {
    border-left: 3px solid rgb(221, 221, 221);
    color: rgb(119, 119, 119);
    padding: 1px;
    > p {
      margin-left: 15px;
      margin-top: 20px;
    }
  }
}
.line-numbers {
  border-radius: 6px;
}
</style>
