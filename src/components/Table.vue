<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TableComp",
  components: {FontAwesomeIcon},
  props: ['component'],
  methods: {
    delete(e){
      this.$appAxios.delete(`/people/${e}`)
      this.$store.getters.getData;
    },
    forward(e){
      this.$router.push(`/users/${e}`)
    }
  },
  created() {
    this.$store.getters.getData;
  }
}
</script>

<template>
<div class="container">
  <div class="d-flex justify-content-end">
    <router-link to="/users/new-user" class="btn btn-success"><strong>+</strong></router-link>
  </div>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(person,i) in $store.state.people" :key="i" @click="forward(person.id)">
      <th scope="row">{{ i+1 }}</th>
      <td>{{ person.name }}</td>
      <td>{{ person.surname }}</td>
      <td>{{ person.age }}</td>
      <td><button class="btn btn-danger btn-sm" @click="this.delete(person.id)"><font-awesome-icon icon="fa-solid fa-user-secret"/></button></td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>

</style>
