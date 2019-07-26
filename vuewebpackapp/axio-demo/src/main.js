// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

//创建状态仓库方便没有父子关系的组件通信
var store = new Vuex.Store({
  state: {
    num: 1
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App,
  },
  template: '<App/>'
})
