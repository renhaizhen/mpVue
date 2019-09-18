<template>
  <div>
    <div @click="toMovieDetal(index)" v-for="(item,index) in movieList" class="moviesContainer" :key="index">
      <img :src="item.images.large" alt />
      <div class="movies_detail">
        <p class="movies_name">{{item.title}}</p>
        <p class="movies_year">年份：{{item.year}}</p>
        <p class="movies_dir">导演：{{item.directors[0].name}}</p>
      </div>
      <p class="movies_rating">{{item.rating.average}}</p>
    </div>
  </div>
</template>

<script>
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250'
export default {
    data() {
        return {
            movieList:{}
        }
    },
    //axios 在小程序中不支持会报错 可使用flyio
    beforeMount() {
        //使用fly发请求
        this.$fly.get(MOVIE_URL).then(res=>{
            console.log(res)
            this.movieList = res.data.subjects
            console.log(this.movieList)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //方法
    methods : {
      toMovieDetal ( index ) {
          console.log(this.movieList[index])
        this.$store.dispatch( 'getMoviesArr' , this.movieList[index] )

        wx.navigateTo( { url : '/pages/movieDetail/main?index=' + index } );
      } ,

    } ,
};
</script>

<style>
.moviesContainer {
  display: flex;
  padding: 10rpx;
  border-bottom: 1rpx solid #eeeeee; 
}
.moviesContainer img {
  width: 128rpx;
  height: 128rpx;
}
.movies_detail{
    width: 70%;
}
.movies_name{
    font-size: 32rpx;
    color: #333;
    text-overflow: ellipsis;
}
.movies_year{
    font-size: 28rpx;
    color: #999;
    margin: 5rpx 0;
}
.movies_dir{
    font-size: 30rpx;
    color: #666;
    white-space: nowrap;
}
.movies_rating{
    font-size: 26rpx;
    font-weight: bold;
    color: red;
}
</style>