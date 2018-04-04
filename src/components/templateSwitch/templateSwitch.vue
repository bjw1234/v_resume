<template>
  <div class="templateSwitch">
    <div class="template-switch-hidden" @click="templateSwitchHide">缩起</div>
    <div class="template-item-wrapper clearfix">
      <template-item v-for="item in templateList"
                     :icon="item.icon"
                     :address="item.address"
                     @templateClick="templateClickListener"
                     :key="item.id"></template-item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import templateItem from '../templateItem/templateItem.vue';

  export default {
    components: {
      templateItem
    },
    data() {
      return {
        templateList: [
          {
            icon: 'a.png',
            address: '/'
          }, {
            icon: 'b.png',
            address: '/two'
          }, {
            icon: 'c.png',
            address: '/three'
          }
        ]
      };
    },
    methods: {
      // 点击收缩按钮
      templateSwitchHide() {
        this.$emit('templateSwitchHide', 'hidden');
      },
      // 点击某一个模板
      templateClickListener() {
        this.$emit('templateSwitchHide', 'hidden');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .templateSwitch
    .template-switch-hidden
      text-align: center
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

</style>
