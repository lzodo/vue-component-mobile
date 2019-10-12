<template>
  <button class="lzo-button" :class="{
          disabled:disabled,
          click:isClick,
          hover:isHover,
          radius:isRadius,
          primary:type=='primary',
          danger:type == 'danger',
          default:type == 'default',
          success:type == 'success',
          black:type == 'black',
          warning:type == 'warning',
          info:type == 'info',
    }" @click='clickfn'>
        <slot></slot>
  </button>
</template>
<script>
export default {
  name: "LzoButton",
  data() {
    return {
        timeout:null,
        between:true,
    };
  },
  props: {
    type: { //按钮类型 default、success、info、primary、danger、warning、black、
      type: String,
      default: "default"
    },
    disabled: { //禁用 不触发事假
      type: Boolean,
      default: true
    },
    isClick: { //是否可点击
      type: Boolean,
      default: true
    },
    isHover: { //是否要移入的效果
      type: Boolean,
      default: true
    },
    isRadius:{ //按钮是否圆角
      type: Boolean,
      default: false
    },
    hasTimeOut:{ //设置是否设置防抖
        type:Boolean,
        default:false
    },
    hasBetween:{ //设置节流(执行一次之后一段时间后执行第二次)
        type:Boolean,
        default:false
    },
    betweenTime:{ //设置节流时间  默认1秒
        type:Number,
        default:3000
    }
  },
  watch: {},
  methods: {
    clickfn(){
        let that = this;
        if(this.hasTimeOut){ //防抖
            if(this.timeout){
                clearInterval(this.timeout)
            }
            this.timeout = setTimeout(() => {
                if(that.disabled){
                    that.$emit('click');
                }
            }, 500);
        }else if(this.hasBetween){ //节流 一段时间后才会执行第一次
            if(!that.between) return;
            that.between = false;
            setTimeout(() => {
                that.$emit('click');
                that.between = true;
            }, that.betweenTime);

        }else{ //正常调用
            that.$emit('click');
        }
    },
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// 默认
button{
    width: 100%;
    border-radius: 5px;
}
.lzo-button{
    // user-select:none;

    font-size: 15px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.15);
    &.click:active{
        text-shadow: 0 1px 0 hsla(0,0%,100%,.3);
        text-decoration: none;
        transition-duration: 0s;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 0 #fff;
    }
    &.radius{
        border-radius:1000px;
    }
    &.hover:hover{
        opacity:.9;
    }
    &.disabled {
        opacity: 0.8;
    }
}
// 默认
.lzo-button.default{
    color: #333;
    border: 1px solid #eee;
    background: linear-gradient(ivory,#eee);
    &.click:active{
        background: linear-gradient(#eee,ivory);
        color: #aaa;
    }
}
//主要样式
.lzo-button.primary{
  color: #fff;
  border: 1px solid #088ef0;
  background: linear-gradient(#34a5f8, #088ef0);
  &.click:active {
    border-color: #0880d7;
    background: #2798eb;
    color: #0880d7;
  }
}
//信息样式
.lzo-button.info{
  color: #fff;
  border: 1px solid #767C86;
  background: linear-gradient(#a4a5a9, #767C86);
  &.click:active {
    border-color: #83858e;
    background: #a4a5a9;
    color: #83858e;
  }
}
//危险样式
.lzo-button.danger{
  color: #fff;
  border: 1px solid #ff2939;
  background: linear-gradient(#ff5c69,#ff2939);
  &.click:active {
    border-color: #ff1022;
    background: #f64c59;
    color: #ff1022;
  }
}
//告警样式
.lzo-button.warning{
  color: #fff;
  border: 1px solid #D68915;
  background: linear-gradient(#D89834,#D68915);
  &.click:active {
    border-color: #DB8B0F;
    background: #E5A540;
    color: #DB8B0F;
  }
}
//成功样式
.lzo-button.success{
  color: #fff;
  border: 1px solid #50C41A;
  background: linear-gradient(#67C23A,#50C41A);
  &.click:active {
    border-color: #50C41A;
    background: #6CBC46;
    color: rgb(57, 160, 9);
  }
}
//黑色样式
.lzo-button.black{
  color: #eee;
  border-color: #151515;
  background: linear-gradient(#2f2f2f, #151515);
  &.click:active {
    border-color: #090909;
    background: #222222;
    color:#090909;
  }
}
</style>