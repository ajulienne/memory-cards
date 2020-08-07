<template>
  <div id="app">
    <Navbar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style lang="scss">
:root {
  --dark: #2c3e50;
  --green: #42b983;
  --font-family: "Montserrat", Helvetica, Arial, sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--dark);
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100%;
}

#nav {
  padding: 30px;
}

#content {
  width: 1024px;
  margin: auto;
  height: calc(100% - 70px);
}

a {
  font-weight: bold;
  color: white;
}

a.router-link-exact-active,
a:hover {
  color: var(--green);
}

.toast {
  .toast-text {
    font-family: var(--font-family);
  }
}
</style>
