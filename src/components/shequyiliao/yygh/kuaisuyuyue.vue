<template>
	<div>
		<div class="ksyy-content-nav">
			<div @click="chuanzhi(1)">
				返回
			</div>
			<div>
				当前位置：长沙市岳麓区茶子山路佑姆塘社区
				<img src="../../../assets/image/zhihuiwuye/dibiao.png" width="6%">
			</div>
			<div @click="chuanzhi(3)">
				选择其他医院
			</div>
		</div>
		
		<div class="kkyy-yiyuan">
			<div v-for="(item,index) in xinyiyuan" :key="index" @click="chuanzhi(4)">{{item.name}}</div>
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
				:total="yiyuan.length">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"kuaisuyuyue",
		data(){
			return{
				currentPage: 1, //初始页
				pagesize: 6 ,//每页显示的数据
				yiyuan:[
					{
						id:0,
						name:"佑姆塘社区医院"
					},
					{
						id:1,
						name:"湘雅一医院"
					},
					{
						id:2,
						name:"长沙光大医院"
					},
					{
						id:3,
						name:"长沙爱耳眼科"
					},
					{
						id:4,
						name:"湖南省中医附属医院"
					},
					{
						id:5,
						name:"岳麓区人民医院"
					}
				],
				xinyiyuan:[]
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
	.ksyy-content-nav>div:nth-of-type(2){
		font-weight: bold;
	}
	.ksyy-content-nav>div:last-child{
		color: #0066CC;
		font-weight: bold;
		margin-left: 57%;
		cursor: pointer;
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
