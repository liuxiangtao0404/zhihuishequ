<template>
	<div>
		<div class="ksyy-content-nav">
			<div @click="chuanzhi(2)">
				返回
			</div>
			<div>
				<span>类型：</span>
				<el-radio v-model="yylx" label="1">全部医院</el-radio>
				<el-radio v-model="yylx" label="2">省级医院</el-radio>
				<el-radio v-model="yylx" label="3">市级医院</el-radio>
				<el-radio v-model="yylx" label="4">专科医院</el-radio>
				<el-radio v-model="yylx" label="5">重点医院</el-radio>
			</div>
			<div>
				<div>
					<el-input v-model="yyname" placeholder="请输入医院名称" size="small"></el-input>
				</div>
				<div>
					<el-button type="primary" size="small">搜索</el-button>
				</div>
			</div>
		</div>
		
		<div class="kkyy-yiyuan">
			<div v-for="(item,index) in xinyiyuan" :key="index">{{item}}</div>
		</div>
		
		<div class="fenye">
			<div class="fyxg">
				<el-pagination
				background
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[4,8,12]"
				:page-size="pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="yiyuan.length">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"kuaisuyuyue1",
		data(){
			return{
				currentPage: 1, //初始页
				pagesize: 12 ,//每页显示的数据
				yiyuan:[
					"湘雅一医院",
					"湘雅二医院",
					"湘雅三医院",
					"湘雅口腔医院",
					"长沙市一医院",
					"长沙市二医院",
					"长沙市三医院",
					"长沙市四医院",
					"长沙市妇幼保键院",
					"湖南省儿童医院",
					"湖南省妇幼保键院",
					"湖南省人民医院",
					"湖南省xxx医院"
				],
				xinyiyuan:[],
				yylx:'1',		//医院类型
				yyname:"",		//医院名称
			}
		},
		methods:{
			handleSizeChange(size) {
				this.pagesize = size;
				this.xinyiyuan = this.yiyuan.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage
				this.xinyiyuan = this.yiyuan.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
			},
			chuanzhi(zhi){
				this.$emit("chuanzhi",zhi)
			}
		},
		created() {
			this.xinyiyuan = this.yiyuan.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
		}
	}
</script>

<style scoped>
	/* 快速预约 */
	.ksyy-content-nav{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #D7D7D7;
	}
	.ksyy-content-nav>div{
		display: inline-block;
		margin: 0 1%;
	}
	.ksyy-content-nav>div:first-child{
		width: 6%;
		cursor: pointer;
		height: 32px;
		color: white;
		line-height: 32px;
		text-align: center;
		background: url(../../../assets/image/shequyiliao/fanhui.png) no-repeat;
		background-size: 100%;
	}
	.ksyy-content-nav>div:last-child{
		margin-left: 22%;
	}
	.ksyy-content-nav>div:last-child>div{
		display: inline-block;
	}
	
	.kkyy-yiyuan{
		width: 100%;
		cursor: pointer;
		display: flex;
		flex-wrap: wrap;
	}
	.kkyy-yiyuan>div{
		width: 18%;
		margin: 3% 3.4%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		border-radius: 10px;
		border: 1px solid #D5D5D5;
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
