import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import HelloWorld from '../components/HelloWorld.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'
import PageFour from '../views/PageFour.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: '导航一',
		component: HelloWorld,
		redirect: '/pageThree', // 默认进入页面
		show: true // 是否遍历显示
		children: [{
				path: '/pageOne',
				name: 'PageOne',
				component: PageOne
			},
			{
				path: '/pageTwo',
				name: 'PageTwo',
				component: PageTwo
			}
		]
	},
	{
		path: '/navigation',
		name: '导航二',
		component: HelloWorld,
		show: true, // 是否遍历显示
		children: [{
			path: '/pageThree',
			name: 'PageThree',
			component: PageThree
		}, ]
	},
	{
		path: '/pageFour',
		name: 'PageFour',
		component: PageFour,
		show: false, // 是否遍历显示
	}
]

const router = new VueRouter({
	routes
})

export default router
