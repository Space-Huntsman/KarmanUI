<template>
    <div class="home-container">
        <header>

            <kui-row class="header-row" justify="space-around">
                <kui-col :span="6" class="logo-mini">
                    <img width="45" src="examples/assets/images/logo/logo-rect.png"/>
                </kui-col>
                <kui-col :span="18" class="nav-items">
                    <kui-link type="primary">首页</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link>组件</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link>Git 仓库</kui-link>
                </kui-col>
            </kui-row>

        </header>
        <div class="content">
            <span class="slogen"></span>
            <p class="intro"> 基于 Vue 2.x
                开发的高质量桌面端UI组件库，作为首个提供航天工程类UI组件库，该组件库不仅可满足常规项目组件使用需求，同时还包含了一些航天测运控方向显示组件，目前已经可满足轨道根数、预报、星下点等显示需求。
            </p>
            <kui-row class="button" :gutter="30">
                <kui-col :span="12">
                    <kui-button class="button-start" type="primary" round icon="kui-icon-notebook-2">开始使用</kui-button>
                </kui-col>
                <kui-col :span="12">
                    <kui-button icon="kui-icon-github" round plain>Git仓库</kui-button>
                </kui-col>
            </kui-row>
        </div>


        <div class="space-mask">
        </div>
        <div class="space">
            <div class="space-stars"></div>

            <div class="space-rocket"></div>
            <div class="space-blue-star"></div>
            <div class="space-satellite"></div>
        </div>
        <div class="space-red-star"></div>
        <div class="space-bottom-hole"></div>
        <div class="copyright">
            &copy;陕备案 XXXXXXXXXXXXXXXX-1号
        </div>
    </div>
</template>
<style lang="scss">
  @mixin calcVw($width,$type:width) {
  #{$type}:calc(#{$width / 1920} * 100vw);
  }

  @mixin calcVh($height,$type:height) {
  #{$type}:calc(#{$height / 1080} * 100vh);
  }

  @mixin calcVwh($width,$height,$type:background-size) {
  #{$type}:calc(#{$width / 1920} * 100vw) calc(#{$height / 1080} * 100vh);
  }

  .home-container {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
    overflow: hidden;
    position: relative;

    & > header {
      position: absolute;
      z-index: 4;
      left: 0;
      top: 0;
      padding: 48px 0 0 54px;
      width: 400px;

      & .logo-mini {
        max-width: 80px;
        & > img{
          border-radius: 8px;
          border: 1px solid #3366FF;
          overflow: hidden;
        }
      }

      & .nav-items {
        line-height: 45px;
        & .kui-link{
          padding: 0 20px;
        };
      }
    }

    & > .content {
      position: absolute;
      z-index: 4;
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
        width: 45vw;
        height: auto;
        font-size: 20px;
        font-weight: 400;
        line-height: 40px;
        color: #3A3A3A;
        letter-spacing: 4px;
        text-indent: 2em;
      }

      & > .button {
        margin-top: 51px;
        width: 400px;

        .kui-button {
          width: 100%;

          &.button-start {
            box-shadow: 0px 8px 20px 0px rgba(51, 102, 255, 0.47);
          }
        }
      }
    }

    & > .space-mask {
      background-image: url("~examples/assets/images/home/space-mask.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 3;
      height: 100%;
      right: 0;
      width: 100%;
      top: 0;
    }

    & > .space {
      background-image: linear-gradient(45deg, #29235c 70%, #9e195b 100%);
      background-repeat: no-repeat;
      position: absolute;
      z-index: 1;
      @include calcVw(1920);
      right: 0;
      @include calcVh(1080);
      top: 0;

      & .space-stars {
        background-image: url("~examples/assets/images/home/space-stars.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        @include calcVw(1238);
        right: 0;
        @include calcVh(961.5);
        top: 0;
      }

      &-red-star {
        background-image: url("~examples/assets/images/home/space-red-star.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 4;
        right: 0;
        top: 0;
        @include calcVw(707);
        @include calcVw(222, right);
        @include calcVh(496);
        @include calcVh(435, top);
      }

      & .space-rocket {
        background-image: url("~examples/assets/images/home/space-rocket.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        @include calcVw(453);
        @include calcVw(702, right);
        @include calcVh(540);
        @include calcVh(108, top);
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
        @include calcVw(524, right);
        @include calcVh(91);
        @include calcVh(206, top);
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
        @include calcVw(55, right);
        @include calcVh(359);
        @include calcVh(34, top);
      }
    }

    & > .space-bottom-hole {
      background-image: url("~examples/assets/images/home/space-bottom-hole.png");
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 2;
      @include calcVw(546);
      @include calcVw(-133, left);
      @include calcVh(531);
      @include calcVh(-310, bottom);
    }

    & > .copyright {
      width: 100%;
      height: auto;
      text-align: center;
      color: #CCCCCC;
      position: absolute;
      bottom: 20px;
      left: 0;
      z-index: 5;
      font-size: 14px;

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
