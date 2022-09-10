<template>
  <div class="show">
    <!--EasyFormModal演示-->
    <a-button type="primary" @click="testEasyFormModal">EasyFormModal演示</a-button>
    <EasyFormModal
        ref="EasyFormModal"
        :title="'EasyFormModal演示'"
        :title-status="'编辑'"
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
          help:'就是物料类别',
          placeholder:'请输入物料类别',
          //是否禁用
          isDisable:false,
          //是否必填，不为空
          isRequired:true
        },
        materialClass:{
          name:'物料类别',
          type:'input',
          notNull:false,
          placeholder:'请输入物料类别',
          isDisable:true
        },
        materialNumber:{
          name:'数量',
          type:'number-input',
          notNull:false,
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
