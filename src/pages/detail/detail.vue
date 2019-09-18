<template>
    <div class="detailContainer">
        <img class="detail_header" :src="detailObj.detail_img" alt="">
        <img @click='handleMusic' class="music" :src="isPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="">
        <div class="avatar_data">
            <img  :src="detailObj.avatar" alt="">
            <span>{{detailObj.author}}</span>
            <span>发布于</span>
            <span>{{detailObj.date}}</span>
        </div>
        <p class="name">{{detailObj.title}}</p>
        <div class="collection_share">
            <div class="c_s">
                <img @click="handleCollection" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'">
                <img @click="handleShare" src="/static/images/icon/share-anti.png" alt="">
            </div>
            <div class="line"></div>
        </div>
        <button open-type="share">转发此文章</button>
        <p class="content">{{detailObj.detail_content}}</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import isPlayObj from '../../datas/isPlay'
export default {

     name : "detail" ,
    onShareAppMessage ( res ) {
      // console.log( res );

      // if ( res.from === 'button' ) {
      //   // 来自页面内转发按钮
      //   console.log( res.target )
      // }
      let url = '/pages/detail/main?index=' + this.index;
      console.log( url )

      return {
        title : '我要转发啦' ,
        path : url ,
        imageUrl : '/static/images/tab/yuedu.png'
      }
    },
        data() {
        return {
            detailObj:{},
            isCollected:false, //标识文章是否被收藏
            isPlay:false
        }
    },
    beforeMount() {
        console.log(this)
        //使用this.$mp.query.index取代onload中的options
        this.index = this.$mp.query.index

        //预处理收藏缓存
        let oldStorage = wx.getStorageSync('isCollected')
        if (!oldStorage) {//为空
            wx.setStorage({
                key:'isCollected',
                data:{}
            })
        } else {
            //用户缓存过 true false undefined
            this.isCollected = (oldStorage[this.index]?true:false)
        }
        
        //判断当前页面加载的时候是否在播放
        isPlayObj.pageIndex === this.index && isPlayObj.isPlay?this.isPlay=true:this.isPlay=false
        //监听音乐的播放和暂停
        wx.onBackgroundAudioPause(()=>{
            console.log('音乐暂停')
            this.isPlay = false
            isPlayObj.isPlay = false
        }),
        wx.onBackgroundAudioPlay(()=>{
            console.log('音乐播放')
            this.isPlay = true
            isPlayObj.pageIndex = this.index
            isPlayObj.isPlay = true
        })

    },
    mounted() {
        console.log(this,111)
        //更新data
        this.detailObj = this.listTmp[this.index]
    },
    //跳转之前已经有数据，所以不需要再分发
    computed: {
        ...mapState(['listTmp'])
    },
    methods: {
        //收藏方法
        handleCollection(){
            this.isCollected = !this.isCollected
            let title = this.isCollected?'收藏成功':'取消收藏'
            wx.showToast({
                title,
                icon:'success'
            })
            //读取之前本地缓存的状态看是否被收藏
            let oldStorage = wx.getStorageSync('isCollected')
            oldStorage[this.index] = this.isCollected
            //将本次设置的结果缓存到本地
            wx.setStorage({
                key:'isCollected',
                data:oldStorage
            })
        },
        //处理音乐播放
        handleMusic(){
            this.isPlay = !this.isPlay
            let {dataUrl,title} = this.detailObj.music
            //实现音乐播放
            if (this.isPlay) {
                 wx.playBackgroundAudio({
                     dataUrl,
                     title
                 })
            } else {
                wx.pauseBackgroundAudio()
            }
        },
        //分享按钮
        handleShare(){
            wx.showActionSheet({
                itemList:[
                    '分享到朋友圈','分享给微信好友','分享到微博'
                ]
            })
        },
    },
}
</script>
<style src="./detail.css" scoped>
    
</style>