<template>
    <div class=" lzo-warp Sxbk">
        <div class="Sxbk-cen"></div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
           
        }
    },
    mounted() {

    }
}

</script>
<style lang="scss">
.Sxbk{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Sxbk-cen{
    position: relative;
    width: 190px;
    height: 190px;
    background: aqua;
}
.Sxbk-cen:before,.Sxbk-cen:after{
    content: "";
    position: absolute;
    top: -5px;
    left:-5px;
    right: -5px;
    bottom: -5px;
    border:5px solid #ff00ff88;
    // background: pink;
    animation: move 3s linear infinite;
    //  clip:rect(0,200px,5px,0);
    //  clip:rect(0,200px,200px,195px);
}
.Sxbk-cen:after{
    border:5px solid #ff000088;
    animation: move 3s linear infinite 1.5s;
}
@keyframes move{
    0%,100%{
        clip:rect(0,200px,5px,0);
    }
    25%{
        clip:rect(0,200px,200px,195px);
    }
    50%{
        clip:rect(195px,200px,200px,0);
    }
    75%{
        clip:rect(0,5px,200px,0);
    }
}
</style>
