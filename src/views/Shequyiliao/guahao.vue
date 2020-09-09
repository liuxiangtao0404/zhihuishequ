<template>
	<div class="guahao">
		<topnav title="预约挂号"></topnav>
		
		<div class="content">
			<template v-if="pdyuyue == 1">
				<chushi @chuanzhi="houqu"></chushi>
			</template>
			<template v-else-if="pdyuyue == 2">
				<kuaisuyuyue @chuanzhi="ksyy"></kuaisuyuyue>
			</template>
			<template v-else-if="pdyuyue == 3">
				<kuaisuyuyue1 @chuanzhi="kkyy1"></kuaisuyuyue1>
			</template>
			<template v-else-if="pdyuyue == 4">
				<yiyuanxiangqing @chuanzhi="yyxq"></yiyuanxiangqing>
			</template>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	import chushi from '../../components/shequyiliao/yygh/chushi.vue' //初始化界面
	import kuaisuyuyue from '../../components/shequyiliao/yygh/kuaisuyuyue.vue' //快速预约
	import kuaisuyuyue1 from '../../components/shequyiliao/yygh/kuaisuyuyue1.vue' //快速预约1
	import yiyuanxiangqing from '../../components/shequyiliao/yygh/yiyuanxiangqing.vue' //患者名单
	export default{
		name:"guahao",
		data(){
			return{
				pdyuyue:1,
			}
		},
		methods:{
			houqu(pdyuyue){			//初始化界面传值过来
				this.pdyuyue = pdyuyue
			},
			ksyy(pdyuyue){			//快速预约医院传值过来
				this.pdyuyue = pdyuyue
			},
			kkyy1(pdyuyue){			//快速预约医院1传值过来
				this.pdyuyue = pdyuyue
			},
			yyxq(pdyuyue){			//医院详情传值过来
				this.pdyuyue = pdyuyue
			}
		},
		components:{
			topnav,
			chushi,
			kuaisuyuyue,
			kuaisuyuyue1,
			yiyuanxiangqing
		}
	}
</script>

<style scoped>
	.guahao {
		width: 98%;
		margin: 0 auto;
		background: white;
		font-size: 14px;
	}
	
	/* 内容 */
	.content{
		width: 100%;
		height: 750px;
		margin-bottom: 10%;
		margin-top: 2%;
		position: relative;
		border: 1px solid #E6E6FF;
	}
</style>
