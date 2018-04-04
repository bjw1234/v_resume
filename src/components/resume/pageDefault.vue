<template>
  <div class="wrapper clearfix" id="pageDefault">
    <div class="aside-left" ref="asideLeftHook">
      <!--用户头像-->
      <dash-parent>
        <edit-image class="user-head" :width="'120'" :height="'150'" :isCircle="false"></edit-image>
      </dash-parent>
      <!--姓名模块-->
      <dash-parent @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
        <name-area class="left-name-area" @eventShowDialog="ShowDialogListener" :nameInfo="userName"></name-area>
      </dash-parent>
      <!--基本信息-->
      <dash-parent @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
        <base-info-item v-for="item in userInfoArr" :key="item.id"
                        :icon="item.icon" :title="item.title" :holder="item.holder"></base-info-item>
      </dash-parent>
      <!--技能特长-->
      <dash-parent class="skill" @eventAdd="skillBarAddListener" :addBgColor="'#00c091'">
        <h2 class="skill-title" contenteditable="true">技能特长</h2>
        <skill-bar v-for="bar in skillBarArr" :key="bar.id"></skill-bar>
      </dash-parent>
    </div>

    <div class="aside-right">
      <div class="right-content">
        <!--姓名模块-->
        <dash-parent @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
          <name-area class="name-edit" @eventShowDialog="ShowDialogListener" :nameInfo="userName"></name-area>
        </dash-parent>
        <!--求职意向-->
        <dash-parent>
          <module-item :title="'求职意向'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'like.png'"></module-item>
        </dash-parent>
        <!--教育经历-->
        <dash-parent @eventAdd="itemEducationAddListener" :addBgColor="'#00c091'">
          <module-item :title="'教育经历'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'education.png'">
            <module-item-list v-for="item in itemEducationArr" :key="item.id"></module-item-list>
          </module-item>
        </dash-parent>
        <!--项目经验-->
        <dash-parent @eventAdd="itemExperienceAddListener" :addBgColor="'#00c091'">
          <module-item :title="'项目经验'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'experience.png'">
            <module-item-list v-for="item in itemExperienceArr" :key="item.id"></module-item-list>
          </module-item>
        </dash-parent>
        <!--专业技能-->
        <dash-parent>
          <module-item :title="'专业技能'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'skill.png'"></module-item>
        </dash-parent>
        <!--自我评价-->
        <dash-parent>
          <module-item :title="'自我评价'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'self_val.png'"></module-item>
        </dash-parent>
        <!--自定义模块-->
        <dash-parent>
          <module-item :title="'自定义模块'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'self_val.png'"></module-item>
        </dash-parent>
        <dash-parent>
          <module-item :title="'自定义模块'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'self_val.png'"></module-item>
        </dash-parent>
      </div>
    </div>

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
  import moduleItem from '../moduleItem/moduleItem.vue';
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
      moduleItem,
      moduleItemList,
      baseDialog
    },
    data() {
      return {
        skillBarArr: [1],
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
        // 模块图标样式
        moduleIconStyle: {'background-color': '#254665'},

        // 模块标题样式
        moduleTitleStyle: {
          'color': '#254665',
          'border-bottom': '1px solid #254665'
        }
      };
    },
    // 生命周期函数
    created: function () {
      console.log('pageDefault created...');
      // 接收到保存的信息
      this.$hub.$on('saveAs', (type) => {
        saveAs(type, 'pageDefault');
      });
      // 接收到切换颜色的信息
      this.$hub.$on('userPickedColor', (color) => {
        // 构造模块图标样式
        this.moduleIconStyle = {'background-color': color};
        // 构造模块标题样式
        this.moduleTitleStyle = {'color': color, 'border-bottom-color': color};
        this.$refs.asideLeftHook.style.backgroundColor = color;
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
          }
        );
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

  .wrapper
    width: 100%
    height: 100%
    color: #000
    overflow: hidden
    background-color: #ffffff
    .aside-left
      float: left
      width: 270px
      height: 100%
      color: #ffffff
      background-color: #254665
      .user-head
        margin-top: 40px
      .left-name-area
        color: #ffffff
        .name-content
          text-align: center
          color: #ffffff
      .skill
        margin-top: 30px
        .skill-title
          outline: none
          font-size: 20px
          line-height: 25px
          text-align: left
    .aside-right
      float: right
      width: 610px
      height: 100%
      color: #000
      .right-content
        margin: 10px
      .name-edit
        margin-top: 10px
        .user-name
          text-align: left
          .name-content
            color: #222
        .description
          text-align: left

</style>
