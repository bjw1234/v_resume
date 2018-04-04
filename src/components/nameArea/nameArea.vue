<template>
  <div>
    <dash-child class="user-name">
      <div class="name-wrapper">
        <input class="name-content" :value="nameInfo.name" placeholder="姓名">
      </div>
    </dash-child>
    <dash-child class="description">
      <span class="desc-content" contenteditable="true">
        <span v-if="nameInfo.desc===''">一句话介绍自己，为什么HR选择你...</span>
        {{nameInfo.desc}}
      </span>
    </dash-child>
  </div>
</template>

<script type="text/ecmascript-6">

  import dashChild from '../dashChild/dashChild.vue';
  import dashParent from '../dashParent/dashParent.vue';

  export default {
    props: {
      nameInfo: {
        type: Object
      }
    },
    components: {
      dashChild,
      dashParent
    },

    data() {
      return {
        isActive: false
      };
    },
    methods: {
      showDash() {
        this.isActive = true;
      },
      hideDash() {
        this.isActive = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  // 设置placeHolder颜色
  @import "../../common/placeholder.styl"
  .user-name
    .name-content
      display: inline-block
      background: none
      font-size: 25px
      width: 90%
      height: 30px
      padding-left: 2px
      line-height: 30px
      color: #ffffff
      outline: none
      border: none

  .description
    margin-top: 20px
    .desc-content
      display: inline-block
      padding-left: 2px
      height: 22px
      width: 100%
      line-height: 22px
      outline: none
</style>
