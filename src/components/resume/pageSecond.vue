<template>
  <div class="second-wrapper clearfix" id="secondPage">
    <div class="top-bg" ref="topBg"></div>
    <!--用户头像-->
    <dash-parent class="user-head-wrapper">
      <edit-image class="user-head" :width="'120'" :height="'150'" :isCircle="false"></edit-image>
    </dash-parent>
    <!--姓名模块-->
    <dash-parent class="name-area-wrapper" @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
      <name-area class="name-area" :nameInfo="userName"></name-area>
    </dash-parent>
    <!--基本信息-->
    <dash-parent class="clearfix base-msg-wrapper" @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
      <base-info-item class="base-msg" v-for="item in userInfoArr" :key="item.id"
                      :icon="item.icon" :title="item.title" :holder="item.holder"></base-info-item>
    </dash-parent>
    <!--求职意向-->
    <dash-parent class="module-item-wrapper">
      <module-item-copy :title="'求职意向'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle"></module-item-copy>
    </dash-parent>
    <!--教育经历-->
    <dash-parent @eventAdd="itemEducationAddListener" :addBgColor="'#00c091'">
      <module-item-copy :title="'教育经历'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle">
        <module-item-list v-for="item in itemEducationArr" :key="item.id"></module-item-list>
      </module-item-copy>
    </dash-parent>
    <!--项目经验-->
    <dash-parent @eventAdd="itemExperienceAddListener" :addBgColor="'#00c091'">
      <module-item-copy :title="'项目经验'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle">
        <module-item-list v-for="item in itemExperienceArr" :key="item.id"></module-item-list>
      </module-item-copy>
    </dash-parent>
    <!--技能特长-->
    <dash-parent class="skill-wrapper" @eventAdd="skillBarAddListener" :addBgColor="'#00c091'">
      <module-item-copy :title="'技能特长'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle">
        <div class="hr-1px" style="height: 1px"></div>
        <skill-bar class="skill-bar-item" v-for="bar in skillBarArr" :key="bar.id"></skill-bar>
      </module-item-copy>
    </dash-parent>
    <!--自我评价-->
    <dash-parent>
      <module-item-copy :title="'自我评价'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle"></module-item-copy>
    </dash-parent>
    <!--自定义模块-->
    <dash-parent>
      <module-item-copy :title="'自定义模块'"
                        :moduleTitleStyle="moduleTitleStyle"
                        :moduleTriangleStyle="moduleTriangleStyle"></module-item-copy>
    </dash-parent>
    <!--编辑基础信息的弹窗-->
    <base-dialog v-show="false" id="idBaseDialog"
                 @dialogEventSave="dialogSaveListener"
                 @dialogEventCancel="dialogCancelListener">
    </base-dialog>
  </div>
</template>

<script type="text/ecmascript-6">

  import editImage from '../editImg/EditImage.vue';
  import nameArea from '../nameArea/nameArea.vue';
  import baseInfoItem from '../baseInfoItem/baseInfoItem.vue';
  import skillBar from '../skillBar/skillBar.vue';
  import dashParent from '../dashParent/dashParent.vue';
  import moduleItemCopy from '../moduleItem/moduleItemCopy.vue';
  import moduleItemList from '../moduleItemList/moduleItemList.vue';
  import baseDialog from '../baseDialog/baseDialog.vue';
  import {saveAs} from '../../assets/js/saveAs';

  export default {
    components: {
      editImage,
      nameArea,
      baseInfoItem,
      skillBar,
      dashParent,
      moduleItemCopy,
      moduleItemList,
      baseDialog
    },
    data() {
      return {
        skillBarArr: [1, 1],
        itemEducationArr: [1],
        itemExperienceArr: [1],
        // 编辑基础信息的弹框
        dialogIndex: 0,
        // 用户信息数组
        userInfoArr: [{
          icon: 'age.png',
          holder: '年龄',
          title: ''
        }, {
          icon: 'add.png',
          holder: '居住地',
          title: ''
        }, {
          icon: 'workage.png',
          holder: '工作经验',
          title: ''
        }, {
          icon: 'phone.png',
          holder: '电话号码',
          title: ''
        }, {
          icon: 'email.png',
          holder: '邮箱号码',
          title: ''
        }],
        // 用户姓名和描述
        userName: {
          name: '',
          desc: ''
        },
        // 模块右侧三角样式
        moduleTriangleStyle: {
          'border-left-color': 'red',
          'border-bottom-color': 'red'
        },
        // 模块标题样式
        moduleTitleStyle: {
          'background': 'red'
        }
      };
    },
    created() {
      // 接收到保存的信息
      this.$hub.$on('saveAs', (type) => {
        saveAs(type, 'secondPage');
      });
      // 接收到切换颜色的信息
      this.$hub.$on('userPickedColor', (color) => {
        // 构造三角样式
        this.moduleTriangleStyle = {
          'border-left-color': color,
          'border-bottom-color': color
        };
        // 构造模块标题样式
        this.moduleTitleStyle = {'background': color};
        this.$refs.topBg.style.backgroundColor = color;
      });
    },
    methods: {
      // 增加skillBar的数量
      skillBarAddListener() {
        this.skillBarArr.push(1);
      },

      // 添加教育项数量
      itemEducationAddListener() {
        this.itemEducationArr.push(1);
      },

      // 添加经验数量
      itemExperienceAddListener() {
        this.itemExperienceArr.push(1);
      },
      // 打开编辑基础信息框
      ShowDialogListener() {
        this.dialogIndex = this.$layer.open({
          type: 1,
          shadeClose: true,
          title: '编辑基础信息',
          skin: 'layui-layer-molv',
          area: ['740px', '400px'],
          content: this.$jquery('#idBaseDialog')
        });
      },
      // 基础信息编辑保存
      dialogSaveListener(userInfo, userName) {
        // 遍历赋值
        this.userInfoArr.forEach((info, index) => {
          info.title = userInfo[index].name;
          console.log(info.title);
        });
        // 姓名
        this.userName.name = userName.name;
        this.userName.desc = userName.desc;
        this.$layer.close(this.dialogIndex);
      },

      // 基础信息编辑取消
      dialogCancelListener() {
        this.$layer.close(this.dialogIndex);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .second-wrapper
    width: 100%
    height: 100%
    color: #000
    text-align: left
    .top-bg
      position: absolute
      left: 0
      right: 0
      top: 0
      height: 140px
      background: red
    .user-head-wrapper
      width: 200px
      position: absolute
      right: 0
      top: 0
    .name-area-wrapper
      margin: 5px 0 0 30px
      width: 600px
      .name-content
        color: #ffffff
      .desc-content
        color: #ffffff
    .base-msg-wrapper
      display: inline-block
      margin-top: 20px
      .base-msg
        float: left
        padding-right: 20px
        color: #444
        margin-right: 10px
        .icon
          filter: brightness(50%)
    .skill-wrapper
      .skill-bar-item
        display: inline-block
        width: 31%
        margin-right: 10px
        .skill-title-name
          color: #222
        .percent
          color: #222
</style>
