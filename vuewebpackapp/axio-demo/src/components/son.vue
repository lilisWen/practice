<template>
  <div>
    <h2>子组件</h2>
    父组件发来的消息---------{{msg}}
    <button @click="sendmsg">给父组件发消息</button>
  </div>
</template>

<script>
export default {
  name: "son",
  data() {
    return {
      msgfromSon: "我是子组件发来的消息"
    };
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendmsg: function() {
      this.$emit("handel", this.msgfromSon);
    }
  }
};
</script>

<style scoped>
</style>
