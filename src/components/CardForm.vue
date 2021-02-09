<template>
  <div class="row">
    <div class="card">
      <Card :card="card"/>
    </div>

  <form v-on:submit.prevent="onSubmit">
    <label>Card number</label>
    <input type="text" v-model="card.number" placeholder="XXXX XXXX XXXX XXXX" maxlength="16" required>

    <label>Cardholder name</label>
    <input type="text" v-model="card.holder" placeholder="Firstname Lastname" maxlength="50" required>

    <div class="date">

      <div>
        <label>Month</label>
        <select v-model="card.month">
          <option value="01">Januari</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <h1></h1>

      <div>
        <label>Year</label>
        <select v-model="card.year">
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
        </select>
      </div>
    </div>

    <label>CCV</label>
    <input type="text" v-model="card.ccv" placeholder="1234" maxlength="4">
    
    <label>Vendor</label>
    <select v-model="card.vendor">
      <option value="bitcoin">Bitcoin</option>
      <option value="ninja">Ninja bank</option>
      <option value="blockchain">Block chain inc</option>
      <option value="evil">Evil corp</option>
    </select>

    <button v-on:click="send">{{ this.text }} card</button>
  </form>

  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  data() { return {
    show: true,
    card: {
      id: Date.now().toString(),
      number: '',
      holder: '',
      vendor: 'blockchain',
      month: '01',
      year: '21',
      ccv: ''
    }
  }},

  methods: {
    send() {
      if (this.card.number.length == 16 && this.card.holder != '' && this.card.ccv != '' && this.card.id != this.$root.activeCardId) {
        this.$root.cards.push(this.card);
        this.$router.push({ path: "/" });
      }

      this.$root.cards.forEach((rootCard, index) => {
        if ( this.card.id == rootCard.id ) {
          this.$root.cards[index] == this.card
          this.$router.push({ path: "/" });
        }
      })
    }
  },

  created() {
    if ( this.workingCard ) {
      this.card = this.workingCard
    } 
  },

  props: {
    workingCard: {
      type: Object,
    },
    text: {
      type: String,
      required: true
    }
  },

  components: { Card }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.date {
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
}

.date div {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.date h1{
  width: 20px;
}

.date div select {
  width: 100%;
  padding: 12px 0 12px 10px;
}

.distance {
  margin-left: 6px;
  margin-right: 6px;
}

.row {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 25px 20% 10% 20%;
  width: 60%;
}

@media screen and (max-width: 992px) {
  .row {
    flex-direction: column;
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Courier New";
  width: 25rem;
}

label {
  text-align: left;
  margin: 15px 0 2px 5px;
  font-size: 16px;
}

input {
  position: relative;
  padding: 12px 0 12px 15px;
  font-size: 16px;
  border-width: 2px;
  border-color: #CCCCCC;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 8px;
  outline: none;
}

select {
  padding: 12px 0 12px 15px;
  font-size: 16px;
  border-width: 2px;
  border-color: #CCCCCC;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  outline: none;
}


select select:active, select select:focus {
	outline: none;
	box-shadow: none;
}

select:after {
	content: "";
	position: absolute;
	top: 50%;
	right: 8px;
	width: 0;
	height: 0;
	margin-top: -2px;
	border-top: 5px solid #aaa;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
}

button {
  width: 100%;
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 32px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
}

button:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

.card {
  margin-top: 3%;
}

</style>