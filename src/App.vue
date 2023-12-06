<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {Header},
  methods: {
    getData() {
      this.$appAxios.get('/people').then((response) => {
        this.$store.state.people = response.data
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
