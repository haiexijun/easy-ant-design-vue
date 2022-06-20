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
