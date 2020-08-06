<template>
  <router-link tag="div" class="category" :to="{ name: 'Category', params: { id: category.id } }">
    <div class="actions">
      <button>
        <Icon name="pen" />
      </button>
      <button @click.stop="remove">
        <Icon name="times" />
      </button>
    </div>
    <strong>{{category.name}}</strong>
    <p>{{category.description}}</p>
  </router-link>
</template>

<script>
import "vue-awesome/icons/times";
import "vue-awesome/icons/pen";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "Category",
  components: {
    Icon,
  },
  props: ["category"],
  methods: {
    remove() {
      this.$store.dispatch("deleteCategory", this.category.id);
    },
  },
};
</script>

<style lang="scss">
.category {
  background-color: white;
  color: #2c3e50;
  display: block;
  padding: 20px;
  border-radius: 3px;
  text-align: left;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 0px 0px #42b983;
  transition: box-shadow 0.1s ease-in;
  &:hover {
    box-shadow: 0px 5px 0px 0px #42b983;
  }

  strong,
  p {
    margin: 0;
    padding: 0;
  }

  strong {
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    opacity: 0.8;
  }

  .actions {
    position: absolute;
    top: 20px;
    right: 10px;
    button {
      display: inline-block;
      vertical-align: middle;
      background-color: white;
      border: none;
      cursor: pointer;
      color: #ccc;
      &:hover {
        color: #2c3e50;
      }
      &:last-child:hover {
        color: #f66;
      }
    }
  }
}
</style>