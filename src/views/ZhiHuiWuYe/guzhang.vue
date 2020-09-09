<template>
	<div class="guzhang">
		<topnav title="物业报修"></topnav>

		<div class="navtop">
			<div class="tab-top">
				<div :class="{'tab-active':tab == 1}" @click="tabqiehuan(1)">公共报修（4 | 2）</div>
				<div :class="{'tab-active':tab == 2}" @click="tabqiehuan(2)">个人报修（4 | 2）</div>
			</div>
		</div>

		<div class="tab-content">
			<div v-show="tab == 1">
				<div class="jf-content">
					<div class="jf-content-nav">
						<div>
							<el-date-picker v-model="ggriqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
						</div>
						<div>
							<el-select v-model="ggzhuangtai" placeholder="状态" size="small">
								<el-option label="已受理" value="已受理"></el-option>
								<el-option label="等待受理" value="等待受理"></el-option>
								<el-option label="正在进行" value="正在进行"></el-option>
								<el-option label="已修复" value="已修复"></el-option>
								<el-option label="等待修复" value="等待修复"></el-option>
							</el-select>
						</div>
						<div>
							<el-input v-model="ggusername" placeholder="请输入报修人姓名" size="small"></el-input>
						</div>
						<div>
							<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 50%;">查询</el-button>
						</div>
					</div>

					<div class="table">
						<el-table :data="gonggong.slice((gonggongyeshu-1)*gonggongshuju,gonggongyeshu*gonggongshuju)" border style="width: 100%" :header-cell-style="{background:'#C0C0FF',color:'white'}">
							<el-table-column prop="xuhao" label="序号" width="50" align="center"></el-table-column>
							<el-table-column prop="date" label="报修时间" width="180" align="center"></el-table-column>
							<el-table-column prop="bxwz" label="报修位置" width="140" align="center"></el-table-column>
							<el-table-column prop="bxnr" label="报修内容" width="130" align="center"></el-table-column>
							<el-table-column prop="bxr" label="报修人" width="100" align="center"></el-table-column>
							<el-table-column label="受理状态" width="120" align="center">
								<template slot-scope="scope">
									<div style="color: #FF6652;" v-if="scope.row.slzt == '等待受理'">{{scope.row.slzt}}</div>
									<div style="color: #009688;" v-else-if="scope.row.slzt == '已受理'">{{scope.row.slzt}}</div>
									<div v-else>{{scope.row.slzt}}</div>
								</template>
							</el-table-column>
							<el-table-column label="修复状态" width="120" align="center">
								<template slot-scope="scope">
									<div style="color: #FF6652;" v-if="scope.row.xfzt == '等待修复'">{{scope.row.xfzt}}</div>
									<div style="color: #0000FF;" v-else-if="scope.row.xfzt == '正在修复'">{{scope.row.xfzt}}</div>
									<div style="color: #0000FF;" v-else-if="scope.row.xfzt == '已修复'">{{scope.row.xfzt}}</div>
									<div v-else>{{scope.row.xfzt}}</div>
								</template>
							</el-table-column>
							<el-table-column prop="xfsj" label="修复时间" width="180" align="center"></el-table-column>
							<el-table-column prop="jjr" label="解决人" width="100" align="center"></el-table-column>
							<el-table-column fixed="right" label="操作" width="100" align="center">
								<template slot-scope="scope">
									<el-button type="text" size="small">查看详情</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>

					<div class="fenye">
						<div class="fyxg">
							<el-pagination
							background
							@size-change="gonggongye"
							@current-change="gonggongsj"
							:current-page="gonggongyeshu"
							:page-sizes="[2,4,6]"
							:page-size="gonggongshuju"
							layout="total, sizes, prev, pager, next, jumper"
							:total="gonggong.length">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
			<div v-show="tab == 2">
				<div class="jf-content">
					<div class="jf-content-nav">
						<div>
							<el-date-picker v-model="grriqi" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
						</div>
						<div>
							<el-select v-model="grzhuangtai" placeholder="状态" size="small">
								<el-option label="已受理" value="已受理"></el-option>
								<el-option label="等待受理" value="等待受理"></el-option>
								<el-option label="正在进行" value="正在进行"></el-option>
								<el-option label="已修复" value="已修复"></el-option>
								<el-option label="等待修复" value="等待修复"></el-option>
							</el-select>
						</div>
						<div>
							<el-input v-model="grusername" placeholder="请输入报修人姓名" size="small"></el-input>
						</div>
						<div>
							<el-button type="primary" size="small" style="background: #BDBDFF;border: 1px solid #BDBDFF;width: 50%;">查询</el-button>
						</div>
					</div>
				
					<div class="table">
						<el-table :data="geren.slice((gerenyeshu-1)*gerenshuju,gerenyeshu*gerenshuju)" border style="width: 100%" :header-cell-style="{background:'#C0C0FF',color:'white'}">
							<el-table-column prop="xuhao" label="序号" width="50" align="center"></el-table-column>
							<el-table-column prop="date" label="报修时间" width="180" align="center"></el-table-column>
							<el-table-column prop="bxwz" label="报修位置" width="140" align="center"></el-table-column>
							<el-table-column prop="bxnr" label="报修内容" width="130" align="center"></el-table-column>
							<el-table-column prop="bxr" label="报修人" width="100" align="center"></el-table-column>
							<el-table-column label="受理状态" width="120" align="center">
								<template slot-scope="scope">
									<div style="color: #FF6652;" v-if="scope.row.slzt == '等待受理'">{{scope.row.slzt}}</div>
									<div style="color: #009688;" v-else-if="scope.row.slzt == '已受理'">{{scope.row.slzt}}</div>
									<div v-else>{{scope.row.slzt}}</div>
								</template>
							</el-table-column>
							<el-table-column label="修复状态" width="120" align="center">
								<template slot-scope="scope">
									<div style="color: #FF6652;" v-if="scope.row.xfzt == '等待修复'">{{scope.row.xfzt}}</div>
									<div style="color: #0000FF;" v-else-if="scope.row.xfzt == '正在修复'">{{scope.row.xfzt}}</div>
									<div style="color: #0000FF;" v-else-if="scope.row.xfzt == '已修复'">{{scope.row.xfzt}}</div>
									<div v-else>{{scope.row.xfzt}}</div>
								</template>
							</el-table-column>
							<el-table-column prop="xfsj" label="修复时间" width="180" align="center"></el-table-column>
							<el-table-column prop="jjr" label="解决人" width="100" align="center"></el-table-column>
							<el-table-column fixed="right" label="操作" width="100" align="center">
								<template slot-scope="scope">
									<el-button type="text" size="small">查看详情</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				
					<div class="fenye">
						<div class="fyxg">
							<el-pagination
							background
							@size-change="gerenye"
							@current-change="gerensj"
							:current-page="gerenyeshu"
							:page-sizes="[2,4,6]"
							:page-size="gerenshuju"
							layout="total, sizes, prev, pager, next, jumper"
							:total="geren.length">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "guzhang",
		data() {
			return {
				tab: 1,
				ggriqi: "",			//公共开始时间
				ggzhuangtai: "",		//公共状态
				ggusername: "",			//公共用户信息
				gonggongyeshu: 1, 		//公共初始页
				gonggongshuju: 4 ,		//公共每页显示的数据
				gonggong: [
					{
						xuhao:1,
						date: "2019-09-12 16:12:20",
						bxwz: "A区 地下停车场...",
						bxnr: "电梯口门锁损坏",
						bxr: "张xx",
						slzt: "等待受理",
						xfzt: "-",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:2,
						date: "2019-09-11 16:12:20",
						bxwz: "A区 地下停车场...",
						bxnr: "电梯口门锁损坏",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "等待修复",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:3,
						date: "2019-09-10 16:12:20",
						bxwz: " B区 地下停车场...",
						bxnr: "电梯口门锁损坏",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "正在修复",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:4,
						date: "2019-09-10 16:12:20",
						bxwz: "B区 地下停车场...",
						bxnr: "电梯口门锁损坏",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "已修复",
						xfsj: "2019-09-11 16:12:20",
						jjr:"李xx"
					}
				],
				grriqi: "",			//个人开始时间
				grzhuangtai: "",		//个人状态
				grusername: "",			//个人用户信息
				gerenyeshu: 1, 			//个人初始页
				gerenshuju: 4 ,			//个人每页显示的数据
				geren: [
					{
						xuhao:1,
						date: "2019-09-12 16:12:20",
						bxwz: "A区 1栋 1202",
						bxnr: "水管漏水",
						bxr: "张xx",
						slzt: "等待受理",
						xfzt: "-",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:2,
						date: "2019-09-11 16:12:20",
						bxwz: "A区 1栋 1202",
						bxnr: "水管漏水",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "等待修复",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:3,
						date: "2019-09-10 16:12:20",
						bxwz: "A区 1栋 1202",
						bxnr: "水管漏水",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "正在修复",
						xfsj: "-",
						jjr:"李xx"
					},
					{
						xuhao:4,
						date: "2019-09-10 16:12:20",
						bxwz: "A区 1栋 1202",
						bxnr: "水管漏水",
						bxr: "张xx",
						slzt: "已受理",
						xfzt: "已修复",
						xfsj: "2019-09-11 16:12:20",
						jjr:"李xx"
					}
				]
			}
		},
		methods: {
			tabqiehuan(id) {
				this.tab = id
			},
			//公共
			gonggongye(size) {
				this.gonggongshuju = size;
				// console.log(this.pagesize)  //每页下拉显示数据
			},
			gonggongsj(currentPage) {
				this.gonggongyeshu = currentPage;
				// console.log(this.currentPage)  //点击第几页
			},
			//个人
			gerenye(size) {
				this.gerenshuju = size;
			},
			gerensj(currentPage) {
				this.gerenyeshu = currentPage;
			}
		},
		components: {
			topnav
		}
	}
</script>

<style scoped>
	.guzhang {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.navtop {
		height: 40px;
		line-height: 40px;
	}

	.tab-top {
		width: 90%;
		margin-top: 2%;
		display: flex;
	}

	.tab-top>div {
		cursor: pointer;
		width: 15%;
		text-align: center;
		font-size: 14px;
		border: 1px solid #E4E4E4;
		flex-direction: column;
	}

	.tab-active {
		color: white;
		background: #C0C0FF;
	}

	.tab-content {
		width: 100%;
		height: 650px;
		margin-top: 0.1%;
		margin-bottom: 5%;
		border: 1px solid #E4E4E4;
	}


	.jf-content {
		width: 100%;
		height: 650px;
		margin: 0;
		position: relative;
	}

	.jf-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.jf-content-nav>div:first-child {
		width: 30%;
	}
	
	.jf-content-nav>div {
		width: 20%;
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
