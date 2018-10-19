import Vue from 'vue';
import Router from 'vue-router';
import FatherToSon from '@/components/01fatherToSon.vue';
import sonToFather from '@/components/02sonToFather.vue';
import brother from '@/components/03brotherContainer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/'
    },
    // 父组件传参给子组件
    {
      name: 'fts',
      path: '/fts',
      component: FatherToSon
    },
    // 子组件传参给父组件
    {
      name: 'stf',
      path: '/stf',
      component: sonToFather
    },
    // 兄弟组件传参
    {
      name: 'brother',
      path: '/brother',
      component: brother
    }
]
});
