<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/molecules/common/header.vue'
import Footer from '~/components/molecules/common/footer.vue'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
  body {
    background-color: #EBECF0;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 20px;
  }
  .nuxt-content p {
    line-height: 2.0;
    margin-bottom: 20px;
  }
  .nuxt-content a {
    text-decoration: underline;
    color: rgb(0, 68, 204);
  }
  .nuxt-content li {
    list-style: inside;
  }
  .nuxt-content blockquote {
    border-left: 3px solid rgb(221,221,221);
    color: rgb(119,119,119);
    padding: 1px;
  }
  .nuxt-content blockquote > p {
    margin-left: 15px;
    margin-top: 20px;
  }
  .line-numbers {
    border-radius: 6px;
  }
</style>