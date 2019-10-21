<template>
    <div class=" lzo-warp Sxbk">
        <lzo-header class="myheader" @leftClick="$router.go(-1)">蛇形边框</lzo-header>
        <div class="Sxbk-main">   
            <div class="Sxbk-cen one"></div>
            <div class="Sxbk-cen two"></div>
            <div class="Sxbk-cen three"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SxbjCssCase',
    data(){
        return {
           
        }
    },
}

</script>
<style lang="scss">
$width:190px;
$height:90px;
$borderWidth:5px;
.Sxbk{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.Sxbk-main{
    flex:1;
    padding-top: 30px;
}
.Sxbk-cen{
    position: relative;
    width: $width;
    height: $height;
    background: aqua;
    margin-bottom: 20px;
}
.Sxbk-cen:before,.Sxbk-cen:after{
    content: "";
    position: absolute;
    top: -5px;
    left:-5px;
    right: -5px;
    bottom: -5px;
    // 1上到下高度  2左到右宽度 3下到上高度 4右到左宽度(取1,3和2,4的交叉距离) 
     //clip:rect(0,200px,100px,195px);
}
//item
.Sxbk-cen.one:after{
    border:$borderWidth solid #ff000088;
    animation: move2 3s linear infinite;
}
.Sxbk-cen.one:before{
    border:$borderWidth solid #ff00ff88;
    animation: move 3s linear infinite;
}

.Sxbk-cen.two:after{
    border:$borderWidth solid #ff000088;
    animation: move2 3s linear infinite;
}
.Sxbk-cen.two:before{
    border:$borderWidth solid #ff00ff88;
    animation: move 3s linear infinite reverse;
}

.Sxbk-cen.three:after{
    top: 0px;
    left:0px;
    right: 0px;
    bottom: 0px;
    border:$borderWidth solid #ff000088;
    animation: move2 3s linear infinite;
}
.Sxbk-cen.three:before{
    top: 0px;
    left:0px;
    right: 0px;
    bottom: 0px;
    border:$borderWidth solid #ff00ff88;
    animation: move 3s linear infinite;
}
@keyframes move{
    0%,100%{
        clip:rect(0,$width+$borderWidth*2,$borderWidth,0); //1
    }
    25%{
        clip:rect(0,$width+$borderWidth*2,$height+$borderWidth*2,$width - $borderWidth); //2
    }
    50%{
        clip:rect($height - $borderWidth,$width+$borderWidth*2,$height+$borderWidth*2,0); //3
    }
    75%{
        clip:rect(0,$borderWidth,$height+$borderWidth*2,0); //4
    }
}
@keyframes move2{
    0%,100%{
         clip:rect($height - $borderWidth,$width+$borderWidth*2,$height+$borderWidth*2,0); //3
    }
    25%{
        clip:rect(0,$borderWidth,$height+$borderWidth*2,0); //4
    }
    50%{
        clip:rect(0,$width+$borderWidth*2,$borderWidth,0); //1
    }
    75%{
        clip:rect(0,$width+$borderWidth*2,$height+$borderWidth*2,$width - $borderWidth); //2
    }
}
</style>
