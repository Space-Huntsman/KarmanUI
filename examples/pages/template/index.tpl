<template>
    <div class="home-container">
        <div class="content">
            <span class="slogen"></span>
            <p class="intro"> 基于 Vue 2.x
                开发的高质量桌面端UI组件库，作为首个提供航天工程类UI组件库，该组件库不仅可满足常规项目组件使用需求，同时还包含了一些航天测运控方向显示组件，目前已经可满足轨道根数、预报、星下点等显示需求。
            </p>
        </div>


        <div class="space">
            <div class="space-stars"></div>
            <div class="space-red-star"></div>
            <div class="space-rocket"></div>
            <div class="space-blue-star"></div>
            <div class="space-satellite"></div>
        </div>
        <div class="space-bottom-hole"></div>
    </div>
</template>
<style lang="scss">
  @mixin calcVw($width,$type:width) {
     #{$type}:calc(#{$width / 1920} * 100vw);
  }
  @mixin calcVh($height,$type:height) {
    #{$type}:calc(#{$height / 1080} * 100vh);
  }

  .home-container {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
    overflow: hidden;
    position: relative;

    & > .content {
      position: absolute;
      z-index: 2;
      left: 54px;
      top: 32%;

      .slogen {
        background-image: url("~examples/assets/images/home/slogen.png");
        background-size: cover;
        display: block;
        width: 403px;
        height: 64px;
      }

      & > .intro {
        margin-top: 60px;
        width: 45%;
        height: 13%;
        font-size: 24px;
        font-weight: 400;
        line-height: 40px;
        color: #3A3A3A;
        letter-spacing: 6px;
        text-indent: 2em;
      }
    }

    & > .space {
      background-image: url("~examples/assets/images/home/space-bg.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 1;
      right: 0;
      top: 0;
      width: 66%;
      height: 91%;

      & .space-stars {
        background-image: url("~examples/assets/images/home/space-stars.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      & .space-red-star {
        background-image: url("~examples/assets/images/home/space-red-star.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        @include calcVw(707);
        @include calcVw(222,right);
        @include calcVh(496);
        @include calcVh(435,top);
      }

      & .space-rocket {
        background-image: url("~examples/assets/images/home/space-rocket.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        @include calcVw(453);
        @include calcVw(702,right);
        @include calcVh(540);
        @include calcVh(108,top);
      }
      & .space-blue-star {
        background-image: url("~examples/assets/images/home/space-blue-star.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        @include calcVw(91);
        @include calcVw(524,right);
        @include calcVh(91);
        @include calcVh(206,top);
      }
      & .space-satellite {
        background-image: url("~examples/assets/images/home/space-satellite.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        @include calcVw(364);
        @include calcVw(55,right);
        @include calcVh(359);
        @include calcVh(34,top);
      }
    }

    & > .space-bottom-hole {
      background-image: url("~examples/assets/images/home/space-bottom-hole.png");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 1;
      left: -7%;
      bottom: -29%;
      width: 29%;
      height: 50%;
    }
  }
</style>
<script>
  export default {
    created() {
    },
    methods: {},
    data() {
      return {
        lang: this.$route.meta.lang,
        mainImgOffset: 0
      };
    },
    beforeDestroy() {
    },
    mounted() {
    }
  };
</script>
