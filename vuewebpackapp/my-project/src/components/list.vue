<template>
  <ul>
    <li>
      <router-link :to="{name:'helloworld',params:{worldmsg:'你好世界'}}">Hello World</router-link>
    </li>
    <li>
      <router-link :to="{name:'helloearth',params:{earthmsg:'你好地球'}}">Hello Earth</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list"
};
</script>

<style scoped>
</style>
