<template>
  <div class="card-list">
    <h1>Cards</h1>
    <div class="cards" v-if="cards.length > 0">
      <button @click="prev"><Icon name="chevron-left" /></button>
      <Card :card="cards[currentIndex]" v-if="cards[currentIndex]" />
      <button @click="next"><Icon name="chevron-right" /></button>
    </div>
    <div v-else>
      <p>
        You don't have any card yet. Start by
        <router-link to="/add">adding one</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";

export default {
  name: "CardList",
  components: {
    Card,
    Icon,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      this.currentIndex++;
      if (this.currentIndex === this.cards.length) {
        this.currentIndex = 0;
      }
    },
    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.cards.length - 1;
      }
    },
  },
  computed: {
    cards() {
      const cards = shuffle(this.$store.state.cards);
      return cards;
    },
  },
  created() {
    this.$store.dispatch("get");
  },
};

function shuffle(a) {
  const arr = a.slice();
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1px 1px;
  grid-template-areas: "prev card next";
  width: 700px;
  margin: auto;

  & > button {
    width: 40px;
    margin: 0 20px;
    box-sizing: border-box;
    border: none;
    background-color: darken(#2c3e50, 5);
    border-radius: 10px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #42b983;
    }
  }

  &:first-child {
    grid-area: prev;
  }

  &:nth-child(2) {
    grid-area: card;
  }

  &:last-child {
    grid-area: next;
  }
}
</style>
