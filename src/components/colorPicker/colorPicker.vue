<template>
  <!--颜色选择器-->
  <div id="colorPicker" v-show="false">
    <div class="color-picker-hidden" @click="colorPickerHide">缩起</div>
    <div class="color-text">颜色选择器</div>
    <div class="picker-item-wrapper">
      <color-picker-item v-for="item in colors"
                         class="picker-item"
                         :color="item" :key="item.id"
                         :curColor="curColor"
                         @eventPicker="eventPickerListener">
      </color-picker-item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import colorPickerItem from '../colorPickerItem/colorPickerItem.vue';

  export default {
    components: {
      colorPickerItem
    },
    data() {
      return {
        curColor: '', // 当前用户选择的颜色
        colors: [
          '#254665', '#589bf7', '#ff7171', '#37b754',
          '#292929', '#ee7000', '#a29177', '#da180f',
          '#6b4b24', '#048BB3', '#5974D4', '#9D57CA',
          '#d4ba38', '#69cc41', '#0b70bd', '#000'
        ]
      };
    },
    methods: {
      // 颜色选择回调
      eventPickerListener(color) {
        this.curColor = color;
        this.$emit('colorPicked', color);
      },
      // 点击收起
      colorPickerHide() {
        this.$emit('colorPickerHide', 'hidden');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  // 颜色选择器样式
  #colorPicker
    .color-picker-hidden
      padding-top: 10px
      font-size: 20px
      color: #222
      border-bottom 1px solid #ccc
      line-height: 50px
      padding-bottom: 10px
      cursor: pointer
      &:hover
        color: #ffffff
        background-color: #aaa
      &:before
        content: ""
        position: absolute
        top: 28px
        left: 79px
        display: inline-block
        width: 8px
        height: 14px
        background: transparent url(../../../static/image/toolbar.png) -357px -144px no-repeat

    .color-text
      margin-top: 30px
      font-size: 20px
      text-align: left
      padding-left: 20px

  .picker-item-wrapper
    padding-left: 20px
    margin-top: 30px
    .picker-item
      float: left
      margin-right: 20px
      margin-bottom: 20px

</style>
