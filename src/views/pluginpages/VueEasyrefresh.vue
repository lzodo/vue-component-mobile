<template>
    <div class="vue-easyrefresh">
        <lzo-header class="myheader" :AddLeft="true" @leftClick="$router.go(-1)">vue-easyrefresh - 刷新</lzo-header>
        <EasyRefresh
            class="EasyRefresh"
            :userSelect="false"
            :onRefresh="onRefresh"
            :loadMore="loadMore">
            <template v-slot:header>
                <ClassicsHeader 
                    refreshReadyText='准备刷新...'
                    refreshText='刷新提示文字'
                    refreshingText='正在刷新...'
                    refreshedText='刷新完成'
                />
            </template>
            <a href="https://github.com/xuelongqy/vue-easyrefresh">github地址</a>
            <ul>
                <li v-for='(item,index) in 150' :key='index'>{{index}}</li>
            </ul>
            <template v-slot:footer>
                <ClassicsFooter 
                    loadText='加载提示文字'
                    loadReadyText='准备加载文字'
                    loadingText='正在加载文字'
                    loadedText='加载完成文字'
                    noMoreText='我也是有底线的'
                />
            </template>
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