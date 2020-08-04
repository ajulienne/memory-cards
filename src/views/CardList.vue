<template>
  <div class="card-list">
    <div class="cards" v-if="ids.length > 0">
      <button @click="prev" :disabled="hasOnlyOneCard">
        <Icon name="chevron-left" />
      </button>
      <router-view />
      <button @click="next" :disabled="hasOnlyOneCard">
        <Icon name="chevron-right" />
      </button>
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
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";
import Icon from "vue-awesome";

export default {
  name: "CardList",
  components: {
    Icon,
  },
  methods: {
    next() {
      const current = this.$route.params.id;
      const indexInIdsOfCurrent = this.ids.indexOf(current);
      if (indexInIdsOfCurrent + 1 === this.ids.length) {
        this.$router.push({
          name: "CardSelector",
          params: { id: this.ids[0] },
        });
      } else {
        this.$router.push({
          name: "CardSelector",
          params: { id: this.ids[indexInIdsOfCurrent + 1] },
        });
      }
    },
    prev() {
      const current = this.$route.params.id;
      const indexInIdsOfCurrent = this.ids.indexOf(current);
      if (indexInIdsOfCurrent === 0) {
        this.$router.push({
          name: "CardSelector",
          params: { id: this.ids[this.ids.length - 1] },
        });
      } else {
        this.$router.push({
          name: "CardSelector",
          params: { id: this.ids[indexInIdsOfCurrent - 1] },
        });
      }
    },
  },
  computed: {
    ids() {
      return this.$store.state.ids;
    },
    hasOnlyOneCard() {
      return this.ids.length <= 1;
    },
  },
  mounted() {
    console.log("mounted");
    this.$router.push({ name: "CardSelector", params: { id: this.ids[0] } });
  },
  updated() {
    if (!this.$route.params.id) {
      this.$router.push({ name: "CardSelector", params: { id: this.ids[0] } });
    }
  },
};
</script>

<style lang="scss">
.card-list {
  height: calc(100% - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
}

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
    opacity: 0.8;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    &:hover:enabled {
      background-color: #42b983;
    }
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.4;
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
