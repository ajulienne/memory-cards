<template>
  <div class="category-view" v-if="category">
    <div class="title">
      <h1>{{category.name}}</h1>
      <p>{{category.description}}</p>
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

export default {
  name: "CategoryPage",
  components: {
    Card,
    Icon,
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
    next() {
      this.$store.dispatch("getRandomCard", {
        categoryId: this.category.id,
        currentId: this.card.id,
      });
    },
    prev() {
      this.$store.dispatch("getRandomCard", {
        categoryId: this.category.id,
        currentId: this.card.id,
      });
    },
  },
  watch: {
    $route(to) {
      // Changing the route, select the new category and fetch a card
      this.$store.dispatch("selectCategory", to.params.id);
    },
    category() {
      // When the category change, fetch a card
      this.$store.dispatch("getRandomCard", { categoryId: this.category.id });
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

  .title {
    width: 540px;
    height: 80px;
    margin: auto;
    h1,
    p {
      margin: 0;
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