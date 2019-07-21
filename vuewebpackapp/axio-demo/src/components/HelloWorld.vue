<template>
  <div class="hello">
    <h1>我是axiosApp,用来发送请求，拦截响应</h1>
    <button @click="getData">发送请求</button>
    <ul>
      <li v-for="item in items ">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import qs from "qs";

Vue.prototype.$http = axios;

export default {
  name: "HelloWorld",
  data() {
    return {
      items: [],
      url: ""
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 10
          }
        })
        .then(result => {
          this.items = result.data.data;
          console.log(this.items);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendData() {
      this.$http.post(
        url,
        qs.stringify({
          page: 1,
          limit: 10
        })
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
