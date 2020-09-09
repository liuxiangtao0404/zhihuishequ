import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' //首页
import Login from '../views/Login.vue' //登录
//智慧物业
import Wuye from '../views/ZhiHuiWuYe/wuye.vue' //物业缴费
import Jiaofei from '../views/ZhiHuiWuYe/jiaofei.vue' //缴费查询
import Guzhang from '../views/ZhiHuiWuYe/guzhang.vue' //故障报修
import Gonggao from '../views/ZhiHuiWuYe/gonggao.vue' //公告管理
//社区医疗
import Guahao from '../views/Shequyiliao/guahao.vue' //预约挂号
import Jiankang from '../views/Shequyiliao/jiankang.vue' //健康小贴士
import Yisheng from '../views/Shequyiliao/yisheng.vue' //医生简介
//智能应用
import Tingche from '../views/Zhinengyingyong/tingche.vue' //智能停车
import Cheweiluru from '../views/Zhinengyingyong/cheweiluru.vue' //车位录入
import Cheliangguanli from '../views/Zhinengyingyong/cheliangguanli.vue' //车位管理
import Tingchejilu from '../views/Zhinengyingyong/tingchejilu.vue' //停车记录
import Zhinengkaimen from '../views/Zhinengyingyong/zhinengkaimen.vue' //智能开门
//数据统计
import Fangwufenlei from '../views/Shujutongji/fangwufenlei.vue' //房屋分类统计
import Jiaofeifenxi from '../views/Shujutongji/jiaofeifenxi.vue' //缴费分析统计
import Swagger from '../views/Shujutongji/swagger.vue' //swagger增删改
//基本信息
import Fangwu from '../views/Jibenxinxi/fangwu.vue' //房屋信息
import Renko from '../views/Jibenxinxi/renko.vue' //人口信息
import Shebei from '../views/Jibenxinxi/shebei.vue' //设备信息
import Dianziditu from '../views/Jibenxinxi/dianziditu.vue' //电子地图
//系统管理
import Yonghu from '../views/Xitongguanli/yonghu.vue' //房屋信息
import Juese from '../views/Xitongguanli/juese.vue' //人口信息
import Quanxian from '../views/Xitongguanli/quanxian.vue' //设备信息

Vue.use(VueRouter)

const routes = [{
		path: '/', //登录
		name: 'Login',
		component: Login
	},
	{
		path: '/home', //首页
		name: 'Home',
		component: Home
	},
	//智慧物业
	{
		path: '/wuye', //物业缴费
		name: 'Wuye',
		component: Wuye
	},
	{
		path: '/jiaofei', //缴费查询
		name: 'Jiaofei',
		component: Jiaofei
	},
	{
		path: '/guzhang', //故障报修
		name: 'Guzhang',
		component: Guzhang
	},
	{
		path: '/gonggao', //公告管理
		name: 'Gonggao',
		component: Gonggao
	},
	//社区医疗
	{
		path: '/guahao', //预约挂号
		name: 'Guahao',
		component: Guahao
	},
	{
		path: '/jiankang', //健康小贴士
		name: 'Jiankang',
		component: Jiankang
	},
	{
		path: '/yisheng', //医生简介
		name: 'Yisheng',
		component: Yisheng
	},
	//智能应用
	{
		path: '/tingche', //智能停车
		name: 'Tingche',
		component: Tingche
	},
	{
		path: '/cheweiluru', //车位录入
		name: 'Cheweiluru',
		component: Cheweiluru
	},
	{
		path: '/cheliangguanli', //车位管理
		name: 'Cheliangguanli',
		component: Cheliangguanli
	},
	{
		path: '/tingchejilu', //停车记录
		name: 'Tingchejilu',
		component: Tingchejilu
	},
	{
		path: '/zhinengkaimen', //智能开门
		name: 'Zhinengkaimen',
		component: Zhinengkaimen
	},
	//数据统计
	{
		path: '/fangwufenlei', //房屋分类统计
		name: 'Fangwufenlei',
		component: Fangwufenlei
	},
	{
		path: '/Jiaofeifenxi', //缴费分析统计
		name: 'jiaofeifenxi',
		component: Jiaofeifenxi
	},
	{
		path: '/swagger', //swagger增删改
		name: 'Swagger',
		component: Swagger
	},
	//基本信息
	{
		path: '/fangwu', //房屋信息
		name: 'Fangwu',
		component: Fangwu
	},
	{
		path: '/renko', //人口信息
		name: 'Renko',
		component: Renko
	},
	{
		path: '/shebei', //设备信息
		name: 'Shebei',
		component: Shebei
	},
	{
		path: '/dianziditu', //电子地图
		name: 'Dianziditu',
		component: Dianziditu
	},
	//系统管理
	{
		path: '/yonghu', //用户管理
		name: 'Yonghu',
		component: Yonghu
	},
	{
		path: '/juese', //角色管理
		name: 'Juese',
		component: Juese
	},
	{
		path: '/quanxian', //权限管理
		name: 'Quanxian',
		component: Quanxian,
		// children:[
		//     {
		//         path:'city',
		//         component:()=>import('../../components/City')
		//     },
		//     // 重定向：当路径为/movie时，重定向到/movie/nowPlaying路径
		//     {
		//         path:'/quanxian/*',
		//         redirect:'/quanxian'
		//     }
		// ]
	}
	
]

const router = new VueRouter({
	mode: 'history',//hash
	base: process.env.BASE_URL,
	routes
})
// 全局前置守卫
// 在Router实例上进行守卫
router.beforeEach((to, from, next) => {
	// to和from都是路由实例
	// to：即将跳转到的路由
	// from：现在的要离开的路由
	// next：函数
	// 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
	let HAS_LOGIN=localStorage.getItem("zhuser")
	if (to.name !== 'Login') {
		if(HAS_LOGIN !== null){
			next()
		}else{
			next({
				name: 'Login'
			})
		}
	} else {
		if(HAS_LOGIN !== null){
			next({
				name: 'Home'
			})
		}else{
			next()
		}
	}
})

export default router
