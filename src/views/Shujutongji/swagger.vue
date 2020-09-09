<template>
	<div class="jiankang">
		<topnav title="房屋分析统计"></topnav>

		<div class="jf-content">
			<div class="jf-content-nav">
				<div>
					<el-input v-model="input" placeholder="请输入老师职位"></el-input>
				</div>
				<div>
					<el-row>
						<el-button type="primary" size="small"
						style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 20%;" @click="chaxun()">查询</el-button>
						<el-button type="primary" size="small"
						style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 20%;"
						@click="addopen = true">发布小贴士</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="fangwu.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				:header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="id" label="ID" width="250" align="center"></el-table-column>
					<el-table-column prop="teacherName" label="老师" width="250" align="center"></el-table-column>
					<el-table-column prop="teacherDesc" label="NULL" width="240" align="center"></el-table-column>
					<el-table-column prop="teacherPosition" label="职位" width="240" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="240" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;" @click.native.prevent="updatecz(scope.row)">修改</el-button>
							<el-button type="text" size="small" style="color: red;" @click.native.prevent="deleteRow(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<div class="fenye">
				<div class="fyxg">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[4,6,8]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="fangwu.length">
					</el-pagination>
				</div>
			</div>
		</div>
		
		
		<!-- 新增 -->
		<el-dialog title="新增老师" :visible.sync="addopen" style="width: 70%;margin: 0 auto;">
			<el-form :model="form">
				<el-form-item label="老师" :label-width="formLabelWidth">
					<el-input v-model="form.laoshi" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="职位" :label-width="formLabelWidth">
					<el-input v-model="form.zhiwei" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addopen = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
		
		<!-- 修改 -->
		<el-dialog title="修改老师" :visible.sync="Updateopen" style="width: 70%;margin: 0 auto;">
			<el-form :model="houqu">
				<el-form-item label="ID" :label-width="formLabelWidth">
					<el-input v-model="houqu.id" autocomplete="off" readonly></el-input>
				</el-form-item>
				<el-form-item label="老师" :label-width="formLabelWidth">
					<el-input v-model="houqu.laoshi" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="NULL" :label-width="formLabelWidth">
					<el-input v-model="houqu.null" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="职位" :label-width="formLabelWidth">
					<el-input v-model="houqu.zhiwei" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="Updateopen = false">取 消</el-button>
				<el-button type="primary" @click="updateRow(houqu.id)">确 定</el-button>
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
				input: "",
				currentPage: 1, //初始页
				pagesize: 8, //每页显示的数据,
				addopen: false,
				Updateopen: false,
				form: {
					laoshi: '',
					zhiwei: ''
				},
				formLabelWidth: '120px',
				date:"草",			//系统时间
				fangwu:[],
				houqu:{
					id:"",
					laoshi:"",
					null:"",
					zhiwei:""
				}
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
				this.axios.post("http://139.9.169.87:8081/examsystem/addTeacher?teacherName="+this.form.laoshi+"&teacherPosition="+this.form.zhiwei,{
					
				}, {
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/x-www-form-urlencoded"
					}
				})
				.then(res => {
					this.form.laoshi = ""
					this.form.zhiwei = ""
					// console.log(res)
					this.$message({
						  message: '增加成功',
						  type: 'success'
					});
					this.select();
				})
				.catch(err => {
					console.log(err)
					this.$message.error('增加失败');
				})
				this.addopen = false
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
			},
			deleteRow(id){
				this.axios.get("http://139.9.169.87:8081/examsystem/deleteTeacher?id="+id)
				.then(res => {
					this.$message({
						  message: '删除成功',
						  type: 'success'
					});
					this.select();
				})
				.catch(err => {
					console.log(err)
					this.$message.error('删除失败');
				})
			},
			updatecz(zhi){
				this.Updateopen = true
				this.houqu.id = zhi.id
				this.houqu.laoshi = zhi.teacherName
				this.houqu.null = zhi.teacherDesc
				this.houqu.zhiwei = zhi.teacherPosition
			},
			updateRow(id){
				this.axios.post("http://139.9.169.87:8081/examsystem/updateTeacher?id="+id+"&teacherName="+this.houqu.laoshi+"&teacherDesc="+this.houqu.null+"&teacherPosition="+this.houqu.zhiwei,{
					
				},
				{
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/x-www-form-urlencoded"
					}
				})
				.then(res => {
					// console.log(res)
					this.$message({
						  message: '修改成功',
						  type: 'success'
					});
					this.Updateopen = false
					this.select();
				})
				.catch(err => {
					console.log(err)
					this.$message.error('修改失败');
				})
			},
			select(){
				this.axios.get("http://139.9.169.87:8081/examsystem/getAllTeacherNoPage")
				.then(res => {
					this.fangwu = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
			},
			chaxun(){
				this.axios.get("http://139.9.169.87:8081/examsystem/getAllTeacherNoPage?positionName="+this.input)
				.then(res => {
					this.fangwu = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
			}
		},
		components: {
			topnav
		},
		mounted() {
			this.select()
		},
		watch:{
			// fangwu(q,h){
				//监听fangwu数组实时更新
				// if(this.input == ""){
					// this.select()
				// }else{
				// 	this.chaxun()
				// }
			// }
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
