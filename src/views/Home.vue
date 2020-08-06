<template>
  <div class="home">
    <AddCategoryForm />
    <div v-if="categories" class="categories">
      <Category v-for="cat in categories" :key="cat.id" :category="cat" />
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import AddCategoryForm from "@/components/AddCategoryForm.vue";
export default {
  name: "Home",
  components: {
    Category,
    AddCategoryForm,
  },
  computed: {
    categories() {
      return this.$store.state.category.list;
    },
  },
};
</script>

<style lang="scss">
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
}
</style>