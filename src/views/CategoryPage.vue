<template>
  <div class="category-view" v-if="category">
    <div class="head">
      <div class="title">
        <h1>{{category.name}}</h1>
        <p>{{category.description}}</p>
      </div>
      <div class="actions">
        <Icon
          title="Toggle randomness"
          alt="Toggle randomness icon"
          @click="toggleRandom"
          :class="{activated: randomize }"
          scale="2"
          name="random"
        />
      </div>
    </div>
    <div class="card-list">
      <div class="cards" v-if="card">
        <button @click="prev">
          <Icon name="chevron-left" />
        </button>
        <Card :card="card" />
        <button @click="next">
          <Icon name="chevron-right" />
        </button>
      </div>
      <div v-else>
        <p>
          You don't have any card yet. Start by
          <router-link :to="{name: 'AddCard', params: { id: category.id }}">adding one</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Icon from "vue-awesome";
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";
import "vue-awesome/icons/random";

export default {
  name: "CategoryPage",
  components: {
    Card,
    Icon,
  },
  data() {
    return {
      randomize: false,
    };
  },
  computed: {
    category() {
      return this.$store.state.category.current;
    },
    categoryList() {
      return this.$store.state.category.list;
    },
    card() {
      return this.$store.state.card.data;
    },
  },
  methods: {
    toggleRandom() {
      this.randomize = !this.randomize;
    },
    next() {
      if (this.randomize) {
        this.$store.dispatch("getRandomCard", {
          categoryId: this.category.id,
          currentId: this.card.id,
        });
      } else {
        this.$store.dispatch("getNextCard", {
          id: this.card.id,
          categoryId: this.category.id,
        });
      }
    },
    prev() {
      if (this.randomize) {
        this.$store.dispatch("getRandomCard", {
          categoryId: this.category.id,
          currentId: this.card.id,
        });
      } else {
        this.$store.dispatch("getPreviousCard", {
          id: this.card.id,
          categoryId: this.category.id,
        });
      }
    },
  },
  watch: {
    $route(to) {
      // Changing the route, select the new category and fetch a card
      this.$store.dispatch("selectCategory", to.params.id);
    },
    category() {
      // When the category change, fetch a card
      if (this.randomize) {
        this.$store.dispatch("getRandomCard", { categoryId: this.category.id });
      } else {
        this.$store.dispatch("getFirstCard", this.category.id);
      }
    },
    categoryList() {
      // Watcher for when the list of categories change (if it isn't yet loaded for example).
      if (!this.category) {
        this.$store.dispatch("selectCategory", this.$route.params.id);
      }
    },
  },
  created() {
    // If the list of category is null (not loaded yet, or no categories for example), don't select.
    if (this.categoryList) {
      // Select the category
      this.$store.dispatch("selectCategory", this.$route.params.id);
    }
  },
};
</script>

<style lang="scss">
.category-view {
  height: 100%;
  .card-list {
    height: calc(100% - 160px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .head {
    display: flex;
    justify-content: space-between;
    width: 540px;
    height: 80px;
    margin: auto;
    .title {
      h1,
      p {
        margin: 0;
      }
    }
    .actions svg {
      opacity: 0.5;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &.activated {
        opacity: 1;
        color: var(--green);
      }
    }
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
}
</style>