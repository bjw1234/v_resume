<template>
  <div class="template-item" @click="templateClick">
    <router-link :to="address" class="template-wrapper">
      <img :src="val(icon)" alt="" class="template-img">
      <div class="choose-btn">选择</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      }
    },
    methods: {
      val(icon) {
        if (icon) {
          return require('./' + icon);
        }
      },
      templateClick() {
        this.$emit('templateClick', 'hidden');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .template-item
    float: left
    width: 136px
    height: 192px
    padding: 20px 0 0 20px
    .template-wrapper
      display: block
      width: 100%
      height: 100%
      cursor: pointer
      position relative
      box-shadow 3px 2px 15px #666
      &:hover
        &:after
          content: ''
          position: absolute
          left: 0
          top: 0
          bottom: 0
          right: 0
          background: rgba(0, 0, 0, 0.4)
        .choose-btn
          opacity: 1
      .template-img
        width: 100%
        height: 100%
      .choose-btn
        position: absolute
        left: 50%
        top: 50%
        width: 70px
        height: 30px
        color: #ffffff
        z-index: 5
        line-height: 30px
        border-radius: 3px
        text-align: center
        background-color: #00c091
        transform: translate(-50%, -50%)
        opacity: 0
</style>
