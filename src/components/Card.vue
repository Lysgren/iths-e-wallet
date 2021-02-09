<template>
  <div :class="`card ${getCardVendorClass}`">
    <div class="chip"><img :src="renderChip" alt="Credit card chip"/></div>
    <div class="logo"><img :src="renderLogo" alt="Company logo"/></div>
    <div class="number">
      <h2>{{ styledNumber }}</h2>
    </div>
    <div class="name">
      <h3>Cardholder name</h3>
      <p>{{ card.holder }}</p>
    </div>
    <div class="date">
      <p>Valid thru<p>
      <h3>{{ card.month }} / {{ card.year }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
  },

  computed: {
    styledNumber() {
      let newNumber = ''
      this.card.number.split('').forEach((num, index) => { 
        newNumber += num
        if ( ( index + 1 ) % 4 == 0) {
          newNumber += ' '
        }
      })
      return newNumber
    },

    getCardVendorClass() {
      return `vendor-${this.card.vendor}`
    },
    renderChip() {
      return (this.card.vendor == 'bitcoin' || this.card.vendor == 'blockchain') ? require("@/assets/chip-dark.svg") : require("@/assets/chip-light.svg")
    },
    renderLogo() {
      return require(`@/assets/vendor-${this.card.vendor}.svg`)
    }
  }}

</script>

<style scoped>

.vendor-bitcoin { background: linear-gradient(125deg, var(--c1, #ffac13), var(--c2, #fabc4a) 75%, var(--c1, #ffac13)) var(--x, 0)/ 200%; transition: 0.5s; color: #42300d; text-shadow: 0px 0px 1px #ffffff;}
.vendor-ninja { background: linear-gradient(125deg, var(--c1, #121836), var(--c2, #3e487a) 75%, var(--c1, #121836)) var(--x, 0)/ 200%; transition: 0.5s; color: #fff; text-shadow: 0px 0px 3px #000000; }
.vendor-evil { background: linear-gradient(125deg, var(--c1, #e04d72), var(--c2, #dd2e5a) 75%, var(--c1, #e04d72)) var(--x, 0)/ 200%; transition: 0.5s; color: #fff; text-shadow: 0px 0px 3px #000000;}
.vendor-blockchain { background: linear-gradient(125deg, var(--c1, #4b5aa7), var(--c2, #7b89ce) 75%, var(--c1, #4b5aa7)) var(--x, 0)/ 200%; transition: 0.5s; color: #fff; text-shadow: 0px 0px 3px #000000;}

.vendor-bitcoin:hover { --x: 45%; --c1: #fabc4a; --c2: #ffac13; }
.vendor-ninja:hover { --x: 45%; --c1: #2c3350; --c2: #090e25; }
.vendor-evil:hover { --x: 45%; --c1: #e04d72; --c2: #dd0f43; }
.vendor-blockchain:hover { --x: 45%; --c1: #7b89ce; --c2: #4b5aa7; }

.chip { grid-area: chip; margin-bottom: 40px; }
.logo { grid-area: img; margin-bottom: 40px; }
.number { grid-area: number; text-align: center; min-height: 70px;}
.name { grid-area: name; text-align: left; margin-left: 20px; margin-top: 15px; word-wrap: break-word; width: 100%;}
.date { grid-area: date; text-align: right; margin-right: 20px; margin-top: 15px; }

.chip img {
  margin-right: 65%;
}

.logo img {
  margin-top: 9%;
  margin-left: 63%
}

div {
  color: var(--text-color);
  background-color: var(--bg-color);
  height: var(--height);
}

.card {
  display: grid;
  grid-template-areas:
  'chip chip img img'
  'number number number number'
  'name name name date';
  grid-gap: 0px;
  padding: 30px 20px 20px 20px;
  font-family: "Courier New";
  border: 0px;
  border-radius: 20px;
  width: calc(145px + 20em);
  height: calc(60px + 15em);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card:hover { cursor: pointer; }

</style>