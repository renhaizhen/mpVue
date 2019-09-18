<template>
  <div v-if="movieDetail.images"  class="movieContainer">
    <img :src="movieDetail.images.large" alt />
    <p>{{movieDetail.original_title}}</p>
    <div class="movie_info">
      <span>评分:{{movieDetail.rating.average}}</span>
        <span>导演:{{movieDetail.directors[0].name}}</span>
        <span>主演:{{movieDetail.casts[0].name}} {{movieDetail.casts[1].name}} {{movieDetail.casts[2].name}}</span>
    </div>
    <button>我要观影</button>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name : "movieDetail" ,
    //数据模型
    data () {
      return {
        movieDetail : {}
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
      ...mapState( [ 'moviesArr' ] )
    } ,
    //生命周期(mounted)
    mounted () {

    } ,
    beforeMount () {
      this.movieDetail = this.moviesArr
    } ,
  }
</script>

<style>
.movieContainer{
    display: flex;
    flex-direction: column;
    padding: 10rpx;
    margin:  0 auto;
    width: 70%;
    margin-top: 30rpx;
}
.movieContainer img{
    width: 400rpx;
    height: 600rpx;
    margin-left: 62rpx;
}
.movieContainer p{
    text-align: center;
    font-weight: bold;
    font-size: 44rpx;
    margin: 20rpx; 
}
.movie_info{
    padding: 10rpx;
    margin-top: 15rpx;
    margin-left: 20rpx;
}
.movie_info span{
    display: block;
    font-weight: bold;
}
button{
    background: green;
    color: white;
    height: 60rpx;
    width: 100%;
    font-size: 30rpx;
    text-align: center;
    line-height: 60rpx;
}
</style>