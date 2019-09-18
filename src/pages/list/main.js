import Vue from 'vue'
import List from './list.vue'

const list = new Vue(List)

//挂载当前的页面 而不是整个应用了
list.$mount()