<script>

export default {
  name: "UsersView",
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

<template>
  <router-view></router-view>
</template>

<style>

</style>
