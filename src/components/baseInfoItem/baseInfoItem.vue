<template>
  <dash-child class="item">
    <img class="icon" :src=val(icon)>
    <div class="text" contenteditable="true">
      {{title}}
      <span v-if="title===''">{{holder}}</span>
    </div>
  </dash-child>
</template>

<script type="text/ecmascript-6" scoped>

  import dashChild from '../dashChild/dashChild.vue';

  export default {
    components: {
      dashChild
    },
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      holder: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isActive: false
      };
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
  // 设置placeHolder颜色
  @import "../../common/placeholder.styl"
  .item
    text-align: left
    margin: 10px 0
    .icon
      position: absolute
      width: 18px
      height: 18px
      margin-top: 3px
    .text
      display: inline-block
      width: 100%
      padding: 5px 0 5px 30px
      box-sizing: border-box
      background-color: transparent
      outline: none
      border: none
</style>
