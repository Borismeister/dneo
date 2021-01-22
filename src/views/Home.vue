<template>
  <div class="home">
    <div id="title">
      <h1>DNEOS</h1>
      <p>Daily • Near • Earth • Object • Scanner</p>
    </div>
    <div id="date">
      <h2>{{ currentDate }}:</h2>
    </div>
    <div id="list">
      <ul>
        <li v-for="obj in objects" :key="obj.id">
          <ObjectItem :item="obj" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import ObjectItem from "@/components/ListItem";
const API_KEY = "odzkbwziv9Da8Wtsc4CSzqOvuFnvVgGXobDvNw5o";

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
      return curday("/");
    }
  },
  metaInfo: {
    title: "DNEOS - Home"
  },
  data: () => {
    return {
      objects: []
    };
  },
  components: {
    ObjectItem
  },
  mounted() {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${curday(
          "-"
        )}&end_date=${curday("-")}&api_key=${API_KEY}`
      )
      .then(
        response =>
          (this.objects = response.data.near_earth_objects[curday("-")])
      );
  }
});
</script>

<style lang="scss">
#title {
  box-sizing: border-box;
  padding: 25px;
  background-color: #2196f3;
  color: whitesmoke;
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
}

#date {
  color: whitesmoke;
  padding-bottom: 15px;
  background-color: #2196f3;
  h2 {
    padding: 0;
    margin: 0;
  }
}

#list {
  max-height: calc(100vh - 207px);
  overflow-y: auto;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
}
</style>
