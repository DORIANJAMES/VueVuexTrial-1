<script>
// TODO: Form verilerini dinamik olarak getirme işlemi yapılacak.
import {mapGetters} from "vuex";

export default {
  name: "FormComp",
  props: ['id'],
  data (){
    return{
      people:{
        name: '',
        surname: '',
        age: ''
      }
    }
  },
  computed: {
    ...mapGetters(['_getPeople']),

  },
  created() {
    this.$appAxios.get('/people').then(response => {
      this.$store.state.people = response.data;
    });
  },
  mounted() {
    let id = parseInt(this.id)
    this._getPeople(id).forEach((item) => {
      this.name = item.name;
      console.log(this.name);
      this.surname = item.surname;
      this.age = item.age;
    })
  },
}
</script>

<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="Name">
      </div>
      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input type="text" class="form-control" id="surname" placeholder="Surname" v-model="people.surname">
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="text" class="form-control" id="age" placeholder="Age">
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<style scoped>

</style>
