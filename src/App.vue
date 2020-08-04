<template>
  <div id="app">
    <Toast />
    <Navbar />
    <router-view />
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
    this.$store.dispatch("get");
  },
  computed: {
    ids() {
      return this.$store.state.ids;
    },
  },
  watch: {
    ids: function() {
      this.$router.push({
        name: "CardList",
        params: { id: this.$store.state.ids[0] },
      });
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  background-color: #2c3e50;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: white;
}

a.router-link-exact-active,
a:hover {
  color: #42b983;
}
</style>
