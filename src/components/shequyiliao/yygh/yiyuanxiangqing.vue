<template>
	<div>
		<div class="ksyy-content-nav">
			<div @click="chuanzhi(2)">
				返回
			</div>
		</div>

		<div class="yy-content">
			<!-- 标题 -->
			<div class="yy-content-title">
				<h1>{{yiyuanname}}</h1>
				<div>
					<div>地址：xxxxxxxxxxxx</div>
					<div>电话：54188541880</div>
				</div>
			</div>

			<!-- 填写信息 -->
			<div class="yy-content-tianxie">
				<div>
					<el-select v-model="keshi" placeholder="请选择科室" size="small" style="width: 100%;">
						<el-option label="1科" value="1科"> </el-option>
						<el-option label="2科" value="2科"> </el-option>
						<el-option label="3科" value="3科"> </el-option>
					</el-select>
				</div>
				<div>
					<el-select v-model="yisheng" placeholder="请选择医生" size="small" style="width: 100%;">
						<el-option label="医生1" value="医生1"> </el-option>
						<el-option label="医生2" value="医生2"> </el-option>
						<el-option label="医生3" value="医生3"> </el-option>
					</el-select>
				</div>
				<div>
					<el-date-picker v-model="riqi" type="date" placeholder="选择日期" size="small" style="width: 100%;">
					</el-date-picker>
				</div>
				<div>
					<el-time-picker v-model="shijian" :picker-options="{
							selectableRange: '00:00:00 - 23:59:59'
						}"
					 placeholder="请选择时段" size="small" style="width: 100%;">
					</el-time-picker>
				</div>
			</div>

			<!-- 表格信息 -->
			<div class="yy-content-table">
				<div class="add">
					<div>请选择患者</div>
					<div @click="dialogFormVisible = true">新增</div>
				</div>

				<div>
					<el-table :data="huanzhe.slice((currentPage-1)*pagesize,currentPage*pagesize)"
					border style="width: 100%" :header-cell-style="{background:'#C0C0FF',color:'white'}">
						<el-table-column label="单选" width="180" align="center">
							<template slot-scope="scope">
								<el-radio :label="scope.$index" v-model="danxuan" @change.native="dxan(scope.$index,scope.row)">单选</el-radio>
							</template>
						</el-table-column>
						<el-table-column prop="xuhao" label="序号" width="180" align="center"></el-table-column>
						<el-table-column prop="user" label="姓名" width="200" align="center"></el-table-column>
						<el-table-column prop="lxfs" label="联系方式" width="200" align="center"></el-table-column>
						<el-table-column prop="zjlx" label="证件类型" width="200" align="center"></el-table-column>
						<el-table-column prop="sfzh" label="省份证号" align="center"></el-table-column>
					</el-table>
				</div>

				<div class="fenye">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[3,5]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="huanzhe.length">
					</el-pagination>
				</div>
			</div>
		</div>

		<!-- 确认 -->
		<div class="queren">
			<el-button type="primary" style="width: 12%;" @click="chuanzhi(1)">确认</el-button>
		</div>


		<!-- 新增信息 -->
		<el-dialog title="新增患者" :visible.sync="dialogFormVisible" style="width: 70%;margin: 0 auto;">
			<el-form :model="form">
				<el-form-item label="患者名称" :label-width="formLabelWidth">
					<el-input v-model="form.hzname" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="联系方式" :label-width="formLabelWidth">
					<el-input v-model="form.lxfs" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="证件类型" :label-width="formLabelWidth">
					<el-select v-model="form.zjlx" placeholder="请选择证件类型" style="width: 100%;">
						<el-option label="居民省份证" value="居民省份证"></el-option>
						<el-option label="护照" value="护照"></el-option>
						<el-option label="军人证" value="军人证"></el-option>
						<el-option label="党员证" value="党员证"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="证件号码" :label-width="formLabelWidth">
					<el-input v-model="form.zjhm" autocomplete="off"></el-input>
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
	export default {
		name: "yiyuanxiangqing",
		data() {
			return {
				keshi: "", //科室
				yisheng: "", //医生
				riqi: "", //日期
				shijian: "", //时间
				currentPage: 1, //初始页
				pagesize: 5, //每页显示的数据
				huanzhe: [{
						xuhao: 1,
						user: "张三",
						lxfs: "18246599958",
						zjlx: "身份证",
						sfzh: "437984669505261510"
					},
					{
						xuhao: 2,
						user: "张三",
						lxfs: "18246500058",
						zjlx: "身份证",
						sfzh: "437984669505261512"
					},
					{
						xuhao: 3,
						user: "张三",
						lxfs: "18246111158",
						zjlx: "身份证",
						sfzh: "437984669505261513"
					},
					{
						xuhao: 4,
						user: "李四",
						lxfs: "18246522258",
						zjlx: "身份证",
						sfzh: "437984669505261514"
					},
					{
						xuhao: 5,
						user: "李四",
						lxfs: "18246533358",
						zjlx: "身份证",
						sfzh: "437984669505261511"
					}
				],
				danxuantion: {},
				danxuan: false,
				dialogFormVisible: false,
				form: {
					hzname: '',
					lxfs: '',
					zjlx: '',
					zjhm: ''
				},
				formLabelWidth: '120px',
				yiyuanname:"湘雅第一医院"
			}
		},
		methods: {
			chuanzhi(zhi) {
				if (zhi == 1) {
					this.$confirm('确定提交预约吗?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
						center: true
					}).then(() => {
						this.$message({
							type: 'success',
							message: '提交成功!',
						});
						this.$emit("chuanzhi", zhi)
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '提交失败'
						});
					});
				} else {
					this.$emit("chuanzhi", zhi)
				}
			},
			dxan(index, row) { //获取选中数据
				this.danxuantion = row;
			},
			handleSizeChange(size) {
				this.pagesize = size;
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage
			},
			add(){
				//新增数据
				this.dialogFormVisible = false
				let xzsj = {
					xuhao: this.huanzhe.length+1,
					user: this.form.hzname,
					lxfs: this.form.lxfs,
					zjlx: this.form.zjlx,
					sfzh: this.form.zjhm
				}
				this.huanzhe.push(xzsj);
				this.form.hzname = ""
				this.form.lxfs = ""
				this.form.zjlx = ""
				this.form.zjhm = ""
			}
		}
	}
</script>

<style scoped>
	.ksyy-content-nav {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.ksyy-content-nav>div:first-child {
		width: 6%;
		cursor: pointer;
		height: 32px;
		color: white;
		line-height: 32px;
		text-align: center;
		background: url(../../../assets/image/shequyiliao/fanhui.png) no-repeat;
		background-size: 100%;
		margin: 1%;
	}

	/* 标题 */
	.yy-content-title {
		width: 98%;
		text-align: center;
		margin: 0 auto;
		border-bottom: 1px solid #E4E4E4;
	}

	.yy-content-title>div {
		margin: 1%;
	}

	.yy-content-title>div>div {
		display: inline-block;
		margin: 0 5%;
	}

	/* 填写信息 */
	.yy-content-tianxie {
		width: 100%;
	}

	.yy-content-tianxie>div {
		width: 23%;
		display: inline-block;
		margin: 2% 1%;
	}

	/* 表格信息 */
	.yy-content-table {
		width: 98%;
		margin: 0 auto;
		/* height: 380px; */
		border: 1px solid #CCCCCC;
	}

	.add {
		width: 100%;
		height: 40px;
		cursor: pointer;
		line-height: 40px;
		text-indent: 10px;
	}

	.add>div {
		display: inline-block;
	}

	.add>div:last-child {
		color: #0000FF;
		font-weight: bold;
		text-decoration: underline;
	}

	.fenye {
		text-align: right;
		margin: 1%;
	}

	.queren {
		width: 98%;
		margin: 3% auto;
		text-align: right;
	}
	
</style>
