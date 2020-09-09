<template>
	<div class="dianshi">
		<div class="chaxun">
			<div>
				<span>缴费单位：</span>
				<el-select v-model="danwei" placeholder="请选择缴费单位" style="width: 80%;">
					<el-option label="111广播电视有限公司" value="111广播电视有限公司"></el-option>
					<el-option label="222广播电视有限公司" value="222广播电视有限公司"></el-option>
					<el-option label="333广播电视有限公司" value="333广播电视有限公司"></el-option>
					<el-option label="444广播电视有限公司" value="444广播电视有限公司"></el-option>
					<el-option label="555广播电视有限公司" value="555广播电视有限公司"></el-option>
				</el-select>
			</div>
			<div>
				<span>智能卡号：</span>
				<el-input v-model="kahao" placeholder="请输入智能卡号" style="width: 80%;"></el-input>
			</div>
			<div>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查询</el-button>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查看历史账单</el-button>
			</div>
		</div>

		<div class="tianxie">
			<el-form :model="ranqi" ref="ranqi" label-width="100px">
				<el-form-item label="已购套餐:" label-width="30%">
					<el-input v-model="ranqi.ygtc" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="缴费单位:" label-width="30%">
					<el-input v-model="ranqi.jfdw" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="缴费户号:" label-width="30%">
					<el-input v-model="ranqi.jfhh" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="户名:" label-width="30%">
					<el-input v-model="ranqi.hm" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="地址:" label-width="30%">
					<el-input v-model="ranqi.dz" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 80%;" @click="submitForm()">立即缴费</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dianshi",
		data() {
			return {
				danwei: "", //缴费单位
				kahao: "", //智能卡号
				ranqi: {
					ygtc: '488.00元/年 - 单向高清全能套餐',
					jfdw: '111广播电视有限公司',
					jfhh: '111111',
					hm: 'xxx',
					dz: 'xx市xx区xx街道xx社区xx栋xx室',
				}
			}
		},
		methods: {
			submitForm() {
				console.log("立即缴费")
			}
		}
	}
</script>

<style scoped>
	.dianshi {
		width: 100%;
		height: 750px;
	}

	.chaxun {
		width: 100%;
		height: 100px;
		line-height: 100px;
		display: flex;
		padding-left: 5%;
		box-sizing: border-box;
		border-bottom: 1px solid #E6E6FF;
	}

	.chaxun>div {
		width: 40%;
		margin: 0 2%;
	}

	.chaxun>div:last-child {
		width: 20%;
	}

	.tianxie {
		width: 40%;
		margin: 4% auto;
	}
</style>
