<template>
    <div class="DownScrollController">
        <lzo-header class="myheader" :AddLeft="true" @leftClick="$router.go(-1)">滚动底部加载</lzo-header>
        <section class='scrollView' ref='scrollView'>
            <down-scroll :isNextPage="isNextPage" ref="infiniteScroll" :callback="handleLoadList" @scroll-callback="getScroll">
                <ul class="dslist">
                    <li v-for='(item,index) in list' :key='index'>
                        {{index+1}}、{{item.title}}
                    </li>
                </ul>
            </down-scroll>
        </section>
    </div>    
</template>
<script>
export default {
    name:'DownScrollController',
    data(){
        return{
            isNextPage:true,
            scroll:0,
            list:[
                {title:'vuex菜单'},
                {title:'react菜单'},
                {title:'amap菜单'},
                {title:'JavaScript菜单'},
                {title:'css菜单'},
                {title:'node菜单'},
                {title:'C#菜单'},
                {title:'java菜单'},
                {title:'chrome菜单'},
                {title:'vuex菜单'},
                {title:'react菜单'},
                {title:'amap菜单'},
                {title:'JavaScript菜单'},
                {title:'css菜单'},
                {title:'node菜单'},
                {title:'C#菜单'},
                {title:'java菜单'},
                {title:'chrome菜单'},
                {title:'vuex菜单'},
                {title:'react菜单'},
                {title:'amap菜单'},
                {title:'JavaScript菜单'},
                {title:'css菜单'},
                {title:'node菜单'},
                {title:'C#菜单'},
                {title:'java菜单'},
                {title:'chrome菜单'},
                {title:'vuex菜单'},
                {title:'react菜单'},
                {title:'amap菜单'},
                {title:'JavaScript菜单'},
                {title:'css菜单'},
                {title:'node菜单'},
                {title:'C#菜单'},
                {title:'java菜单'},
                {title:'chrome菜单'},
            ],
            list2:[
                {title:'add react菜单'},
                {title:'add amap菜单'},
                {title:'add JavaScript菜单'},
                {title:'css菜单'},
                {title:'node菜单'},
                {title:'C#菜单'},
                {title:'java菜单'},
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
                {title:'chrome菜单'}, 
            ],
        }
    },
    methods:{
        handleLoadList() {
            console.log('滚动到了底部');
            console.log('判断是否还有更多')


            this.scroll++;
            setTimeout(()=>{
                if(this.scroll==3){
                    console.log('如果没有的话')
                    this.isNextPage = false;
                }else{
                    console.log('如果有')
                    this.list = this.list.concat(this.list2)
                }
            },500)
        },
        getScroll(scrollTop) { //滚动实时出入
            //console.log(scrollTop) //滚动了的高度
        }
    },
    mounted(){
        this.$refs.infiniteScroll.init(this.$refs.scrollView);
    },
}
</script>
<style lang="scss" scoped>
.DownScrollController{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.scrollView{
    flex:1;
    overflow-y: auto;
    overflow-x: hidden;
}
.dslist{
    color:#777;
}
</style>