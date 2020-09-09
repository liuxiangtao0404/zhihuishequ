<template>
	<div class="jiaofei">
		<topnav title="缴费查询"></topnav>

		<div class="jf-content">
			<div class="jf-content-nav">
				<div>
					<el-date-picker v-model="riqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<div>
					<el-select v-model="jflx" placeholder="缴费类型" style="width: 80%;">
						<el-option label="水费" value="水费"></el-option>
						<el-option label="电费" value="电费"></el-option>
						<el-option label="停车费" value="停车费"></el-option>
						<el-option label="燃气费" value="燃气费"></el-option>
						<el-option label="固话宽带" value="固话宽带"></el-option>
						<el-option label="有线电视" value="有线电视"></el-option>
						<el-option label="物业费" value="物业费"></el-option>
					</el-select>
				</div>
				<div>
					<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 50%;">查询</el-button>
				</div>
			</div>
			
			<div class="table">
				<el-table :data="jiaofei.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				:header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="date" label="日期" width="200" align="center"></el-table-column>
					<el-table-column prop="leixing" label="缴费类型" width="170" align="center"></el-table-column>
					<el-table-column prop="zhls" label="住户楼室" width="170" align="center"></el-table-column>
					<el-table-column prop="jfje" label="缴费金额" width="170" align="center"></el-table-column>
					<el-table-column prop="jfr" label="缴费人" width="170" align="center"></el-table-column>
					<el-table-column prop="jfzt" label="缴费状态" width="170" align="center"></el-table-column>
					<el-table-column prop="jffs" label="缴费方式" align="center"></el-table-column>
				</el-table>
			</div>
			
			<div class="fenye">
				<div class="fyxg">
					<el-pagination
					background
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[2,4,6]"
					:page-size="pagesize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="jiaofei.length">
					</el-pagination>
				</div>
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
				riqi:"",
				jflx:"",
				currentPage: 1, //初始页
				pagesize: 4 ,//每页显示的数据
				jiaofei:[
					{
						date:"2019-09-01 10:12:11",
						leixing:"水费",
						zhls:"6楼1202",
						jfje:"50",
						jfr:"张xx",
						jfzt:"缴费成功",
						jffs:"微信支付"
					},
					{
						date:"2020-08-28 10:12:11",
						leixing:"电费",
						zhls:"6楼1202",
						jfje:"100",
						jfr:"张xx",
						jfzt:"缴费成功",
						jffs:"微信支付"
					},
					{
						date:"2020-08-29 10:12:11",
						leixing:"水费",
						zhls:"6楼1205",
						jfje:"80",
						jfr:"刘xx",
						jfzt:"缴费成功",
						jffs:"微信支付"
					},
					{
						date:"2020-08-29 10:12:11",
						leixing:"电费",
						zhls:"6楼1206",
						jfje:"80",
						jfr:"王xx",
						jfzt:"缴费成功",
						jffs:"支付宝支付"
					},
					{
						date:"2020-08-30 10:12:11",
						leixing:"水费",
						zhls:"5楼1202",
						jfje:"60",
						jfr:"付xx",
						jfzt:"缴费成功",
						jffs:"微信支付"
					},
					{
						date:"2020-08-30 10:12:11",
						leixing:"有线电视",
						zhls:"5楼1202",
						jfje:"100",
						jfr:"付xx",
						jfzt:"缴费成功",
						jffs:"现金支付"
					},
					{
						date:"2020-08-31 10:12:11",
						leixing:"燃气费",
						zhls:"7楼1002",
						jfje:"50",
						jfr:"李xx",
						jfzt:"缴费成功",
						jffs:"支付宝支付"
					},
					{
						date:"2020-08-31 10:12:11",
						leixing:"物业费",
						zhls:"7楼1002",
						jfje:"50",
						jfr:"李xx",
						jfzt:"缴费成功",
						jffs:"支付宝支付"
					}
				],
				jieshou:[]
			}
		},
		methods:{
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
	.jf-content-nav{
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}
	.jf-content-nav>div:first-child {
		width: 30%;
	}
	.jf-content-nav>div{
		width: 20%;
		flex-direction: column;
		margin: 0 2%;
	}
	
	.table{
		width: 98%;
		margin: 0 auto;
	}
	
	.fenye{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #E6E6FF;
	}
	.fyxg{
		float: right;
		margin: 0.8% 1%;
	}
</style>
