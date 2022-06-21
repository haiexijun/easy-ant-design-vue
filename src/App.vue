<template>
  <div class="show">
    <!--EasyFormModal演示-->
    <a-button type="primary" @click="testEasyFormModal">EasyFormModal演示</a-button>
    <EasyFormModal
        ref="EasyFormModal"
        :title="'EasyFormModal演示'"
        :title-status="'新增'"
        :width="800"
        :modal-type="'add'"
        :modal-form-setting="setting1"
    />
  </div>
</template>

<script>

import EasyFormModal from "@/components/EasyFormModal/EasyFormModal";
export default {
  name: 'App',
  components: {
    EasyFormModal
  },
  data(){
    return{
      //测试easyFormModal的setting
      setting1:{
        materialName:{
          name:'物料名称',
          type:'input',
          notNull:false,
          help:'abc',
          placeholder:'请输入物料类别',
        },
        materialClass:{
          name:'物料类别',
          type:'input',
          notNull:false,
          help:'test',
          placeholder:'请输入物料类别',
        }
      }
    }
  },
  methods:{
    testEasyFormModal(){
        this.$refs.EasyFormModal.visible=true;
    }
  }
}
</script>

<style lang="less" scoped>
.show > * {
  margin-left: 30px;
  margin-top: 15px;
}
</style>
