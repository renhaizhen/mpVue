<template>

  <div>

    <div class="listContainer">
      <!--
    swiper api:  https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
      indicator-dots		        是否显示面板指示点
      indicator-color		        指示点颜色
      indicator-active-color		当前选中的指示点颜色
      autoplay	       Boolean		是否自动切换(默认:false)
      -->
      <swiper indicator-dots
              autoplay="true"
              indicator-color="pink"
              indicator-active-color="green">
        <swiper-item>

          <img src="/static/list/p1.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p2.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p3.jpg"
               alt=""/>
        </swiper-item>
        <swiper-item>

          <img src="/static/list/p4.jpg"
               alt=""/>
        </swiper-item>
      </swiper>
    </div>
    <div>
      <ListTmp v-for="(item, index) in listTmp"
               :key="index"
               :item="item"
               :index="index"></ListTmp>

    </div>
  </div>

</template>

<!-- js脚本代码片段 -->
<script>
  import { mapState } from 'vuex'
  import ListTmp from '../list_template/list_template.vue'
  export default {
    name : "list" ,
    components : { ListTmp } ,
    //数据模型
    data () {
      return {
        msg : ''
      }
    } ,
    //方法
    methods : {
      //methodsname() {
      //代码搞这里
      //},
    } ,
    //计算属性
    computed : {
      //映射状态到本组件
      ...mapState( [ 'listTmp' ] )
    } ,
    //生命周期(mounted)
    mounted () {
    } ,
    beforeMount () {
      //分发 action 修改状态
      this.$store.dispatch( 'getList' )
    } ,
  }
</script>

<!-- 样式代码片段  scoped -->
<style src="./list.css"
       scoped>
</style>