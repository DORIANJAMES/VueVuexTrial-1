<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TableComp",
  components: {FontAwesomeIcon},
  methods: {
    delete(e){
      console.log(e);
    }
  }
}
</script>

<template>
<div class="container">
  <div class="d-flex justify-content-end">
    <router-link to="/new-user" class="btn btn-success"><strong>+</strong></router-link>
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
    <tr v-for="(person,i) in $store.state.people" :key="i">
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
