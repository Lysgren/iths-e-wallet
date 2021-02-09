<template>
  <div>
    <article class="cardStack">
      <Card 
        v-for="item in cardStack"
        :key="item.id" 
        :card="item"
        @click.native="changeId(item.id)"
      />
    </article>
    <div class="distanceOne"></div>
    <router-link class="link" to="/AddCard">Add card</router-link>
    <div class="distanceTwo"></div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  methods: {
    changeId(id) {
      this.$root.activeCardId = id
    }
  },
  computed: {
    cardStack() {
      return this.$root.cards.filter(card => card.id != this.$root.activeCardId)
    }
  },
  components: { Card }
}
</script>

<style scoped>

.cardStack {
  display: flex;
  justify-content: center;
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}

.cardstackcards {
  margin-top: 5rem;
}

.link {
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 12em;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
}

.link:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

.distanceOne { margin-bottom: 22em; }
.distanceTwo { margin-bottom: 4em; }

</style>