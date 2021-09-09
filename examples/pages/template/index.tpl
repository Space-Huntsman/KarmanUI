<template>
    <div class="home-container">
        <header v-if="animateStatus">

            <kui-row class="header-row  animate__animated   animate__fadeInLeft	" justify="space-around">
                <kui-col :span="6" class="logo-mini">
                    <img width="45" src="examples/assets/images/logo/logo-rect.png"/>
                </kui-col>
                <kui-col :span="18" class="nav-items">
                    <kui-link type="primary">首页</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link :href="`/#/${ lang }/component`">组件</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link @click="pathTo('https://github.com/Space-Huntsman/KarmanUI',true)" ><i class="kui-icon-github"/> Git 仓库</kui-link>
                </kui-col>
            </kui-row>
        </header>
        <div class="content" v-if="animateStatus">
            <span class="slogen  animate__animated  animate__delay-5ss  animate__fadeInLeft"></span>
            <p class="intro  animate__animated animate__delay-10ss  animate__fadeInLeft"> 基于 Vue 2.x
                开发的高质量桌面端UI组件库，作为首个提供航天工程类UI组件库，该组件库不仅可满足常规项目组件使用需求，同时还包含了一些航天测运控方向显示组件，目前已经可满足轨道根数、预报、星下点等显示需求。
            </p>
            <kui-row class="button animate__delay-15ss  animate__animated   animate__fadeInLeft" :gutter="30">
                <kui-col :span="12">
                    <kui-button class="button-start" @click="pathTo('component')" type="primary" round
                                icon="kui-icon-notebook-2">开始使用
                    </kui-button>
                </kui-col>
                <kui-col :span="12">
                    <kui-button icon="kui-icon-github" @click="pathTo('https://github.com/Space-Huntsman/KarmanUI',true)" round plain>Git仓库</kui-button>
                </kui-col>
            </kui-row>
        </div>


        <div class="space-mask" v-if="animateStatus">
        </div>

        <div v-if="animateStatus===1||animateStatus===0" class="space animate__animated animate__duration-5ss">
            <template v-if="animateStatus===1">
                <div class="space-stars animate__animated  animate__flash animate__infinite animate__duration-150ss"></div>

                <div class="space-rocket animate__animated animate__delay-20ss  animate__fadeInLeft"></div>
                <div class="space-blue-star animate__animated animate__delay-25ss animate__bounceInDown"></div>
                <div class="space-satellite animate__animated animate__delay-30ss animate__fadeInRight"></div>
            </template>
        </div>
        <div v-if="animateStatus===2" class="space animate__animated animate__duration-50ss">
            <div class="space-stars animate__animated  animate__flash animate__infinite animate__duration-60ss"></div>
            <div class="space-rocket animate__animated   animate__shakeLinear animate__infinite animate__duration-30ss animate__linear"></div>
            <div class="space-blue-star animate__animated animate__shakeLinear animate__infinite animate__duration-100ss"></div>
            <div class="space-satellite animate__animated  animate__pulse animate__infinite animate__duration-50ss"></div>
        </div>
        <div v-if="animateStatus===1"
             class="space-red-star space-blue-star animate__animated animate__delay-35ss animate__bounceInDown "></div>
        <div v-if="animateStatus===2"
             class="space-red-star space-blue-star animate__animated animate__duration-150ss  animate__shakeY animate__infinite  "></div>
        <div class="space-bottom-hole  animate__animated animate__delay-20ss animate__rotateInDownLeft"
             v-if="animateStatus===1"></div>
        <div class="space-bottom-hole  animate__animated animate__duration-120ss  animate__pulse animate__infinite"
             v-if="animateStatus===2"></div>
        <div class="copyright">
            &copy;陕备案 XXXXXXXXXXXXXXXX-1号
        </div>
    </div>
</template>
<style lang="scss">

  @import "examples/assets/styles/mixin.scss";

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

        & > img {
          border-radius: 8px;
          border: 1px solid #3366FF;
          overflow: hidden;
        }
      }

      & .nav-items {
        line-height: 45px;

        & .kui-link {
          padding: 0 20px;
        }
      ;
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
      //display: none;
    }

    & .space {
      @keyframes gradientLinear {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      border: 2px solid #3366FF;
      background-image: linear-gradient(65deg, #9e195b 0%, #9e195b 20%, #29235c 60%, #9e195b 90%, #9e195b 100%);
      position: absolute;
      background-size: 200% 200%;
      background-repeat: repeat-x;
      z-index: 1;
      @include calcVw(1920);
      right: 0;
      @include calcVh(1080);
      top: 0;
      animation-timing-function: linear;
      animation-name: gradientLinear;
      animation-iteration-count: infinite;

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
      z-index: 4;
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
    methods: {
      pathTo(path, redirect = false) {
        if (redirect) {
          window.open(path, '_blank');
        } else {
          this.$router.push({path:`/${this.lang}/${path}`});
        }
      }
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      }
    },
    data() {
      return {
        lang: this.$route.meta.lang,
        mainImgOffset: 0,
        animateStatus: 0,
        loadImages: [
          'examples/assets/images/home/slogen.png',
          'examples/assets/images/home/space-blue-star.png',
          'examples/assets/images/home/space-bottom-hole.png',
          'examples/assets/images/home/space-mask.png',
          'examples/assets/images/home/space-red-star.png',
          'examples/assets/images/home/space-rocket.png',
          'examples/assets/images/home/space-satellite.png',
          'examples/assets/images/home/space-stars.png'
        ]
      };
    },
    beforeDestroy() {
    },
    mounted() {
      let loadImageCount = 0;
      let loadImageCallBack = () => {
        loadImageCount++;
        if (loadImageCount === this.loadImages.length) {
          this.animateStatus = 1;
          setTimeout(() => {
            this.animateStatus = 2;
          }, 4000);
        }
      };
      this.loadImages.forEach(url => {
        let img = new Image();
        img.src = url;
        img.onload = loadImageCallBack;
      });
    }
  };

</script>
