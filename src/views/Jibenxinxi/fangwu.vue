<template>
	<div class="fangwu">
		<topnav title="房屋信息"></topnav>

		<div class="fw-content">
			<div class="fw-content-nav">
				<div>
					<el-select v-model="fclx" placeholder="房产类型">
						<el-option label="一手房" value="一手房"></el-option>
						<el-option label="二手房" value="二手房"></el-option>
					</el-select>
				</div>
				<div>
					<el-select v-model="quyu" placeholder="区域">
						<el-option label="A区" value="A区"></el-option>
						<el-option label="B区" value="B区"></el-option>
						<el-option label="C区" value="C区"></el-option>
						<el-option label="D区" value="D区"></el-option>
					</el-select>
				</div>
				<div>
					<el-select v-model="zhaungxiu" placeholder="装修">
						<el-option label="毛胚" value="毛胚"> </el-option>
						<el-option label="精装" value="精装"> </el-option>
						<el-option label="简装" value="简装"> </el-option>
						<el-option label="豪华装修" value="豪华装修"> </el-option>
					</el-select>
				</div>
				<div>
					<el-select v-model="fwlx" placeholder="房屋类型">
						<el-option label="商品房" value="商品房"></el-option>
						<el-option label="经济适用房" value="经济适用房"></el-option>
						<el-option label="小产权" value="小产权"></el-option>
						<el-option label="xxx" value="xxx"></el-option>
					</el-select>
				</div>
				<div>
					<el-input v-model="bianhao" placeholder="请输入编号"></el-input>
				</div>
				<div>
					<el-row>
						<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 40%;">查询</el-button>
						<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 40%;" @click="insterpd = true">添加</el-button>
					</el-row>
				</div>
			</div>

			<div class="table">
				<el-table :data="fangwu.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				 :header-cell-style="{background:'#C0C0FF',color:'white'}">
					<el-table-column prop="xuhao" label="序号" width="100" align="center"></el-table-column>
					<el-table-column prop="fclx" label="房产类型" width="130" align="center"></el-table-column>
					<el-table-column prop="quyu" label="区域" width="130" align="center"></el-table-column>
					<el-table-column prop="mianji" label="面积" width="130" align="center"></el-table-column>
					<el-table-column prop="jsjt" label="几室几厅" width="140" align="center"></el-table-column>
					<el-table-column prop="suoying" label="楼层索引(房屋编号)" width="150" align="center"></el-table-column>
					<el-table-column prop="zhaungxiu" label="装修" width="130" align="center"></el-table-column>
					<el-table-column prop="fwlx" label="房屋类型" width="140" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="150" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;" @click="updateRow(scope.row)">修改</el-button>
							<el-button type="text" size="small" style="color: red;" @click.native.prevent="deleteRow(scope.$index,scope.row.suoying,fangwu)">删除</el-button>
							<el-button type="text" size="small" style="color: #0000FF;">详情</el-button>
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


		<!-- 添加 -->
		<el-dialog title="添加房屋" :visible.sync="insterpd" style="width: 70%;margin: 0 auto;">
			<el-form :model="inster">
				<el-form-item label="房产类型" :label-width="formLabelWidth">
					<el-select v-model="inster.fclx" placeholder="请选择">
						<el-option label="一手房" value="一手房"></el-option>
						<el-option label="二手房" value="二手房"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="区域" :label-width="formLabelWidth">
					<el-select v-model="inster.quyu" placeholder="请选择">
						<el-option label="A区" value="A区"></el-option>
						<el-option label="B区" value="B区"></el-option>
						<el-option label="C区" value="C区"></el-option>
						<el-option label="D区" value="D区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="面积" :label-width="formLabelWidth">
					<el-input v-model="inster.mianji" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="几室几厅" :label-width="formLabelWidth">
					<el-select v-model="inster.jsjt" placeholder="请选择">
						<el-option label="1室1厅" value="1室1厅"></el-option>
						<el-option label="2室1厅" value="2室1厅"></el-option>
						<el-option label="2室2厅" value="2室2厅"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋编号" :label-width="formLabelWidth">
					<el-input v-model="inster.bianhao" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="装修" :label-width="formLabelWidth">
					<el-select v-model="inster.zhaungxiu" placeholder="请选择">
						<el-option label="毛胚" value="毛胚"> </el-option>
						<el-option label="精装" value="精装"> </el-option>
						<el-option label="简装" value="简装"> </el-option>
						<el-option label="豪华装修" value="豪华装修"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋类型" :label-width="formLabelWidth">
					<el-select v-model="inster.fwlx" placeholder="请选择">
						<el-option label="商品房" value="商品房"></el-option>
						<el-option label="经济适用房" value="经济适用房"></el-option>
						<el-option label="小产权" value="小产权"></el-option>
						<el-option label="xxx" value="xxx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋备注" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="inster.beizhu"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="insterpd = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
		
		<!-- 修改 -->
		<el-dialog title="修改房屋" :visible.sync="updatepd" style="width: 70%;margin: 0 auto;">
			<el-form :model="update">
				<el-form-item label="房产类型" :label-width="formLabelWidth">
					<el-select v-model="update.fclx" placeholder="请选择">
						<el-option label="一手房" value="一手房"></el-option>
						<el-option label="二手房" value="二手房"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="区域" :label-width="formLabelWidth">
					<el-select v-model="update.quyu" placeholder="请选择">
						<el-option label="A区" value="A区"></el-option>
						<el-option label="B区" value="B区"></el-option>
						<el-option label="C区" value="C区"></el-option>
						<el-option label="D区" value="D区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="面积" :label-width="formLabelWidth">
					<el-input v-model="update.mianji" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="几室几厅" :label-width="formLabelWidth">
					<el-select v-model="update.jsjt" placeholder="请选择">
						<el-option label="1室1厅" value="1室1厅"></el-option>
						<el-option label="2室1厅" value="2室1厅"></el-option>
						<el-option label="2室2厅" value="2室2厅"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋编号" :label-width="formLabelWidth">
					<el-input v-model="update.bianhao" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="装修" :label-width="formLabelWidth">
					<el-select v-model="update.zhaungxiu" placeholder="请选择">
						<el-option label="毛胚" value="毛胚"> </el-option>
						<el-option label="精装" value="精装"> </el-option>
						<el-option label="简装" value="简装"> </el-option>
						<el-option label="豪华装修" value="豪华装修"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋类型" :label-width="formLabelWidth">
					<el-select v-model="update.fwlx" placeholder="请选择">
						<el-option label="商品房" value="商品房"></el-option>
						<el-option label="经济适用房" value="经济适用房"></el-option>
						<el-option label="小产权" value="小产权"></el-option>
						<el-option label="xxx" value="xxx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="房屋备注" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="update.beizhu"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="updatepd = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "jiankang",
		data() {
			return {
				fclx: '', //房产类型
				quyu: '', //区域
				zhaungxiu: '', //装修
				fwlx: '', //房屋类型
				bianhao: '', //房屋编号
				currentPage: 1, //初始页
				pagesize: 4, //每页显示的数据
				fangwu: [{
						xuhao: "1",
						fclx: "二手房",
						quyu: "A区",
						mianji: "98/平米",
						jsjt: "2室2厅",
						suoying: "1栋101室",
						zhaungxiu: "毛胚",
						fwlx: "商品房"
					},
					{
						xuhao: "2",
						fclx: "一手房",
						quyu: "B区",
						mianji: "98/平米",
						jsjt: "3室2厅",
						suoying: "1栋102室",
						zhaungxiu: "精装",
						fwlx: "商品房"
					},
					{
						xuhao: 3,
						fclx: "二手房",
						quyu: "C区",
						mianji: "98/平米",
						jsjt: "2室2厅",
						suoying: "1栋103室",
						zhaungxiu: "豪华精装",
						fwlx: "经济适用房"
					},
					{
						xuhao: 4,
						fclx: "一手房",
						quyu: "D区",
						mianji: "98/平米",
						jsjt: "3室2厅",
						suoying: "1栋104室",
						zhaungxiu: "精装",
						fwlx: "经济适用房"
					}
				],
				insterpd: false,
				updatepd: false,
				inster: {
					fclx: '',
					quyu: '',
					mianji: '',
					jsjt: '',
					bianhao: '',
					zhaungxiu: '',
					fwlx: '',
					beizhu: ''
				},
				update: {
					fclx: '',
					quyu: '',
					mianji: '',
					jsjt: '',
					bianhao: '',
					zhaungxiu: '',
					fwlx: '',
					beizhu: ''
				},
				formLabelWidth: '120px'
			}
		},
		methods: {
			handleSizeChange(size) {
				this.pagesize = size;
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
			},
			add() {

				this.insterpd = true
			},
			updateRow(duixiang){
				this.update.fclx = duixiang.fclx
				this.update.quyu = duixiang.quyu
				this.update.mianji = duixiang.mianji
				this.update.jsjt = duixiang.jsjt
				this.update.bianhao = duixiang.bianhao
				this.update.zhaungxiu = duixiang.zhaungxiu
				this.update.fwlx = duixiang.fwlx
				this.update.beizhu = ""
				this.updatepd = true
			},
			deleteRow(index, suoyin, rows) {
				this.$confirm('确定要删除' + suoyin + '房屋信息吗？', '系统提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index, 1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				})
			}
		},
		components: {
			topnav
		}
	}
</script>

<style scoped>
	.fangwu {
		width: 98%;
		margin: 0 auto;
		background: white;
	}


	.fw-content {
		width: 100%;
		height: 750px;
		margin: 2% 0;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.fw-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.fw-content-nav>div:last-child {
		width: 30%;
		text-align: center;
	}

	.fw-content-nav>div {
		width: 25%;
		flex-direction: column;
		margin: 0 1%;
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
