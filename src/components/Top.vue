<template>
  <div>
      <h1>{{ text.header }}</h1>
      <p>{{ text.paragraph }}</p>
  </div>
</template>

<script>
export default {
 props: {
   text: {
     type: Object,
     required: true
   }
 }
}
</script>

<style scoped>
</style>