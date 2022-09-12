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
        },
        materialProps:{
          name:'物料属性',
          type:'select',
          //选择器材的选项
          options:['成品','半成品','原料','dsd'],
          //是否支持清除
          isAllowClear:true,
          //是否默认高亮第一个选项
          isDefaultActiveFirstOption:false,
          //是否禁用
          isDisable:false,
          //设置选择器的模式,有default默认的单选模式、multiple多选模式
          mode:'default',
          //当下拉列表为空时显示的内容,默认no data
          notFoundContent:'没有可选项',
          //是否显示下拉小箭头,默认true
          isShowArrow:true,
          //默认单选模式是否可搜索,默认false
          isShowSearch:true,
          //是否根据输入的内容进行筛选，默认true
          isFilterOption:true
        }
      }
    }
  },
  methods:{
    testEasyFormModal(){
        this.$refs.EasyFormModal.visible=true;
    },
    testEasyFormModalCopy(){
      this.$refs.EasyFormModalCopy.visible=true;
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
