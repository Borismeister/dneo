<template>
  <div class="obj">
    {{ item.name }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ObjectItem",
  props: {
    item: Object
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.obj {
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 10px;
  background-color: whitesmoke;
  cursor: pointer;
}
</style>
