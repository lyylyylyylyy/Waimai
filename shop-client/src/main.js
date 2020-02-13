import Vue from 'vue'
import app from './app'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import './filters' // 加载自定义过滤器
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'
import './mock/mockServer'
import Split from './components/Split/Split.vue'
// 注册全局组件
Vue.component(Button.name, Button) // <mt-button>
Vue.component('Split', Split)
Vue.use(VueLazyload, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
