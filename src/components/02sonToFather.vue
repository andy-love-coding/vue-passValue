<template>
  <div>
    <b>father.vue子组件给父组件传参</b><br />
    {{ num }}
    <!-- 2.0引用子组件时定义接收事件方法 -->
    <son @sonToFather="fn"></son>
  </div>
</template>

<script>
// 引入子组件
import son from '@/components/02son.vue';
export default {
  data() {
    return {
      num: 0
    };
  },
	// 注册组件
	components: {
		son
  },
  methods: {
    // 3.0 父组件自定义接收子组件的方法
    fn(val) {
      this.num = val;
      console.log(val);
    }
  }
};
</script>
<style>
</style>
