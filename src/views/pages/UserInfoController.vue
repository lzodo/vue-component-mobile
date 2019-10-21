<template>
  <div class="UserInfoController lzo-warp">
    <app-tool-links class='itemLinks' :list='data2'></app-tool-links>
    <app-tool-links class='itemLinks' :list='data1'></app-tool-links>
    <app-tool-links class='itemLinks' :list='data3'></app-tool-links>
  </div>
</template>

<script>
export default {
  name: "UserInfoController",
  data() {
    return {
      msg: "",
      data2:[
        {
            title:'所有配置模板',
            ico: "iconhome",
            link:'https://www.baidu.com',
            isDialog:false,                //点击的时候是否安全提示框
            color:'#EE9A00',                  //图标颜色
            outlink:true                   //是否是外部链接
        },
      ],
      data1:[
        {
           title:'搜一搜',
           ico: "iconhome",
           link:'https://www.baidu.com',
        },
        {
           title:'附近',
           ico: "iconguanyu",
           link:'',
           color:'#1874CD',
        },
        {
           title:'小程序',
           ico: "iconwode",
           link:'',
        },
      ],
      data3:[

        {
           title:'附近',
           ico: "iconguanyu",
           link:'',
           color:'#CD0000',
        },
        {
           title:'小程序',
           ico: "iconwode",
           link:'',
        },
      ],
    };
  },
  methods:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.UserInfoController{
  padding:0 10px;
}
.itemLinks{
  margin-bottom: 10px;
}
</style>
