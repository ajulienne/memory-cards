<template>
  <div
    class="card"
    :class="{ answer: showAnswer, question: !showAnswer }"
    @click="toggleView"
  >
    <template v-if="isEditing">
      <EditCardForm :card="card" @formSubmitted="isEditing = false" />
    </template>
    <template v-else>
      <div v-if="!showAnswer" class="question">
        <div class="badge">Question</div>
        <h1>{{ card.questionTitle }}</h1>
        <p>{{ card.question }}</p>
      </div>
      <div v-else class="answer">
        <div class="badge">Answer</div>
        <h1>{{ card.answerTitle }}</h1>
        <p>{{ card.answer }}</p>
      </div>
      <div class="buttons">
        <button @click="toggleEdit"><Icon name="pen" /></button>
        <button @click="remove"><Icon name="times" /></button>
      </div>
    </template>
  </div>
</template>

<script>
import "vue-awesome/icons/times";
import "vue-awesome/icons/sync";
import "vue-awesome/icons/pen";
import Icon from "vue-awesome/components/Icon";
import EditCardForm from "./EditCardForm";

export default {
  name: "Card",
  components: {
    Icon,
    EditCardForm,
  },
  props: ["card"],
  data() {
    return {
      isEditing: false,
      showAnswer: false,
    };
  },
  methods: {
    remove() {
      if (window.confirm("Do you want to remove this card?")) {
        this.$store.dispatch("remove", this.card.id);
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    toggleView() {
      this.showAnswer = !this.showAnswer;
    },
  },
  watch: {
    card: function() {
      this.isEditing = false;
      this.showAnswer = false;
    },
  },
};
</script>

<style lang="scss">
.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin: auto;
  color: #2c3e50;
  cursor: pointer;

  .answer,
  .question {
    p {
      text-align: justify;
    }
    .badge {
      text-align: left;
      color: #aaa;
    }
  }

  .buttons {
    text-align: right;
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
