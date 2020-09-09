<template>
	<div class="cw-content">
		<div class="cw-content-nav">
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
			<el-table :data="cheweiluru.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
			 :header-cell-style="{background:'#C0C0FF',color:'white'}">
				<el-table-column prop="date" label="抓拍图片" width="120" align="center"></el-table-column>
				<el-table-column prop="kahao" label="卡号" width="120" align="center"></el-table-column>
				<el-table-column prop="sksj" label="刷卡时间" width="120" align="center"></el-table-column>
				<el-table-column prop="sbmc" label="设备名称" width="120" align="center"></el-table-column>
				<el-table-column prop="sbh" label="设备号" width="120" align="center"></el-table-column>
				<el-table-column prop="jcdz" label="进出动作" width="120" align="center"></el-table-column>
				<el-table-column prop="yzfs" label="验证方式" width="120" align="center"></el-table-column>
				<el-table-column prop="ckr" label="持卡人" width="120" align="center"></el-table-column>
				<el-table-column prop="fwh" label="房屋号" width="120" align="center"></el-table-column>
				<el-table-column prop="szld" label="所在楼栋" align="center"></el-table-column>
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
</template>

<script>
	export default {
		name: "jilu",
		data() {
			return {
				riqi: "",
				currentPage: 1, //初始页
				pagesize: 4, //每页显示的数据
				cheweiluru: []
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
			
		}
	}
</script>

<style scoped>
	.cw-content {
		width: 100%;
		height: 750px;
		margin: 2% 0;
		position: relative;
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
