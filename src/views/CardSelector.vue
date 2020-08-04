<template>
  <Card :card="card" v-if="card" />
</template>

<script>
import Card from "@/components/Card";
import "vue-awesome/icons/chevron-left";
import "vue-awesome/icons/chevron-right";

export default {
  name: "CardSelector",
  components: {
    Card,
  },
  computed: {
    card() {
      return this.$store.state.cards.find(
        (c) => +c.id === +this.$route.params.id
      );
    },
  },
};
</script>
