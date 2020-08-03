<template>
  <form @submit.prevent="submitForm" class="edit-form">
    <div class="controls">
      <label for="questionTitle">Question Title</label><br />
      <input type="text" id="questionTitle" v-model="questionTitle" />
    </div>
    <div class="controls">
      <label for="question">Question</label><br />
      <textarea id="question" cols="60" rows="5" v-model="question" />
    </div>
    <div class="controls">
      <label for="answerTitle">Answer Title</label><br />
      <input type="text" id="answerTitle" v-model="answerTitle" />
    </div>
    <div class="controls">
      <label for="answer">Answer</label><br />
      <textarea id="answer" cols="60" rows="5" v-model="answer" />
    </div>
    <div class="submit">
      <input type="submit" value="Edit" />
    </div>
  </form>
</template>

<script>
export default {
  name: "EditCardForm",
  props: ["card"],
  data() {
    return {
      questionTitle: this.card.questionTitle,
      answerTitle: this.card.answerTitle,
      question: this.card.question,
      answer: this.card.answer,
    };
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch("update", {
          id: this.card.id,
          answerTitle: this.answerTitle,
          questionTitle: this.questionTitle,
          answer: this.answer,
          question: this.question,
        })
        .then(() => {
          this.$emit("formSubmitted");
        });
    },
  },
};
</script>

<style lang="scss">
.edit-form {
  text-align: left;

  .controls {
    margin-bottom: 20px;
    input[type="text"],
    textarea {
      border: none;
      border-radius: 3px;
      background-color: #eee;
      color: #2c3e50;
      outline: none;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      font-size: 1em;
      resize: none;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  .submit {
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
</style>
