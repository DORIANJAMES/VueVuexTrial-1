<script>
export default {
  name: "FormComp"
}
</script>

<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="Name" placeholder="Name">
      </div>
      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input type="text" class="form-control" id="surname" placeholder="Surname">
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
