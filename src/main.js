import Vue from 'vue'
import App from './App.vue'
import AMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(AMap)
//初始化地图
AMap.initAMapApiLoader({
  key: '7599d7d94f2e51747a9eda0699a66bcf',
  //插件集合
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
new Vue({
  render: h => h(App),
}).$mount('#app')
