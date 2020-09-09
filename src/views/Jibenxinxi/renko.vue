<template>
	<div class="jiankang">
		<topnav title="人口信息"></topnav>

		<div class="jf-content">
			<div class="jf-content-nav">
				<div>
					<el-date-picker v-model="riqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
				</div>
				<div>
					<el-row>
						<el-button type="primary" size="small"
						style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 20%;">查询</el-button>
						<el-button type="primary" size="small"
						style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 20%;"
						@click="dialogFormVisible = true">发布小贴士</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="jiankang.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				 :header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="date" label="发布日期" width="250" align="center"></el-table-column>
					<el-table-column prop="jkbt" label="健康标题" width="250" align="center"></el-table-column>
					<el-table-column prop="jknr" label="健康内容" width="240" align="center"></el-table-column>
					<el-table-column prop="beizhu" label="备注" width="240" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="240" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;">修改</el-button>
							<el-button type="text" size="small" style="color: red;">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<div class="fenye">
				<div class="fyxg">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[4,6,8]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="jiankang.length">
					</el-pagination>
				</div>
			</div>
		</div>
		
		
		<!-- 发布小贴士 -->
		<el-dialog title="发布小贴士" :visible.sync="dialogFormVisible" style="width: 70%;margin: 0 auto;">
			<el-form :model="form">
				<el-form-item label="键康标题" :label-width="formLabelWidth">
					<el-input v-model="form.jkbt" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="键康内容" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="form.jknr"></el-input>
				</el-form-item>
				<el-form-item label="备注" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="form.beizhu"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	//格式化后的时间格式：年-月-日 时：分：秒
	var parseDate = function(datetime){
		return datetime<10?'0'+datetime:datetime;
	}
	export default {
		name: "jiankang",
		data() {
			return {
				riqi: "",
				currentPage: 1, //初始页
				pagesize: 8, //每页显示的数据
				jiankang: [
					{
						date: "2019-09-01 10:12:11",
						jkbt: "标题1",
						jknr: "内容1",
						beizhu: "xxx"
					},
					{
						date: "2019-09-01 10:12:11",
						jkbt: "标题2",
						jknr: "内容2",
						beizhu: "xxx"
					},
					{
						date: "2019-09-01 10:12:11",
						jkbt: "标题3",
						jknr: "内容3",
						beizhu: "xxx"
					},
					{
						date: "2019-09-01 10:12:11",
						jkbt: "标题4",
						jknr: "内容4",
						beizhu: "xxx"
					}
				],
				dialogFormVisible: false,
				form: {
					jkbt: '',
					jknr: '',
					beizhu: ''
				},
				formLabelWidth: '120px',
				date:"草",			//系统时间
			}
		},
		methods: {
			handleSizeChange(size) {
				this.pagesize = size;
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
			},
			add(){
				this.dqsj();
				let shuju = {
					date:this.date,
					jkbt:this.form.jkbt,
					jknr:this.form.jknr,
					beizhu:this.form.beizhu
				}
				this.jiankang.push(shuju)
				this.form.jkbt = ""
				this.form.jknr = ""
				this.form.beizhu = ""
				this.dialogFormVisible = false
			},
			dqsj(){
				var date=new Date();
				var year=date.getFullYear();//得到当前年份
				var month=parseDate(date.getMonth()+1);//得到当前月份
				var day=parseDate(date.getDate());//得到当前几号
				var hour=parseDate(date.getHours());//得到当前小时
				var min=parseDate(date.getMinutes());//得到当前分钟
				var seconds=parseDate(date.getSeconds());//得到当前秒
				this.date = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seconds
			}
		},
		components: {
			topnav
		}
	}
</script>

<style scoped>
	.jiankang {
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
		width: 60%;
		text-align: left;
	}

	.jf-content-nav>div {
		width: 40%;
		flex-direction: column;
		margin: 0 2%;
		text-align: right;
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
