<template>
  <dash-child>
    <div class="item-list">
      <div class="tips">
        <dash-child class="input-item">
          <input placeholder="填写时间">
        </dash-child>
        <dash-child class="input-item">
          <input placeholder="填写学校、公司名称">
        </dash-child>
        <dash-child class="input-item">
          <input placeholder="填写职务、专业名称">
        </dash-child>
      </div>
      <dash-child>
        <div class="desc" contenteditable="true">
          就是这里... <br>
          写下你牛逼的过往..... <br>
          那是你逝去的青春.....
        </div>
      </dash-child>

    </div>
  </dash-child>
</template>

<script type="text/ecmascript-6">

  import dashChild from '../dashChild/dashChild.vue';

  export default {
    components: {
      dashChild
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  // 设置placeHolder颜色
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #444;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #444;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #444;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #444;
  }
  .item-list
    margin-top: 20px
    .tips
      display: flex
      .input-item
        flex: 1
        color: #222
        outline: none
        font-size: 16px
        line-height: 20px
        input
          border: none
          outline: none
    .desc
      margin-top: 10px
      background: none
      line-height: 23px
      color: #111
      border: 1px dashed transparent
      margin-bottom: 5px
      font-size: 16px
      &:focus
        outline: none
</style>
