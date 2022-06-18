import { createApp } from 'vue'
import App from './App.vue'
//全局导入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const  app=createApp(App);

app.use(Antd).mount('#app');


