// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'font-awesome/css/font-awesome.css'
import 'onsenui/css/onsenui-core.css'
import 'onsenui/css/onsen-css-components.css'
import 'onsenui/css/ionicons/css/ionicons.css'

import Vue from 'vue'
import $ons from 'vue-onsenui/esm'
import * as VOns from './vue-onsen-components'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$EventBus = new Vue();    //  비 부모자식간 컴포넌트 통신을 위함

Vue.use($ons);
Object.values(VOns).forEach(comp => Vue.component(comp.name, comp));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
