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
        <a-row>
          <!--通过v-for来循环渲染要生成的表单组件-->
          <a-col
              v-for="(item,key) in modalFormSetting"
              :key="key"
              :span="12">
            <a-form-item>
              <!--表单左边的label-->
              <span style="display: inline-block;width: 25%;text-align: right" slot="label">
                {{ item.name  }}:
                <a-tooltip v-if="item.help">
                  <template #title>{{item.help}}</template>
                  <div style="margin-right: 4px;width: 12px;height: 12px;border-radius: 10px;background-color: #d9d7d7;display: inline-block">
                    <p style="font-size: 1px;text-align: center;line-height: 12px;">?</p>
                  </div>
                </a-tooltip>
              </span>
              <!--右侧的表单组件-->
              <!--1.普通的input表单组件-->
              <a-input
                  :disabled="item.isDisable"
                  v-if="item.type === 'input'"
                  :placeholder="item.placeholder"
                  style="width: 75%;"
              />
              <!--2.数字输入组件-->
              <a-input-number
                  style="width: 75%;"
                  v-if="item.type==='number-input'"
              />

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
      default:888
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
    //这是表单生成器的初始化设置，用于渲染表单
    modalFormSetting:{
      type:Object
    }
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
      console.log(this.modalFormSetting)
    }
  }
}
</script>

<style lang="less" scoped>

</style>