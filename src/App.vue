<template>
  <div id="app">
    <h1>Property Management</h1>
    <PropertyList />
  </div>
</template>

<script>
import PropertyList from "./components/PropertyList.vue";

export default {
  name: "App",
  components: {
    PropertyList,
  },
};
</script>


