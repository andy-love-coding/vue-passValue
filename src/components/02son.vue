<template>
  <div>
    son.vue <br />
    <button @click="minus">-</button>
    <input type="text" v-model="sonNum">
    <button @click="plus">+</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			sonNum: 1
		};
	},
	methods: {
		minus() {
			this.sonNum--;
			// 1.0 子组件数据改变时，将数据传递到父组件
			this.$emit('sonToFather', this.sonNum);
		},
		plus() {
      this.sonNum++;
      this.$emit('sonToFather', this.sonNum);
		}
	}
};
</script>
<style>
input {
	width: 30px;
}
</style>
