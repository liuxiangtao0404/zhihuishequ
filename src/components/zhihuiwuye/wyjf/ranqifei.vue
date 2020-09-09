<template>
	<div class="ranqifei">
		<div class="chaxun">
			<div>
				<span>缴费单位：</span>
				<el-select v-model="danwei" placeholder="请选择缴费单位" style="width: 80%;">
					<el-option label="111燃气有限公司" value="111燃气有限公司"></el-option>
					<el-option label="222燃气有限公司" value="222燃气有限公司"></el-option>
					<el-option label="333燃气有限公司" value="333燃气有限公司"></el-option>
					<el-option label="444燃气有限公司" value="444燃气有限公司"></el-option>
					<el-option label="555燃气有限公司" value="555燃气有限公司"></el-option>
				</el-select>
			</div>
			<div>
				<span>用户编号：</span>
				<el-input v-model="bianhao" placeholder="请输入用户编号" style="width: 80%;"></el-input>
			</div>
			<div>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查询</el-button>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查看历史账单</el-button>
			</div>
		</div>

		<div class="tianxie">
			<el-form :model="ranqi" ref="ranqi" label-width="100px">
				<el-form-item label="燃汽费用(元):" label-width="30%">
					<el-input v-model="ranqi.rqfy"></el-input>
				</el-form-item>
				<el-form-item label="违约金(元):" label-width="30%">
					<el-input v-model="ranqi.wyj"></el-input>
				</el-form-item>
				<el-form-item label="应交金额(元):" label-width="30%">
					<el-input v-model="ranqi.yjje"></el-input>
				</el-form-item>
				<el-form-item label="当前余额(元):" label-width="30%">
					<el-input v-model="ranqi.dqje"></el-input>
				</el-form-item>
				<el-form-item label="未缴纳金额(元):" label-width="30%">
					<el-input v-model="ranqi.wjnje"></el-input>
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
		name: "ranqifei",
		data() {
			return {
				danwei: "", //缴费单位
				bianhao: "", //用户编号
				ranqi: {
					rqfy: '300.00',
					wyj: '300.00',
					yjje: '300.00',
					dqje: '300.00',
					wjnje: '300.00',
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
	.ranqifei {
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
