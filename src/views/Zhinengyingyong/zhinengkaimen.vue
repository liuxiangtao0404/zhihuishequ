<template>
	<div class="kaimen">
		<topnav title="智能开门"></topnav>
		
		<div class="navtop">
			<div class="tab-top">
				<div :class="{'tab-active':tab == 1}" @click="tabqiehuan(1)">开门统计</div>
				<div :class="{'tab-active':tab == 2}" @click="tabqiehuan(2)">开门记录</div>
			</div>
		</div>
		
		<div class="tab-content">
			<div v-show="tab == 1">
				<tongji></tongji>
			</div>
			<div v-show="tab == 2">
				<jilu></jilu>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	import tongji from '../../components/zhinengyingyong/zhinengkaimen/tongji.vue' //开门统计
	import jilu from '../../components/zhinengyingyong/zhinengkaimen/jilu.vue' //开门记录
	export default{
		name:"kaimen",
		data(){
			return{
				tab:1
			}
		},
		methods:{
			tabqiehuan(zhi){
				this.tab = zhi
			}
		},
		components:{
			topnav,
			tongji,
			jilu
		}
	}
</script>

<style scoped>
	.kaimen {
		width: 98%;
		margin: 0 auto;
		background: white;
	}
	
	.navtop {
		height: 40px;
		line-height: 40px;
	}
	
	.tab-top {
		width: 90%;
		margin-top: 2%;
		display: flex;
	}
	
	.tab-top>div {
		cursor: pointer;
		width: 15%;
		text-align: center;
		font-size: 14px;
		border: 1px solid #E4E4E4;
		flex-direction: column;
	}
	
	.tab-active {
		color: white;
		background: #C0C0FF;
	}
	
	
	.tab-content {
		width: 100%;
		height: 650px;
		margin-top: 0.1%;
		margin-bottom: 5%;
		border: 1px solid #E4E4E4;
	}
</style>
