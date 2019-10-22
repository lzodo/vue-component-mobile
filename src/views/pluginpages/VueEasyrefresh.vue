<template>
    <div class="vue-easyrefresh">
        <lzo-header class="myheader" :AddLeft="true" @leftClick="$router.go(-1)">vue-easyrefresh - 刷新</lzo-header>
        <EasyRefresh
            class="EasyRefresh"
            :refreshReadyText='refreshReadyText'
            :userSelect="false"
            :onRefresh="onRefresh"
            :loadMore="loadMore">
            <a href="https://github.com/xuelongqy/vue-easyrefresh">github地址</a>
            <ul>
                <li v-for='(item,index) in 150' :key='index'>{{index}}</li>
            </ul>
        </EasyRefresh>
    </div>    
</template>
<script>
export default {
    name:'vue-easyrefresh',
    data(){
        return{
refreshReadyText:'fdsafasfafsad'
        }
    },
    methods:{
        onRefresh(down){
            setTimeout(()=>{
                down();
            },2000)
        },
        loadMore(down){
            setTimeout(()=>{
                down();
            },2000)
        },
        
    },
    mounted(){
      
    },
}
</script>
<style lang="scss" scoped>
.vue-easyrefresh{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.EasyRefresh{
    flex:1;
}
</style>