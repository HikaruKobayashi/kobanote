<template>
  <img :src="`/img/${name}`" alt="" class="w-10/12 m-auto" />
</template>

<script>
export default {
  props: ["name"],
};
</script>
