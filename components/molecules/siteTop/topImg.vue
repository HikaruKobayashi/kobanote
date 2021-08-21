<template>
  <section id="topImg">
    <div class="inner text-center w-3/6 text-white mx-auto my-0 px-0 py-32"></div>
  </section>
</template>

<style lang="sass" scoped>
#topImg
  width: 100%
  padding: 200px 0
  background: url(@/assets/img/main-bg-img.jpeg) no-repeat
  background-size: cover
@media screen and (max-width: 1000px)
  #topImg
    .inner
      width: 700px
@media screen and (max-width: 750px)
  #topImg
    .inner
      width: 500px
@media screen and (max-width : 599px)
  #topImg
    padding: 120px 0 120px 0
  #topImg
    .inner
      width: 300px
</style>