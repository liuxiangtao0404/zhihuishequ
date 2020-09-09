<template>
	<div class="wuyefei">
		<div class="chaxun">
			<div>
				<span>业主姓名：</span>
				<el-input v-model="username" placeholder="请输入业主姓名" style="width: 80%;"></el-input>
			</div>
			<div>
				<span>手机号码：</span>
				<el-input v-model="shouji" placeholder="请输入手机号码" style="width: 80%;"></el-input>
			</div>
			<div>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查询</el-button>
				<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;">查看历史账单</el-button>
			</div>
		</div>

		<div class="tianxie">
			<el-form :model="ranqi" ref="ranqi" label-width="100px">
				<el-form-item label="业主姓名:" label-width="30%">
					<el-input v-model="ranqi.yzxm" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="手机号码:" label-width="30%">
					<el-input v-model="ranqi.sjhm" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="住户地址:" label-width="30%">
					<el-input v-model="ranqi.zhdz" :readonly="true"></el-input>
				</el-form-item>
				<div class="feiyongbiao">
					<div>需缴纳的物业费如下：</div>
					<div>
						<el-table :data="tableData" border style="width: 100%"
						:header-cell-style="{background:'#C0C0FF',color:'white'}">
							<el-table-column type="selection" width="55" align="center"></el-table-column>
							<el-table-column prop="date" label="时间" width="140" align="center"></el-table-column>
							<el-table-column prop="jine" label="费用/元" align="center"></el-table-column>
						</el-table>
					</div>
				</div>
				<el-form-item>
					<el-button type="primary" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 80%;" @click="submitForm()">立即缴费</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "wuyefei",
		data() {
			return {
				username: "", //业主姓名
				shouji: "", //手机号码
				ranqi: {
					yzxm: '小明',
					sjhm: '15212311109',
					zhdz: 'xx小区xx栋xx室'
				},
				tableData: [{
					date: '2019年6月',
					jine: '￥100.00'
				}, {
					date: '2019年7月',
					jine: '￥100.00'
				}, {
					date: '2019年8月',
					jine: '￥100.00'
				}]
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
	.wuyefei {
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
	.feiyongbiao{
		color: #606266;
		margin-left: 15%;
		margin-bottom: 5%;
	}
	.feiyongbiao>div:last-child{
		margin-left: 18%;
		margin-top: 3%;
	}
</style>
