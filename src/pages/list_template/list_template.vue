<template>
    <div @click="toDetail" class="tmpContainer">
        <div class="avatar_data">
            <img :src="item.avatar" alt="">
            <span>{{item.date}}</span>
        </div>
        <p class="name">{{item.title}}</p>
        <img class="detail_img" :src="item.detail_img" alt="">
        <p class="content">{{item.detail_content}}</p>
        <div class="view_star">
            <img src="/static/images/icon/star.png" alt="">
            <span>{{item.love_count}}</span>
             <img src="/static/images/icon/view.png" alt="">
            <span>{{item.attention_count}}</span>
        </div>
    </div>
</template>
<script>
export default {
    //接收list传递的数据
    props:["item","index"],
    data() {
        return {
            
        }
    },
    methods: {
        toDetail(){
            //跳转到详情页面+传参过去index
            wx.navigateTo({
                url:'/pages/detail/main?index='+this.index
            })
        }
    },
}
</script>
<style src="./list_template.css" scoped>
    
</style>