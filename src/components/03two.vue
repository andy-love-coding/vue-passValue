<template>
  <div>
    two.vue<br />
    在two中，显示one的msg属性：{{ receive }}
  </div>
</template>

<script>
// 3.0引入公共的vue对象
import commonVue from '../assets/js/commonVue.js';
export default {
  data() {
    return {
      receive: ''
    };
  },
  created() {
    // 4.0同样在兄弟two组件中,用事件接收参数：commonVue.$on('passFn', (value) => {});
    commonVue.$on('toBrother', (val) => {
      console.log(val);
      this.receive = val;
    });
  }
};
</script>

<style>
</style>
