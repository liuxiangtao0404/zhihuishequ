<template>
	<div>
		<div class="yi">
			<div @click="ksyy()">快速预约</div>
			<div>预约记录</div>
		</div>
		<div class="er">
			<div>手机扫一扫<img src="../../../assets/image/shequyiliao/xiaolian.jpg"></div>
			<div>
				<img src="../../../assets/image/shequyiliao/erweima.png">
			</div>
			<div>【社区平台公众号二维码】</div>
		</div>
		<div class="san">
			<span style="color: red;">温馨提示：</span>预约完成后，预约结果将已社区公众号推送给您。如果您未关注公众号，则以短信方式发送到您的手机
		</div>
	</div>
</template>

<script>
	export default{
		name:"chushi",
		data(){
			return{
				
			}
		},
		methods:{
			ksyy(){
				this.$emit("chuanzhi",2)
			}
		}
	}
</script>

<style scoped>
	/* 初始化界面 */
	.yi{
		width: 100%;
		text-align: center;
	}
	.yi>div{
		width: 20%;
		height: 150px;
		line-height: 150px;
		color: black;
		margin: 7%;
		cursor: pointer;
		border-radius: 10px;
		background: #CCCCCC;
		display: inline-block;
	}
	.yi>div:first-child{
		color: white;
		background: #33CC99;
	}
	.er{
		text-align: center;
	}
	.er>div{
		margin: 1% 0;
	}
	.san{
		text-align: center;
		color: #009688;
		font-weight: bold;
		margin-top: 6%;
	}
	
</style>
