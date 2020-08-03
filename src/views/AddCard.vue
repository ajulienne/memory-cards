<template>
  <div class="add-card">
    <h1>Add a card</h1>
    <NewCardForm />
  </div>
</template>

<script>
import NewCardForm from "@/components/NewCardForm";

export default {
  name: "AddCard",
  components: {
    NewCardForm,
  },
};
</script>
