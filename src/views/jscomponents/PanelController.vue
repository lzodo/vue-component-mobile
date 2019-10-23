<template>
    <div class=" lzo-warp PanelController">
        <lzo-header class="myheader" @leftClick="$router.go(-1)">面板</lzo-header>
        <div class="panelmain">
            <app-tool-links class='model' :list='data1'></app-tool-links>
            <app-tool-links class='model' :list='data2'></app-tool-links>
        </div>
       
    </div>
</template>
<script>
export default {
    name:'PanelController',
    data(){
        return {
            data1:[
                {
                    title:'定义图标颜色',
                    ico: "iconhome",
                    color:'#EE9A00', 
                    link:'',
                },
                {
                    title:'描述文字',
                    ico: "iconguanyu",
                    link:'',
                    color:'#1874CD',
                    note:'描述这里'
                },
                {
                    title:'我是外链',
                    ico: "iconwode",
                    link:'',
                    outlink:true,
                    link:'https://www.baidu.com',
                },
            ],
            data2:[
                {
                    title:'不要图标',
                    link:'',
                },
                {
                    title:'我也不要图标',
                    link:'',
                },
            ],
        }
    },
    methods:{

    },
    mounted(){
       
    }
}
</script>
<style lang="scss" scoped>
.PanelController{
    display: flex;
    flex-direction: column;
}
.panelmain{
    width: 100%;
    padding: 10px;
    flex: 1;
    background: #eee;
    .model{
        margin: 5px 0;
    }
}
</style>