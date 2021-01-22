<template>
  <div class="home">
    {{ currentDate }}
  </div>
</template>

<script>
import Vue from "vue";
// let API_KEY = "odzkbwziv9Da8Wtsc4CSzqOvuFnvVgGXobDvNw5o";
const curday = function(sp) {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  const yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return yyyy + sp + mm + sp + dd;
};

export default Vue.extend({
  name: "Home",
  computed: {
    currentDate: () => {
      return curday("-");
    }
  },
  metaInfo: {
    title: "DNEO - Home"
  }
});
</script>
