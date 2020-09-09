<template>
	<div class="yisheng">
		<topnav title="医生简介"></topnav>
		
		<template v-if="pdjm">
			<div class="ys-content">
				<div class="ys-content-left">
					<div class="ys-content-left-title">
						<div>
							<el-input v-model="sousuo" placeholder="请输入医院名称" size="small"></el-input>
						</div>
						<div>
							<el-button type="primary" size="small">Go</el-button>
						</div>
					</div>
					<div>
						<el-tree :data="shucha" :props="defaultProps" :default-expanded-keys="[1,2,3,4,5]"></el-tree>
					</div>
				</div>
				<div class="ys-content-right">
					<div class="ys-content-right-title">
						<div>
							<img src="../../assets/image/zhihuiwuye/dibiao.png" width="12%">
							<div>长沙</div>
							<div>切换城市</div>
						</div>
						<div>
							<div>
								<el-select v-model="keshi" placeholder="请选择科室" size="small">
									<el-option label="1科" value="1科"></el-option>
									<el-option label="2科" value="2科"></el-option>
									<el-option label="3科" value="3科"></el-option>
								</el-select>
							</div>
							<div>
								<el-input v-model="ysname" placeholder="请输入医生名称" size="small"></el-input>
							</div>
							<div>
								<el-button type="primary" size="small">搜索</el-button>
							</div>
						</div>
					</div>
					<div class="keshibiao">
						<div class="keshi" v-for="(item,index) in keshiarray" :key="index" @click="jinru(index)">
							<div class="keshi-yi">{{item.name}}</div>
							<div>
								<img :src="item.img">
							</div>
							<div>主任医生：{{item.username}}</div>
						</div>
					</div>
					<div class="fenye">
						<el-pagination
						background
						:current-page="currentPage"
						:page-sizes="[4,8,12]"
						:page-size="pagesize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="keshiarray.length">
						</el-pagination>
					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<gerenyisheng @setpanduan="getpanduan"></gerenyisheng>
		</template>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue' //头部
	import gerenyisheng from '../../components/shequyiliao/ysjj/gerenyisheng.vue' //医生个人信息
	export default {
		name: "yisheng",
		data() {
			return {
				sousuo: "", //搜索
				shucha: [
					{
						label: '当前位置',
						children: [
							{
								label: '佑姆塘社区医院'
							},
							{
								label: '湘雅一医院'
							},
							{
								label: '长沙光大医院'
							},
							{
								label: '长沙爱耳眼科'
							},
							{
								label: '湖南省中医附属医院'
							},
							{	
								label: '岳麓区人民医院'
							}
						]
					},
					{
						label: '省级医院',
						children: [
							{
								label: '湖南省人民医院'
							},
							{
								label: '湖南省儿童医院'
							},
							{
								label: '湖南省妇幼保键院'
							},
							{
								label: '湖南省xxx医院'
							}
						]
					},
					{
						label: '市级医院',
						children: [
							{
								label: '长沙市一医院'
							},
							{
								label: '长沙市二医院'
							},
							{
								label: '长沙市三医院'
							},
							{
								label: '长沙市四医院'
							},
							{
								label: '长沙市妇幼保健医'
							},
							{
								label: '长沙xxx医院'
							}
						]
					},
					{
						label: '专科医院',
						children: [
							{
								label: 'xxx牙科医院'
							},
							{
								label: 'xxx口腔医院'
							},
							{
								label: 'xxx皮肤病医院'
							},
							{
								label: 'xxx眼科医院'
							}
						]
					},
					{
						label: '重点医院',
						children: [
							{
								label: '湘雅一医院'
							},
							{
								label: '湘雅二医院'
							},
							{
								label: '湘雅三医院'
							},
							{
								label: '湘雅四医院'
							},
							{
								label: '湘雅五医院'
							}
						]
					},
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				keshi:"",	//科室
				ysname:"",	//医生名称
				keshiarray:[
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					},
					{
						name:"xxx科室",
						img:require('../../assets/image/shouye/logo.png'),
						username:"张xxx"
					}
				],
				currentPage:1,
				pagesize:9,
				pdjm:true,		//判断显示的界面
			}
		},
		methods: {
			jinru(index){
				this.pdjm = false
			},
			getpanduan(pd){
				this.pdjm = pd
			}
		},
		components: {
			topnav,
			gerenyisheng
		}
	}
</script>

<style scoped>
	.yisheng {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	/* 内容 */
	.ys-content {
		width: 100%;
		height: 800px;
		margin-bottom: 10%;
		margin-top: 2%;
		display: flex;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.ys-content>div {
		flex-direction: column;
	}

	.ys-content-left {
		width: 20%;
		border-right: 1px solid #E6E6FF;
	}

	.ys-content-left-title>div {
		display: inline-block;
		margin: 0 1.2%;
	}

	.ys-content-right {
		width: 80%;
		position: relative;
	}
	.ys-content-right-title>div{
		display: inline-block;
	}
	.ys-content-right-title>div:first-child{
		width: 15%;
		text-align: center;
	}
	.ys-content-right-title>div:last-child{
		width: 80%;
		text-align: right;
	}
	.ys-content-right-title>div>div{
		display: inline-block;
		margin-left: 3%;
	}
	.ys-content-right-title>div>div:last-child{
		color: #0000FF;
		text-decoration: underline;
	}

	.ys-content>div>div:first-child {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #E6E6FF;
	}
	
	
	.keshibiao{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.keshi{
		width: 23%;
		border-radius: 10px;
		margin: 3% 5%;
		cursor: pointer;
		border: 1px solid #D7D7D7;
	}
	.keshi>div{
		width: 100%;
		margin-top: 5%;
		margin-bottom: 1%;
		text-align: center;
	}
	.keshi-yi{
		text-indent: 10px;
		height: 30px;
		margin-top: 0 !important;
		margin-bottom: 0 !important;
		line-height: 30px;
		border-bottom: 1px solid #D7D7D7;
		text-align: left !important;
	}
	
	.fenye{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		padding: 1% 2%;
		box-sizing: border-box;
		text-align: right;
		border-top: 1px solid #D7D7D7;
	}
</style>
