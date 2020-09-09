<template>
	<div class="gr-content">
		<div class="gr-content-left">
			<el-button type="primary" @click="fanhui()">返回</el-button>
			<div>
				<div>
					<img src="../../../assets/image/shouye/logo.png" style="width: 100%;height: 150px;">
				</div>
				<h2>张xx</h2>
				<div style="height: 50px;"></div>
				<h4>国籍：中国</h4>
				<h4>出生年月：1978年12月</h4>
				<h4>性别：男</h4>
				<h4>职业：外科医生</h4>
				<h4>职称：副主任医师</h4>
			</div>
		</div>
		<div class="gr-content-right">
			<div>
				<h3>主要经历：</h3>
				<div>经历一：</div>
				<div>经历二：</div>
				<div>经历三：</div>
				<div>经历四：</div>
				<div>经历五：</div>
			</div>
			<div>
				<h3>职务：</h3>
				<div>职务一：</div>
				<div>职务二：</div>
				<div>职务三：</div>
				<div>职务四：</div>
				<div>职务五：</div>
			</div>
			<div>
				<h3>荣誉：</h3>
				<div>2000年   荣获xx市xx优秀个人</div>
				<div>2003年   荣获xx市xx医院xx一等功</div>
				<div>2005年   荣获xx市评定为“优秀医生”</div>
				<div>2008年   荣获xx市xx医院xx一等功</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"geren",
		data(){
			return{
				
			}
		},
		methods:{
			fanhui(){
				this.$emit("setpanduan",true)
			}
		},
		components:{
			
		}
	}
</script>

<style scoped>
	/* 内容 */
	.gr-content {
		width: 100%;
		height: 800px;
		margin-bottom: 10%;
		margin-top: 2%;
		display: flex;
		position: relative;
		border: 1px solid #CCCCCC;
	}
	
	.gr-content>div{
		flex-direction: column;
	}
	
	.gr-content-left{
		width: 20%;
		border-right: 1px solid #CCCCCC;
	}
	.gr-content-left>div{
		width: 80%;
		margin: 10% auto;
	}
	h2{
		text-align: center;
	}
	h4{
		margin: 8% 0;
	}
	.gr-content-right{
		width: 80%;
	}
	.gr-content-right>div{
		width: 98%;
		height: 265px;
		margin: 0 auto;
	}
	.gr-content-right h3{
		margin: 1% 0;
	}
	.gr-content-right>div>div{
		margin: 1% 0;
		font-size: 14px;
	}
	.gr-content-right>div:nth-of-type(2){
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
	}
</style>
