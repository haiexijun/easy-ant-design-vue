import { createApp } from 'vue'
import App from './App.vue'
//全局导入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//导入ant-design的图标库
import * as Icons from '@ant-design/icons-vue'

const  app=createApp(App);

app.use(Antd).mount('#app');

// 循环使用全部图标
const icons=Icons;
for (let i in icons){
    //全局注册一下组件
    app.component(i,icons[i])
}

