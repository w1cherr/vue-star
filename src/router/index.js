import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     },
//     {
//       path: '/',
//       name: 'Hi',
//       component: Hi
//     }
//   ]
// })

const first = {template: '<div>first内容</div>'}
const second = {template: '<div>secound内容</div>'}
const Home = {template: '<div>home内容</div>'}
const haha = {template: '<div>haha内容</div>'}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/',
      components: {
    	default: Home,
	    left:first,
	    right:second
    }},
    {path: '/first',
	    components: {
      default: haha,
	    left:second,
	    right:first
    }},
  ]
})

new Vue({
  router,
  template: `
    <div id="r">
      <hi>导航</hi>
      <p>{{ $route.name }}</p>
      <ol>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">first</router-link></li>
      </ol>
      <router-view></router-view>
      <router-view name="left" style="float: left;width: 50%;background-color: #42b983;height: 300px"></router-view>
      <router-view name="right" style="float: left;width: 50%;background-color: #eeeeee;height: 300px"></router-view>
    </div>
    `
}).$mount('#app')

