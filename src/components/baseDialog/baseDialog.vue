<!--编辑基本信息弹框-->
<template>
  <div class="base-info-dialog">

    <!--信息输入区域-->
    <div class="dialog-msg-input">
      <div class="base-info-item">
        <label for="dialog-yourname">你的姓名</label><input type="text" id="dialog-yourname" v-model="name">
      </div>

      <div class="base-info-item">
        <label for="dialog-age">你的年龄</label><input type="number" id="dialog-age" v-model="age">
      </div>

      <div class="base-info-item">
        <label for="dialog-city">所在城市</label><input type="text" id="dialog-city" v-model="city">
      </div>

      <div class="base-info-item">
        <label for="dialog-workAge">工作年限</label><input type="text" id="dialog-workAge" v-model="workAge">
      </div>

      <div class="base-info-item">
        <label for="dialog-phone">电话号码</label><input type="text" id="dialog-phone" v-model="phone">
      </div>

      <div class="base-info-item">
        <label for="dialog-email">联系邮箱</label><input type="text" id="dialog-email" v-model="email">
      </div>
    </div>

    <!--个人描述-->
    <div class="base-info-desc">
      <div class="info-desc">一句话描述自己</div>
      <input type="text" id="dialog-desc" v-model="desc">
    </div>

    <!--按钮区域  -->
    <div class="dialog-btns">
      <button class="dialog-btn dialog-save" @click="eventSave">保存</button>
      <button class="dialog-btn dialog-cancel" @click="eventCancel">取消</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: '',
        age: '',
        city: '',
        workAge: '',
        phone: '',
        email: '',
        desc: '',
        // 信息汇总
        userInfo: [],
        userName: {}
      };
    },
    methods: {
      eventSave() {
        this.userInfo = [];
        this.userInfo.push({
          name: this.age + '岁'
        }, {
          name: this.city
        }, {
          name: this.workAge
        }, {
          name: this.phone
        }, {
          name: this.email
        });

        this.userName.name = this.name;
        this.userName.desc = this.desc;
        this.$emit('dialogEventSave', this.userInfo, this.userName);
      },
      eventCancel() {
        this.$emit('dialogEventCancel', 'cancel');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .base-info-dialog
    text-align: left
    .dialog-msg-input
      padding: 25px 40px 10px
      overflow hidden
      .base-info-item
        display: inline-block
        float: left
        margin: 0 20px 24px 0
        label
          margin-right: 20px
        input
          width: 210px
          height: 32px
          border: 1px solid #d4dbe0
          color: #222
          padding-left: 10px
          box-sizing: border-box

    .base-info-desc
      margin-left: 40px
      .info-desc
        text-align: left !important
        padding-bottom: 20px
      #dialog-desc
        width: 470px
        height: 32px
        border: 1px solid #d4dbe0
        padding-left: 10px
    .dialog-btns
      margin-top: 15px
      text-align: center
      .dialog-btn
        border: none
        outline: none
        border-radius: 8px
        width: 100px
        height: 40px
        margin: 0 15px
        cursor: pointer
      .dialog-save
        color: #fff
        background-color: #009f95
        &:hover
          background-color: #11c4b9
      .dialog-cancel
        background-color: #ccc
        &:hover
          background-color: #ddd

</style>
