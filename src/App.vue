<template>
  <div id="app">
    <Toast />
    <Navbar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Toast from "@/components/Toast";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Toast,
    Navbar,
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style>
:root {
  --dark: #2c3e50;
  --green: #42b983;
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
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
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
</style>
