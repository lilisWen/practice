<template>
  <div>
    <h1>父组件</h1>子组件发来的消息-------------
    <span>{{msgfromSon}}</span>
    <son :msg="msgfromFather" @handel="getmsgfromSon"></son>
  </div>
</template>

<script>
import son from "./son";
export default {
  name: "father",
  data() {
    return {
      msgfromFather: "我是父组件发来的消息",
      msgfromSon: ""
    };
  },
  components: {
    son
  },
  methods: {
    getmsgfromSon: function(value) {
      this.msgfromSon = value;
    }
  }
};
</script>

<style scoped>
</style>
