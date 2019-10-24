<template>
    <div class="AppPanel fineSide side-b side-t">
        <div class="panel-cen">
            <div class="title fineSide side-b" v-show='datas.title' :style="{height:lineHeight+'px'}">{{datas.title}}</div>
            <ul class="panel-list">
                <li class='fineSide side-b' v-for="(item,index) in datas.lists" :key='index' :style="{'min-height':linkHeight+'px'}">
                    <div class="item-cen"  @click='changeLink(item,index)'>
                        <div class="leftimg" :style="{
                            'border-radius':item.radius+'px',
                            'width':linkHeight -10+'px',
                            'height':linkHeight -10+'px',
                            'background':'url('+item.img+') center center / cover no-repeat'
                            }" v-show='item.img'>
                        </div>
                        <div class="rightinfo">
                            <div class='rtitle'>{{item.title}}</div>
                            <div class='rnote'>{{item.note}}</div>
                        </div>
                    </div>
                    <div class="smalllink" v-if='item.smalllink'>
                        <span v-for='(smitem,smindex) in item.smalllink' :key='smindex' @click='changeLink(item,index)'>{{smitem.name}}</span>
                    </div>
                </li>
            </ul>
            <div class="footer" v-show='datas.footer' :style="{height:lineHeight+'px'}">
                <div class="font">{{datas.footer}}</div>
                <span class="iconfont rightIco iconyoujiantou"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AppPanel',
    props:{
        lineHeight:{
            tyep:Number,
            default:40
        },
        linkHeight:{
            type:Number,
            default:80
        },
        datas:{
            type:Object,
            default:{}
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
.AppPanel{
    width: 100%;
    background: #fff;
    padding: 0 10px;
    .smalllink{
        width: 100%;
        font-size: 14px;
        padding: 5px 0px 10px 0;
        color:#999;
        span{
            display: inline-block;
            &:not(:first-child){
                padding: 0 5px;
                border-left: 1px solid #eee;
            }
            &:first-child{
                padding-right: 5px;
            }
        }
    }
    .panel-cen{
        width: 100%;
    }
    .panel-list{
        width: 100%;
        li{
            width: 100%;
        }
        .item-cen{
            width: 100%;
            padding: 8px 0;
            display: flex;
            .leftimg{
                margin-right: 10px;
            }
            .rightinfo{
                flex: 1;
                .rtitle{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;
                    font-size: 17px;
                    margin-bottom: 3px;
                    letter-spacing: 2px;
                }
                .rnote{
                    width:100%;
                    letter-spacing: 1px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient: vertical;
                    color:#777;
                    font-size: 14px;
                }
            }
        }
    }
    .title{
        width:100%;
        color:#777;
        font-size: 16px;
        display: flex;
        align-items:center;
    }
    .footer{
        width:100%;
        color:#777;
        font-size: 16px;
        display: flex;
        align-items:center;
        .font{
            flex:1;
        }
        .rightIco{
            width:20px;
        }
    }
}
</style>
