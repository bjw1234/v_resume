<template>
  <li class="color-picker-item"
      :class="{'active':isPicked}"
      :style="{'background-color':color}"
      @click="eventPicker">
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      color: {
        type: String,
        default: 'yellow'
      },
      curColor: {
        type: String,
        default: ''
      }
    },
    watch: {
      curColor(newVal) { // 监听用户选择的颜色
        if (newVal === this.color) {
          this.isPicked = true;
        } else {
          this.isPicked = false;
        }
      }
    },
    data() {
      return {
        isPicked: false
      };
    },
    methods: {
      eventPicker() {
        this.isPicked = true;
        this.$emit('eventPicker', this.color);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .color-picker-item
    width: 20px
    height: 20px
    cursor: pointer
    list-style-type: none
    border: 2px solid transparent

  .color-picker-item.active
    border: 2px solid #222
    &:after
      content: ""
      position: absolute
      width: 20px
      height: 20px
      margin-left: -10px
      display: inline-block
      background-size: 20px 20px
      background: url(../../../static/image/yes.png) left top no-repeat
</style>
