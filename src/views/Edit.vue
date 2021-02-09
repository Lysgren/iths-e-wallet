<template>
  <div class="home">
    <Top :text="{ header: 'Edit a bank card', paragraph: 'Edit card' }"/>
    <CardForm :text="'Edit'" :workingCard="currentCard" />
  </div>
</template>

<script>
import Top from '@/components/Top'
import CardForm from '@/components/CardForm'

export default {
  computed: {
    currentCard() {
      return this.$root.cards.find(card => card.id == this.$root.activeCardId)
    }
  },

  components: { Top, CardForm }
}
</script>

<style scoped>
</style>