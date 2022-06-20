<template>
  <a-modal
      :visible="visible"
      @cancel="visible = false"
      :title="title+' ('+titleStatus+') '"
      :width="width"
      :centered="centered"
      :bodyStyle="bodyStyle"
      :keyboard="keyboard"
      :mask="mask"
      @keyup.enter.native="ok(this.modalType)"
      :maskClosable="maskClosable"
  >

    <!--自定义页脚按钮-->
    <template #footer>
      <a-button @click="visible = false">取消</a-button>
      <a-button type="primary" :loading="loading" @click="ok(this.modalType)">确定</a-button>
    </template>

    <!--内部表单生成器-->
    <div>
      <a-form :layout="formLayout" :model="formState">
        <a-row :gutter="48">
          <!--通过v-for来循环渲染要生成的表单组件-->
          <a-col :md="24" :sm="24">
            <a-form-item
                :label-col="4"
                :wrapper-col="20"
            >
              <!--表单左边的label-->
              <span slot="label">
                {{ '用户名' }}
                <a-tooltip :title="'dsd'">
                  <icon
                      type="question-circle"
                      theme="filled"
                      style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-tooltip>
              </span>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>

  </a-modal>
</template>

<script>
export default {
  name: "EasyFormModal",
  props:{
    // 模态框的标题，比如物料、物料类型
    title:{
      type:String
    },
    // 模态框标题的状态，比如 物料类型(编辑) 这个标题里面的编辑
    titleStatus:{
      type:String
    },
    // 模态框的宽度
    width:{
      type:Number,
      default:800
    },
    // 是否垂直居中展示模态框,默认false
    centered:{
      type:Boolean,
      default: false
    },
    // Modal body 的样式 传入一个object对象，默认为{}
    bodyStyle:{
      type:Object,
      default:{minHeight:'auto'}
    },
    // 是否支持键盘 esc 关闭
    keyboard:{
      type:Boolean,
      default:true
    },
    // 是否展示遮罩
    mask:{
      type:Boolean,
      default:true
    },
    // 模态的类型，是编辑edit还是新增add
    modalType:{
      type:String
    },
    // 点击蒙层是否允许关闭,默认不允许false
    maskClosable:{
      type:Boolean,
      default:false
    },
    // 表单的布局,有horizontal、vertical、inline三个属性
    formLayout:{
      type:String,
      default:'horizontal'
    },
  },
  data(){
    return{
      //visible用于模态框是否展示，默认false
      visible: false,
      //点击确定按钮时是否会loading转圈
      loading:false,
      //表单数据对象
      formState:{},
    }
  },
  methods:{
    ok(type){
      this.visible=false
    }
  }
}
</script>

<style lang="less" scoped>

</style>