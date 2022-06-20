<template>
  <a-modal
      :visible="visible"
      @cancel="visible = false"
      :title="title+' ('+titleStatus+') '"
      :width="width"
      :centered="centered"
      :bodyStyle="bodyStyle"
      :confirmLoading="confirmLoading"
  >

    <!--自定义页脚按钮-->
    <template #footer>
      <a-button @click="visible = false">取消</a-button>
      <a-button type="primary" :loading="confirmLoading">确定</a-button>
    </template>

  </a-modal>
</template>

<script>
export default {
  name: "EasyFormModal",
  props:{
    //模态框的标题，比如物料、物料类型
    title:{
      type:String
    },
    //模态框标题的状态，比如 物料类型(编辑) 这个标题里面的编辑
    titleStatus:{
      type:String
    },
    //模态框的宽度
    width:{
      type:Number,
      default:800
    },
    //是否垂直居中展示模态框,默认false
    centered:{
      type:Boolean,
      default: false
    },
    //Modal body 的样式 传入一个object对象，默认为
    bodyStyle:{
      type:Object,
      default:{minHeight:'auto'}
    },
    //点击确定按钮时是否会loading转圈
    confirmLoading:{
      type:Boolean,
      default:true
    }

  },
  data(){
    return{
      //visible用于模态框是否展示，默认false
      visible: false,
    }
  }
}
</script>

<style lang="less" scoped>

</style>