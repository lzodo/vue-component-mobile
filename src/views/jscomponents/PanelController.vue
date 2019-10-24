<template>
    <div class=" lzo-warp PanelController">
        <lzo-header class="myheader" @leftClick="$router.go(-1)">面板</lzo-header>
        <div class="panelmain">
            <app-panel class='model' :datas='paneldatas1'></app-panel>
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
            paneldatas1:{
                title:'图文组合列表',
                lists:[
                    {
                        'title':'列表一',
                        'note':'这里是列表一的描述,它可能很长很长,但高度不会跟它变高,最多给他两函空间,是否含有省略号',
                        'link':'',
                        'img':'../../../static/images/cat.jpg',
                        'radius':1000
                    },
                    {
                        'title':'列表一',
                        'note':'这个很短',
                        'link':'',
                        'img':'../../../static/images/cat.jpg',
                    },
                    {
                        'title':'列表一',
                        'note':'这里是列表一的描述,它可能很长很长,但高度不会跟它变高,最多给他两函空间,是否含有省略号否含有省略否含有省略否含有省略'
                    },
                    {
                        'title':'列表一',
                        'note':'这里是列表一的描述,它可能很长很长,但高度不会跟它变高,最多给他两函空间,是否含有省略号',
                        'link':'',
                        'smalllink':[
                            {
                                name:'信息来源',
                                link:''
                            },
                            {
                                name:'时间',
                                link:''
                            }
                        ],
                    },
                ],
                footer:'more'
            },
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
    // padding: 10px;
    flex: 1;
    background: #eee;
    overflow:auto;
    .model{
        margin-bottom: 10px;
    }
}
</style>