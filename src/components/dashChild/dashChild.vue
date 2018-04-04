<template>
  <div v-if="isShow" class="dash-child" :class="[isActive? 'active':'']"
       @mouseover="showDash" @mouseleave="hideDash">
    <span class="icon-delete-item" v-if="isActive" @click="deleteItem"></span>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isActive: false,
        isShow: true
      };
    },
    methods: {
      showDash() {
        this.isActive = true;
      },
      hideDash() {
        this.isActive = false;
      },
      deleteItem() {
        this.isShow = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dash-child.active
    border: 1px dashed #00c091

  .dash-child
    position: relative
    cursor: pointer
    border: 1px dashed transparent
    outline: none
    .icon-delete-item
      position: absolute
      right: -10px
      top: 50%
      z-index: 2
      transform: translateY(-50%)
      width: 18px
      height: 18px
      background: red url(../../../static/image/toolbar.png) no-repeat 0 0;
      background-position: -70px -66px
      border-radius: 50%
      &:hover
        background-color: #ff3e3b
</style>
