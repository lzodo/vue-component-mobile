<template>
    <div class="lzoHeader fineSide side-b" :style="{height:Height+'px'}" >
        <div class="left" v-show='AddLeft' @click='leftClick'>
            <span class="iconfont">&#xe618;</span>
            <span class="font">返回</span>
        </div>
        <div class="centent">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'lzoHeader',
    props:{
       Height:{
           type:Number,
           default:50,
       },
       AddLeft:{
           type:Boolean,
           default:true,
       }

    },
    data(){
        return {
           
        }
    },
    filters:{

    },
    methods: {
        leftClick(){
            this.$emit('leftClick');
        },
    },
    watch: {

    },
    mounted() {

    }
}

</script>
<style lang="scss">
.lzoHeader{
    width: 100%;
    position: relative;
    background: #fff;
}
.centent{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color:#333;
}
.left{
    position: absolute;
    left: 10px;
    top:50%;
    transform: translateY(-50%);
    .font{
       font-size: 16px;
       color:#777;
    }
    .iconfont{
        font-weight: 600;
        color:#777;
        font-size: 18px;
    }
}
</style>
