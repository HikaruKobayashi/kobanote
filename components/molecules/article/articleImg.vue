<template>
  <section id="articleImg">
    <div class="inner text-center w-3/6 text-white mx-auto my-0 px-0 py-32">
      <h1 class="text-2xl lg:text-4xl font-bold">{{title}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  },
}
</script>

<style lang="sass" scoped>
#articleImg
  width: 100%
  position: relative
  padding: 200px 0
  background: url(@/assets/img/main-bg-img.jpeg) no-repeat
  background-size: cover
  &::before
    background-color: rgba(0,0,0,0.4)
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    content: ''
  > div
    > h1
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      -webkit-transform: translate(-50%, -50%)
      -ms-transform: translate(-50%, -50%)
      z-index:1
@media screen and (max-width: 1000px)
  #articleImg
    .inner
      width: 700px
@media screen and (max-width: 750px)
  #articleImg
    .inner
      width: 500px
@media screen and (max-width : 599px)
  #articleImg
    padding: 120px 0 120px 0
  #articleImg
    .inner
      width: 300px
</style>