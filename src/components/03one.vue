<template>
  <div>
    one.vue<br />{{ msg }} <br />
    <button @click="pass">传递参数到two中</button>
  </div>
</template>

<script>
// 1.0引入公共的vue对象
import commonVue from '../assets/js/commonVue.js';
export default {
	data() {
		return {
			msg: '我是one中的msg属性'
		};
	},
	methods: {
		pass() {
      // 2.0 兄弟one组件将数据传递到公共vue对象，用：commonVue.$emit('passFn', value);
			commonVue.$emit('toBrother', this.msg);
		}
	}
};
</script>

<style>
</style>
