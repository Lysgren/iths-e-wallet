<template>
  <div class="cards">
    <Top v-bind:text="{ header: 'E-wallet', paragraph: 'Active card' }"/>
    <div class="center">
      <Card :card="currentCard" />
    </div>
    <div class="div-links">
      <router-link class="link" to="/Edit">Edit card</router-link>
      <button v-on:click="removeCard" class="link">Remove card</button>
    </div>
    <CardStack />
  </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardStack from '@/components/CardStack'

export default {
  computed: {
    currentCard() {
      return this.$root.cards.find(card => card.id == this.$root.activeCardId)
    }
  },
  methods: {
    removeCard() {
      this.$root.cards.forEach((card, index) => {
        if ( card.id == this.$root.activeCardId && this.$root.cards.length > 1 ) {
          this.$root.cards.splice(index, 1)
          this.$root.activeCardId = this.$root.cards[0].id
        }
      })
    }
  },

  components: { Top, Card, CardStack }
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.center {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.div-links {
  text-align: center;
  margin-top: 42px;
  margin-bottom: 10px;
}

.link {
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
}

.link:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

</style>