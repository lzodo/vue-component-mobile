<template>
    <ul class="AppToolLinks fineSide side-b side-t">
        <li v-for="(item,index) in list" :key='index' @click='changeLink(item,index)' :style="{height:linkHeight+'px'}">
            <span class="iconfont" :class="[item.ico]" :style='{color:item.color}'></span>
            <span class="title fineSide" :class="{'side-b':index<list.length-1}">
                <div class="font">{{item.title}}</div>
                <span class="iconfont rightIco iconyoujiantou"></span>
            </span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'AppToolLinks',
    props:{
        linkHeight:{
            type:Number,
            default:45
        },
        list:{
            type:Array,
            default:[]
        },

    },
    data(){
        return {
           
        }
    },
    filters:{

    },
    methods: {
        changeLink(item,index){
            if(item.outlink){
                window.location.href=item.link;
            }else{
                this.handleGoto(item.link);
            }
        },
    },
    watch: {

    },
    mounted() {

    }
}

</script>
<style lang="scss">
.AppToolLinks{
    width:100%;
    li{
        width: 100%;
        display: flex;
        .iconfont{
            font-size: 16px;
            width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color:#777
        }
        .title{
            flex:1;
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #777;
            letter-spacing: 2px;
            .font{
                flex:1;
            }
        }
        .rightIco{
            width: 50px;
        }
    }
}
</style>
