import Vue from 'vue'

import store from './store/store'

import App from './app.vue'

//引入flyio
import FlyIo from 'flyio/dist/npm/wx'

//设置vue的提示功能关闭
Vue.config.productionTip = false

//声明当前组件的类型 
App.mpType = 'app'  //应用

//挂载之前使用vuex 将store 对象放到vue原型上为的是每个实例都可以使用
Vue.prototype.$store = store

//先生成flyio实例
let fly = new FlyIo

Vue.prototype.$fly = fly
//生成的实例 
const app = new Vue(App)

//挂载整个应用
app.$mount()