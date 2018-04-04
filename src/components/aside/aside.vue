<template>
  <div class="aside">
    <div class="publish">
      <a class="publish-btn" href="javascript:void(0);" @click="saveAsPDF">
        <span class="text">PDF下载</span>
      </a>
    </div>
    <div class="publish">
      <a class="publish-btn" href="javascript:void(0);" @click="saveAsPNG">
        <span class="text">PNG下载</span>
      </a>
    </div>
    <ul class="manager">
      <li class="manager-item" @click="templateSwitch">
        <i class="icon model"></i>
        <a class="text" href="javascript:void(0);">模板切换</a>
      </li>
      <li class="manager-item" @click="styleSetting">
        <i class="icon style"></i>
        <a class="text" href="javascript:void(0);">风格设置</a>
      </li>
    </ul>

    <!--颜色选择器-->
    <color-picker v-show="false" id="colorPicker"
                  @colorPicked="colorPickedListener"
                  @colorPickerHide="colorPickerHideListener"></color-picker>

    <!--模板切换-->
    <template-switch v-show="false" id="templateSwitch"
                     @templateSwitchHide="templateSwitchHideListener"></template-switch>

  </div>
</template>

<script type="text/ecmascript-6">

  import colorPicker from '../colorPicker/colorPicker.vue';
  import templateSwitch from '../templateSwitch/templateSwitch.vue';
  export default {
    components: {
      colorPicker,
      templateSwitch
    },
    data() {
      return {
        dialogIndex: 0
      };
    },
    methods: {
      styleSetting() {
        this.dialogIndex = this.$layer.open({
          type: 1,
          title: 0,
          content: this.$jquery('#colorPicker'),
          anim: 2,
          btn: 0,
          move: 0,
          closeBtn: 0,
          shade: false,
          area: ['220px', '100%'],
          offset: ['32px', '0']
        });
      },
      // 模板切换
      templateSwitch() {
        this.dialogIndex = this.$layer.open({
          type: 1,
          title: 0,
          content: this.$jquery('#templateSwitch'),
          anim: 2,
          btn: 0,
          move: 0,
          closeBtn: 0,
          shade: false,
          area: ['335px', '100%'],
          offset: ['32px', '0']
        });
      },
      // 颜色选择
      colorPickedListener(color) {
        console.log(`最终的选择：${color}`);
        // 通过总线传递
        this.$hub.$emit('userPickedColor', color);
      },
      // 颜色选择器缩起
      colorPickerHideListener() {
        this.$layer.close(this.dialogIndex);
      },
      // 模板缩起
      templateSwitchHideListener() {
        this.$layer.close(this.dialogIndex);
      },
      // 保存为PDF格式
      saveAsPDF() {
        console.log('saveAsPDF...');
        // 通过总线发送数据
        this.$hub.$emit('saveAs', 'pdf');
      },
      // 保存为PNG格式
      saveAsPNG() {
        console.log('saveAsPNG...');
        // 通过总线发送数据
        this.$hub.$emit('saveAs', 'png');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .aside
    position fixed
    left: 0
    top: 0
    width: 220px
    height: 100%
    border-right: 1px solid #2bd8ae
    .publish
      width: 219px
      height: 119px
      border-bottom: 1px solid #2bd8ae
      &:before
        content: ""
        display: inline-block
        height: 100%
        vertical-align: middle
      .publish-btn
        position: relative
        display: inline-block
        color: #ffffff
        text-decoration: none
        border: 1px solid #2bd8ae
        padding: 15px 70px 15px 30px
        border-radius: 30px
        vertical-align: middle
        &:hover
          background: #17b491
          color: #015900
        &:after
          content: ''
          position: absolute
          right: 35px
          top: 15px
          width: 20px
          height: 15px
          background: transparent url(../../../static/image/icons.png) -5px -545px no-repeat
    .manager
      margin-top: 50px
      .manager-item
        margin: 5px 0
        padding: 10px 0
        &:hover
          cursor: pointer
          background: #17b491
          .text
            color: #015900
      .icon
        display: inline-block
        vertical-align: top
        width: 16px
        height: 16px
        background: transparent url(../../../static/image/icons.png) no-repeat;
      .model
        background-position: -141px -545px
      .style
        background-position: -207px -545px
      .text
        padding-left: 7px
        text-decoration: none
        color: #ffffff
</style>
