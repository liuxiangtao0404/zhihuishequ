<template>
	<div class="cheweiluru">
		<topnav title="车位录入"></topnav>

		<div class="cw-content">
			<div class="cw-content-nav">
				<div>
					<el-date-picker v-model="riqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<div>
					<el-row>
						<el-button type="primary" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 15%;">查询</el-button>
						<el-button type="primary" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 15%;">车位录入</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="cheweiluru.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				 :header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="date" label="录入日期" width="180" align="center"></el-table-column>
					<el-table-column prop="tcgmc" label="停车场名称" width="140" align="center"></el-table-column>
					<el-table-column label="车库位置" width="170" align="center">
						<template slot-scope="scope">
							{{scope.row.ckwz}}
							<i class="el-icon-location" style="color: #1296DB;"></i>
						</template>
					</el-table-column>
					<el-table-column prop="zwbs" label="车位标识" width="140" align="center"></el-table-column>
					<el-table-column prop="zwzp" label="车位照片" width="140" align="center"></el-table-column>
					<el-table-column prop="zwyz" label="车位业主" width="140" align="center"></el-table-column>
					<el-table-column prop="tfzl" label="停放车辆" width="160" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="150" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;">修改</el-button>
							<el-button type="text" size="small" style="color: red;"
							@click.native.prevent="deleteRow(scope.$index, cheweiluru)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<div class="fenye">
				<div class="fyxg">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[2,4,6]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="cheweiluru.length">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "cheweiluru",
		data() {
			return {
				riqi: "",
				currentPage: 1, //初始页
				pagesize: 6, //每页显示的数据
				cheweiluru: [
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "A区 停车场",
						ckwz: "位置1......",
						zwbs: "xxx标识1",
						zwzp: "照片1",
						zwyz: "张xx",
						tfzl: "京A~F0236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "B区 停车场",
						ckwz: "位置2......",
						zwbs: "xxx标识2",
						zwzp: "照片2",
						zwyz: "张xx",
						tfzl: "粤B~F1236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "C区 停车场",
						ckwz: "位置3......",
						zwbs: "xxx标识3",
						zwzp: "照片3",
						zwyz: "张xx",
						tfzl: "湘A~0392"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "D区 停车场",
						ckwz: "位置4......",
						zwbs: "xxx标识4",
						zwzp: "照片4",
						zwyz: "张xx",
						tfzl: "湘F~0312"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "E区 停车场",
						ckwz: "位置5......",
						zwbs: "xxx标识5",
						zwzp: "照片5",
						zwyz: "张xx",
						tfzl: "京A~F0236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "F区 停车场",
						ckwz: "位置6......",
						zwbs: "xxx标识6",
						zwzp: "照片6",
						zwyz: "张xx",
						tfzl: "粤B~F1236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "G区 停车场",
						ckwz: "位置7......",
						zwbs: "xxx标识7",
						zwzp: "照片7",
						zwyz: "张xx",
						tfzl: "湘A~0392"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "D区 停车场",
						ckwz: "位置8......",
						zwbs: "xxx标识8",
						zwzp: "照片8",
						zwyz: "张xx",
						tfzl: "湘F~0312"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "A区 停车场",
						ckwz: "位置9......",
						zwbs: "xxx标识9",
						zwzp: "照片9",
						zwyz: "张xx",
						tfzl: "京A~F0236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "B区 停车场",
						ckwz: "位置10......",
						zwbs: "xxx标识10",
						zwzp: "照片10",
						zwyz: "张xx",
						tfzl: "粤B~F1236"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "C区 停车场",
						ckwz: "位置11......",
						zwbs: "xxx标识11",
						zwzp: "照片11",
						zwyz: "张xx",
						tfzl: "湘A~0392"
					},
					{
						date: "2019-09-01 10:12:11",
						tcgmc: "D区 停车场",
						ckwz: "位置12......",
						zwbs: "xxx标识12",
						zwzp: "照片12",
						zwyz: "张xx",
						tfzl: "湘F~0312"
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
	.cheweiluru {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.cw-content {
		width: 100%;
		height: 750px;
		margin: 2% 0;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.cw-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.cw-content-nav>div:first-child {
		width: 30%;
	}

	.cw-content-nav>div {
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
