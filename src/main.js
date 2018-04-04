// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-unused-vars */
import common from '@/common/common.styl';

/* 引入这些内容为了弹框的使用 */
import layeyCss from '../static/layer/theme/default/layer.css';
import jquery from '../static/jquery.js';
import layer from '../static/layer/layer.js';

Vue.config.productionTip = false;
Vue.prototype.$layer = layer;
Vue.prototype.$jquery = jquery;
// 不同组件之间的通信
Vue.prototype.$hub = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
