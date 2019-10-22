<template>
    <div class="DownScroll" ref="content">
        <slot></slot>
        <div  class="loadmore" v-show='showloadmore'>
            <div v-show="isNextPage">
                <!-- <i class="xfd-loading"></i> -->
                <p>努力加载中...</p>
            </div>
            <p v-show="!isNextPage">我也是有底线的</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'DownScroll',
    props:{
        isNextPage:{
            type:Boolean,
            default:true,
        },
        callback: {
            type: Function
        },
    },
    data(){
        return {
           showloadmore:false,
        }
    },
    filters:{

    },
    methods: {
        init(el) {
            console.log('init')
            this.scrollView = el;
            this.bindEvent(); 
        },
        bindEvent() {
            this.scrollView.addEventListener('scroll', this.scrollHandler);
        },
        scrollHandler(e) {
            this.showloadmore = true;
            this.$emit('scroll-callback', this.scrollView.scrollTop);
            if(!this.isNextPage){
                return;
            }
            let height = this.scrollView.getBoundingClientRect().height; //滚动视图高度
            let totalheight = parseFloat(height) + parseFloat(this.scrollView.scrollTop); //滚动视图高度 + 滚动了的高度
            let domHeight = this.$refs.content.offsetHeight; //滚动内容(这个组件)高度

            console.log(height)

            if (domHeight <= totalheight) {
                this.callback();
            } 
        },
    },
    mounted() {
 
    },
    destroyed() {
        this.scrollView.removeEventListener('scroll', this.scrollHandler);
    }
    

}

</script>
<style lang="scss">
.loadmore{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#777;
}
</style>

