<template>
  <div class="add-category-form">
    <form @submit.prevent="submitForm" v-if="formIsActive">
      <div class="control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="control">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description" />
      </div>
      <div class="buttons">
        <input type="submit" value="Add category" />
        <button type="button" @click="formIsActive = false">Cancel</button>
      </div>
    </form>
    <button v-else class="open-form" @click="formIsActive = true">Add a category</button>
  </div>
</template>

<script>
export default {
  name: "AddCategoryForm",
  data() {
    return {
      name: null,
      description: null,
      formIsActive: false,
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch("createCategory", {
        name: this.name,
        description: this.description,
      });
    },
  },
};
</script>

<style lang="scss">
.add-category-form {
  margin-bottom: 40px;
  height: 60px;

  .open-form {
    cursor: pointer;
    background: none;
    border: 1px solid var(--green);
    color: var(--green);
    margin-top: 20px;
    &:hover {
      border-color: white;
      color: white;
    }
  }

  form {
    .control {
      display: inline-block;
      margin-right: 10px;
      label,
      input {
        display: block;
      }
    }
    .buttons {
      display: inline-block;
      input,
      button {
        cursor: pointer;
        background: none;
        border: 1px solid var(--green);
        color: var(--green);
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
      input[type="submit"] {
        background-color: var(--green);
        color: white;
      }
    }
  }
  input,
  button {
    border: none;
    border-radius: 3px;
    background-color: #fafafa;
    color: #2c3e50;
    outline: none;
    box-sizing: border-box;
    height: 40px;
    padding: 10px;
    font-size: 1em;
  }
}
</style>