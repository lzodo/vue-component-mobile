<template>
    <p class="AppLine">
       <span class="font">4</span>
       <span class="font2"> {{centertxt}}</span>
    </p>
</template>
<script>
export default {
    name:'AppLine',
    props:{
        centertxt:{
            type:String,
            default:'分割线'
        }
    },
    data(){
        return {
           
        }
    },
    mounted() {

    }
}

</script>
<style lang="scss">
.AppLine{
    // display: table;
    // white-space: nowrap;
    // height: auto;
    // overflow: hidden;
    // line-height: 1;
    text-align: center;
    padding: 10px 15px;
    font-size: 15px;
    color: #888;
    background: #fff;
    margin:5px 0;
    position: relative;
    // .font{
    //     background:inherit;
    //     display: block;
    //     padding:0 10px;
    // }
    .font2{
        background:inherit;
        display: block;
        padding:0 10px;
        position: absolute;
        height: 100%;
        top:0;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
    }
    &:before{
        content: ' ';
        display: table-cell;
        position: absolute;
        top: 50%;
        width: 50%;
        border-top: 1px solid #ddd;
    }
    &:after{
        content: ' ';
        display: table-cell;
        position: absolute;
        top: 50%;
        width: 50%;
        right: 0;
        border-top: 1px solid #ddd;
    }
}
</style>
