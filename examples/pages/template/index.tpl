<template>
    <div class="home-container">
        <header v-if="animateStatus">

            <kui-row class="header-row  animate__animated   animate__fadeInLeft	" justify="space-around">
                <kui-col :span="6" class="logo-mini">
                    <img width="35" :src="logoUrl"/>
                </kui-col>
                <kui-col :span="18" class="nav-items">
                    <kui-link type="primary">首页</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link :href="`/#/${ lang }/component`">组件</kui-link>
                    <kui-divider direction="vertical"></kui-divider>
                    <kui-link @click="pathTo('https://github.com/Space-Huntsman/KarmanUI',true)"><i
                                class="kui-icon-github"/> Git 仓库
                    </kui-link>
                </kui-col>
            </kui-row>
        </header>
        <div class="content" v-if="animateStatus">
            <transition name="kui-fade-in-linear">
                <span ref="slogen"
                      class="slogen  slogen-light  animate__animated  animate__delay-5ss  animate__fadeInLeft"></span>
            </transition>
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
                    <kui-button class="button-git" icon="kui-icon-github"
                                @click="pathTo('https://github.com/Space-Huntsman/KarmanUI',true)" round plain>Git仓库
                    </kui-button>
                </kui-col>
            </kui-row>
        </div>


        <div class="space-mask   animate__animated  animate__delay-10ss animate__fadeIn animate__duration-30ss"
             v-if="animateStatus">
        </div>

        <div v-if="animateStatus===1||animateStatus===0" class="space animate__animated animate__duration-20ss">
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
        <div class="space-bottom-hole  animate__animated animate__delay-20ss animate__fadeInUpBig"
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
      padding: 20px 0 0 54px;
      width: 400px;

      & .logo-mini {
        max-width: 70px;

        & > img {
          border-radius: 8px;
          overflow: hidden;
        }
      }

      & .nav-items {
        line-height: 45px;

        & .kui-link {
          padding: 0 20px;
          font-size: 16px;
        }
      ;
      }
    }

    & > .content {
      position: absolute;
      z-index: 4;
      left: 54px;
      top: 28%;
      padding-top: 150px;

      .slogen {
        background-image: url("~examples/assets/images/home/slogen.png");
        background-size: 100% 100%;
        display: block;
        @include calcVw(548);
        @include calcVh(101);
        z-index: 4;
        position: absolute;
        top: 0;
        left: 0;

        &.slogen-light {
          background-image: url("~examples/assets/images/home/slogen-w.png");
          z-index: 5;
          position: absolute;
        }
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
        margin-top: 61px;
        width: 350px;

        .kui-button {
          width: 100%;

          &.button-start {
            box-shadow: 0px 8px 20px 0px rgba(51, 102, 255, 0.47);

            &:hover {
              box-shadow: 0px 12px 20px 0px rgba(51, 102, 255, 0.47);

            }

          }

          &.button-git {
            border-color: #000000;

            &:hover {
              border-color: #3366FF;
            }
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

    & .space {
      @keyframes gradientLinear {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 200% 0;
        }
      }

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
        @include calcVw(707*0.9);
        @include calcVw(222*0.9, right);
        @include calcVh(496*0.9);
        @include calcVh(435*1.1, top);
      }

      & .space-rocket {
        background-image: url("~examples/assets/images/home/space-rocket.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        @include calcVw(453);
        @include calcVw(572, right);
        @include calcVh(540);
        @include calcVh(78, top);
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
        @include calcVw(445, right);
        @include calcVh(91);
        @include calcVh(258, top);
      }

      & .space-satellite {
        background-image: url("~examples/assets/images/home/space-satellite.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        @include calcVw(270);
        @include calcVw(66, right);
        @include calcVh(266);
        @include calcVh(93, top);
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
          this.$router.push({path: `/${this.lang}/${path}`});
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
        logoUrl: require('examples/assets/images/logo/logo-rect.png'),
        loadImages: [
          require('examples/assets/images/home/slogen.png'),
          require('examples/assets/images/home/space-blue-star.png'),
          require('examples/assets/images/home/space-bottom-hole.png'),
          require('examples/assets/images/home/space-mask.png'),
          require('examples/assets/images/home/space-red-star.png'),
          require('examples/assets/images/home/space-rocket.png'),
          require('examples/assets/images/home/space-satellite.png'),
          require('examples/assets/images/home/space-stars.png')
        ]
      };
    },
    beforeDestroy() {
    },
    mounted() {
      this.animateStatus = 1;
      setTimeout(() => {
        this.animateStatus = 2;
      }, 4000);
      let loadImageCount = 0;
      let loadImageCallBack = () => {
        loadImageCount++;
        if (loadImageCount === this.loadImages.length) {
          setTimeout(() => {
            this.animateStatus = 1;
            // animate__delay-5ss  animate__fadeInLeft

            setTimeout(() => {
              this.$refs.slogen.className = 'slogen slogen-light animate__animated animate__fadeOut animate__duration-20ss';
            }, 500);
            setTimeout(() => {
              this.$refs.slogen.remove();
            }, 2500);
            setTimeout(() => {
              this.animateStatus = 2;
            }, 4000);
          }, 1000);
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
