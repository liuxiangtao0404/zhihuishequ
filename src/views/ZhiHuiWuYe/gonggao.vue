<template>
	<div class="jiaofei">
		<topnav title="公告管理"></topnav>

		<div class="jf-content">
			<div class="jf-content-nav">
				<div>
					<el-date-picker v-model="riqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<div>
					<el-select v-model="gglx" placeholder="公告类型">
						<el-option label="业委会公告" value="业委会公告"></el-option>
						<el-option label="物业公告" value="物业公告"></el-option>
						<el-option label="街道办公告" value="街道办公告"></el-option>
					</el-select>
				</div>
				<div>
					<el-input v-model="ggbt" placeholder="请输入公告标题"></el-input>
				</div>
				<div>
					<el-row>
						<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 40%">添加</el-button>
						<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 40%">查询</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="gonggao"
				border style="width: 100%"
				:header-cell-style="{background:'#C0C0FF',color:'white'}"
				highlight-current-row
				@current-change="handleCurrentChange">
					<el-table-column prop="xuhao" label="序号" width="100" align="center"></el-table-column>
					<el-table-column prop="date" label="日期" width="220" align="center"></el-table-column>
					<el-table-column prop="gglx" label="公告类型" width="180" align="center"></el-table-column>
					<el-table-column prop="ggbt" label="公告标题" width="180" align="center"></el-table-column>
					<el-table-column prop="ggnr" label="公告内容" width="180" align="center"></el-table-column>
					<el-table-column prop="fbz" label="发布者" width="180" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="180" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small">修改</el-button>
							<el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, gonggao)" style="color: red;">删除</el-button>
							<el-button type="text" size="small">详情</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "jiaofeo",
		data() {
			return {
				riqi: "",
				gglx: "",
				ggbt: "",
				gonggao: [
					{
						xuhao:1,
						date: "2019-08-08 12:11:11",
						gglx: "物业公告",
						ggbt: "标题1",
						ggnr: "内容1",
						fbz: "zhangs"
					},
					{
						xuhao:2,
						date: "2019-08-08 12:11:11",
						gglx: "物业公告",
						ggbt: "标题2",
						ggnr: "内容2",
						fbz: "zhangs"
					}
				],
				currentRow: null
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.currentRow = val;
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			}
		},
		components: {
			topnav
		}
	}
</script>

<style scoped>
	.jiaofei {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.jf-content {
		width: 100%;
		height: 750px;
		margin: 2% 0;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.jf-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.jf-content-nav>div:first-child {
		width: 30%;
	}

	.jf-content-nav>div {
		width: 20%;
		flex-direction: column;
		margin: 0 2%;
	}

	.table {
		width: 98%;
		margin: 0 auto;
	}
</style>
