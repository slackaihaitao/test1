import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './permission'

import { Lazyload } from 'vant' // 导入懒加载模块Lazyload
Vue.use(Lazyload) // 注册懒加载指令

// 注册全局图片懒加载组件
import LazyloadImg from '@/components/LazyloadImg.vue'
Vue.component('LazyloadImg', LazyloadImg)

// 引用vue-lottie动画
import lottie from 'vue-lottie'
Vue.component('lottie', lottie)

// 引入滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll) // 注册懒加载指令

// 自定义指令
import directives from './utils/directives'
Vue.use(directives)

// // 引入vconsole
import Vconsole from 'vconsole'

if (process.env.NODE_ENV !== 'production') {
  const vConsole = new Vconsole()
  Vue.use(vConsole)
}


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


