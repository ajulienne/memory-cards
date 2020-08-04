<template>
  <nav>
    <div class="title">
      <router-link tag="h1" to="/cards">Memory cards</router-link>
    </div>
    <div class="link">
      <router-link to="/add">Add a card</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss">
nav {
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  .title {
    h1 {
      line-height: initial;
      text-transform: uppercase;
      letter-spacing: 10px;
      cursor: pointer;
    }
  }
  .link {
    a {
      padding: 10px;
      border-radius: 3px;
      text-decoration: none;
      color: white;
      background-color: #42b983;
      &:hover {
        background-color: darken(#42b983, 5);
      }
    }
  }
}
</style>
