<template>
  <div class="new-card-form">
    <form @submit.prevent="submitForm">
      <div class="controls">
        <input
          id="questionTitle"
          placeholder="Question"
          type="text"
          v-model="questionTitle"
        />
      </div>
      <div class="controls">
        <textarea
          id="question"
          placeholder="Add additionnal informations here..."
          cols="60"
          rows="5"
          v-model="question"
        />
      </div>
      <div class="controls">
        <input
          id="answerTitle"
          placeholder="Answer"
          type="text"
          v-model="answerTitle"
        />
      </div>
      <div class="controls">
        <textarea
          id="answer"
          placeholder="Add additionnal informations here.."
          cols="60"
          rows="5"
          v-model="answer"
        />
      </div>
      <div class="buttons">
        <input type="submit" value="Add" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewCardForm",
  data() {
    return {
      questionTitle: null,
      answerTitle: null,
      question: null,
      answer: null,
    };
  },
  methods: {
    submitForm() {
      const card = {
        questionTitle: this.questionTitle,
        question: this.question,
        answerTitle: this.answerTitle,
        answer: this.answer,
      };
      this.$store.dispatch("add", card).then(() => {
        this.resetForm();
      });
    },
    resetForm() {
      this.questionTitle = null;
      this.question = null;
      this.answerTitle = null;
      this.answer = null;
    },
  },
};
</script>

<style lang="scss">
form {
  text-align: left;
}

.new-card-form {
  width: 500px;
  margin: auto;

  .buttons {
    input {
      border: none;
      background-color: #42b983;
      color: white;
      padding: 10px;
      font-size: 1em;
      border-radius: 3px;
      width: 100px;
      cursor: pointer;
    }
  }
}

.controls {
  input[type="text"],
  textarea {
    border: none;
    border-radius: 3px;
    background-color: white;
    outline: none;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    font-size: 1em;
    resize: none;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  margin-bottom: 20px;
}
</style>
