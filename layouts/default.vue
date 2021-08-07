<template>
  <div>
    <Header />
    <Nuxt class="pt-28" />
    <Footer />
  </div>
</template>

<style>
  html {
    font-family: 'Noto Sans JP', sans-serif;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid rgb(221, 221, 221);
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
    color: rgb(0, 0, 255);
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