<template>
  <div>
    <div class="title-wrapper">
      <h3 class="title" contenteditable="true" :style="moduleTitleStyle">
        {{ title }}
      </h3>
      <div class="triangle" :style="moduleTriangleStyle"></div>
    </div>
    <div class="line"></div>
    <slot>
      <dash-child class="desc-wrapper">
        <p class="desc" contenteditable="true">
          1......<br>
          2......<br>
          3......
        </p>
      </dash-child>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
  import dashChild from '../dashChild/dashChild.vue';

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      moduleTriangleStyle: {
        type: Object
      },
      moduleTitleStyle: {
        type: Object
      }
    },
    components: {
      dashChild
    },
    methods: {
      val(icon) {
        if (icon) {
          return require('./' + icon);
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title-wrapper
    display: inline-block
    position: relative

  .title
    outline: none
    font-size: 20px
    font-weight: bold
    line-height: 30px
    color: #ffffff
    display: inline-block
    padding: 5px 15px 4px
    background: #009f95
    border-bottom: 1px solid transparent

  .triangle
    position: absolute
    width: 0
    height: 0
    top: 0
    right: -40px
    margin-left: -2px
    border: 20px solid
    border-top-color: transparent
    border-right-color: transparent

  .line
    height: 20px
    margin-top: -20px
    background: #e5e5e5

  .desc-wrapper
    margin-top: 20px
    .desc
      outline: none
      line-height: 25px
      &:foucus
        outline: none
</style>
