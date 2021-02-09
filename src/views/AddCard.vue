<template>
  <div class="home">
    <Top :text="{ header: 'Add a new bank card', paragraph: 'New card' }"/>
    <CardForm :text="'Add'" />
  </div>
</template>

<script>
import Top from '@/components/Top'
import CardForm from '@/components/CardForm'

export default {
  components: { Top, CardForm }
}
</script>

<style scoped>
</style>