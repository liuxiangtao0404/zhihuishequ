<template>
	<div class="clguanli">
		<topnav title="停车记录"></topnav>

		<div class="gl-content">
			<div class="gl-content-nav">
				<div>
					<el-date-picker v-model="riqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<div>
					<el-row>
						<el-button type="primary" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 15%;">查询</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="jilu.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				 :header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="date" label="入库日期" width="170" align="center"></el-table-column>
					<el-table-column prop="cksj" label="出库时间" width="170" align="center"></el-table-column>
					<el-table-column prop="tccmc" label="停车场名称" width="120" align="center"></el-table-column>
					<el-table-column prop="clmc" label="车辆名称" width="120" align="center"></el-table-column>
					<el-table-column prop="clxh" label="车辆型号" width="100" align="center"></el-table-column>
					<el-table-column prop="clcp" label="车辆车牌" width="120" align="center"></el-table-column>
					<el-table-column prop="tcsj" label="停车时长" width="100" align="center"></el-table-column>
					<el-table-column prop="tcfy" label="停车费用" width="100" align="center"></el-table-column>
					<el-table-column prop="zffs" label="支付方式" width="120" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="100" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;">调用监控录像</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			
			<div class="fenye">
				<div class="fyxg">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[2,4,6]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="jilu.length">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "clguanli",
		data() {
			return {
				riqi: "",
				currentPage: 1, //初始页
				pagesize: 6, //每页显示的数据
				jilu: [
					{
						date: "2019-09-12 15:23:12",
						cksj: "2019-09-13 15:23:12",
						tccmc: "A区 停车场",
						clmc: "宝马1系",
						clxh: "116i",
						clcp: "京A~F0236",
						tcsj: "12小时",
						tcfy: "68",
						zffs: "微信支付"
					},
					{
						date: "2019-09-12 15:23:12",
						cksj: "2019-09-13 15:23:12",
						tccmc: "B区 停车场",
						clmc: "奔驰",
						clxh: "F200",
						clcp: "粤B~F1236",
						tcsj: "12小时",
						tcfy: "68",
						zffs: "微信支付"
					},
					{
						date: "2019-09-12 15:23:12",
						cksj: "2019-09-13 15:23:12",
						tccmc: "C区 停车场",
						clmc: "大众",
						clxh: "xxx",
						clcp: "湘A~0392",
						tcsj: "12小时",
						tcfy: "68",
						zffs: "微信支付"
					},
					{
						date: "2019-09-12 15:23:12",
						cksj: "2019-09-13 15:23:12",
						tccmc: "D区 停车场",
						clmc: "北京现代",
						clxh: "xxx",
						clcp: "湘F~0312",
						tcsj: "12小时",
						tcfy: "68",
						zffs: "微信支付"
					}
				]
			}
		},
		methods: {
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange(size) {
				this.pagesize = size;
				// console.log(this.pagesize)  //每页下拉显示数据
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
				// console.log(this.currentPage)  //点击第几页
			}
		},
		components: {
			topnav
		}
	}
</script>

<style scoped>
	.clguanli {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.gl-content {
		width: 100%;
		height: 750px;
		margin: 2% 0;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.gl-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.gl-content-nav>div:first-child {
		width: 30%;
	}

	.gl-content-nav>div {
		width: 50%;
		flex-direction: column;
		margin: 0 2%;
	}

	.table {
		width: 98%;
		margin: 0 auto;
	}

	.fenye {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #E6E6FF;
	}

	.fyxg {
		float: right;
		margin: 0.8% 1%;
	}
</style>
