<template>
    <p class="AppLine">
       {{centertxt}}
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
    display: table;
    white-space: nowrap;
    height: auto;
    overflow: hidden;
    line-height: 1;
    text-align: center;
    padding: 10px;
    color: #666;
    &:before{
        content: '';
        display: table-cell;
        position: relative;
        width: 50%;
        background-repeat: no-repeat;
        background-position: right 10px top 50%;
        background-image: url(~@static/images/line.png);
    }
    &:after{
         content: '';
        display: table-cell;
        position: relative;
        width: 50%;
        background-repeat: no-repeat;
        background-image: url(~@static/images/line.png);
        background-position: left 10px top 50%;
    }
}
</style>
