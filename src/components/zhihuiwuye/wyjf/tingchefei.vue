<template>
	<div class="shuifei">
		<div class="cklszd">查看历史账单</div>
		<div class="clear"></div>
		<div class="tingchefei">
			<div class="tcliebiao" v-for="(item,index) in fenyexianshi">
				<div class="yuantou">
					<div>{{item.chepai}}</div>
					<div>{{item.tingchechang}}</div>
				</div>
				<div class="tcxinxi">
					<div>入场时间: {{item.rcsj}}</div>
					<div>停车时长: {{item.tcsc}}<span class="chengzi" style="font-weight: bold;">{{item.tcscm}}</span>秒</div>
					<div>缴费金额: <span class="chengzi">{{item.jine}}</span>元</div>
					<div class="ljjf">立即缴费</div>
				</div>
			</div>
		</div>
		<div class="fenye">
			<div class="fyxg">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[6,3]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tingchefei.length">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dianfei",
		data() {
			return {
				tingchefei: [],
				currentPage: 1, //初始页
				pagesize: 6, //每页显示的数据
				fenyexianshi: []
			}
		},
		methods: {
			handleSizeChange(val) {
				this.pagesize = val;
				// console.log(`每页 ${val} 条`);
				this.fenyexianshi = this.tingchefei.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)

			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.fenyexianshi = this.tingchefei.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
				// console.log(`当前页: ${val}`);
			}
		},
		created() {
			this.axios.get("https://www.fastmock.site/mock/1a4c41deff4cc8fea2a4c0ec9edc97aa/zhihui/api/tingchefei").then(
				(res) => {
					this.tingchefei = res.data.data.tingchefei
					this.fenyexianshi = this.tingchefei.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
				}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	.shuifei {
		width: 100%;
		height: 750px;
		position: relative;
	}

	.left {
		float: left;
	}

	.right {
		float: right;
	}

	.cklszd {
		width: 120px;
		height: 30px;
		line-height: 30px;
		color: white;
		font-size: 14px;
		text-align: center;
		background: #C0C0FF;
		float: right;
	}

	.clear {
		clear: both;
	}

	.tingchefei {
		width: 80%;
		height: 550px;
		margin: 2% auto;
		display: flex;
		flex-wrap: wrap;
	}

	.tcliebiao {
		width: 21%;
		height: 280px;
		margin: 1% 5%;
		font-size: 14px;
	}

	.yuantou {
		width: 100%;
		height: 100px;
		color: white;
		text-align: center;
		background: #C0C0FF;
		padding-top: 10%;
		box-sizing: border-box;
		border-radius: 100px 100px 0 0;
	}

	.yuantou>div {
		line-height: 30px;
	}

	.yuantou>div:nth-of-type(1) {
		font-size: 24px;
	}

	.yuantou>div:nth-of-type(2) {}

	.tcxinxi {
		width: 100%;
		height: 180px;
		padding: 0 5%;
		box-sizing: border-box;
		border: 1px solid #E6E6FF;
	}

	.tcxinxi>div {
		line-height: 40px;
	}

	.chengzi {
		color: #FF6600;
	}

	.ljjf {
		background: #BDBDFF;
		border-radius: 5px;
		text-align: center;
		color: white;
		cursor: pointer;
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
