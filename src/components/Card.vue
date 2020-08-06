<template>
  <div class="card" :class="{ answer: showAnswer, question: !showAnswer }" @click="toggleView">
    <template v-if="isEditing">
      <EditCardForm
        :card="card"
        @formSubmitted="isEditing = false"
        @cancelEdit="isEditing = false"
      />
    </template>
    <template v-else>
      <div class="head">
        <div class="badge">{{ showAnswer ? "Answer" : "Question" }}</div>
        <div class="buttons">
          <button @click="toggleEdit">
            <Icon name="pen" />
          </button>
          <button @click="remove">
            <Icon name="times" />
          </button>
        </div>
      </div>
      <div v-if="!showAnswer" class="question">
        <h1>{{ card.questionTitle }}</h1>
        <p v-html="formattedQuestion"></p>
      </div>
      <div v-else class="answer">
        <h1>{{ card.answerTitle }}</h1>
        <p v-html="formattedAnswer"></p>
      </div>
    </template>
  </div>
</template>

<script>
import "vue-awesome/icons/times";
import "vue-awesome/icons/pen";
import Marked from "marked";
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
        this.$store.dispatch("deleteCard", this.card.id);
        this.$store.dispatch("getRandomCard", {
          categoryId: this.card.categoryId,
        });
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    toggleView() {
      this.showAnswer = !this.showAnswer;
    },
  },
  computed: {
    formattedAnswer() {
      return this.card.answer ? Marked(this.card.answer) : "";
    },
    formattedQuestion() {
      return this.card.question ? Marked(this.card.question) : "";
    },
  },
  watch: {
    card: function () {
      this.isEditing = false;
      this.showAnswer = false;
    },
  },
};
</script>

<style lang="scss">
.card {
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin: auto;
  color: #2c3e50;
  cursor: pointer;
  min-height: 200px;

  .answer,
  .question {
    p {
      text-align: justify;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    .badge {
      text-align: left;
      color: #aaa;
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
}
</style>
