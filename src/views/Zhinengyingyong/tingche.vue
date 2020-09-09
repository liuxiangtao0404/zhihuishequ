<template>
	<div class="tingche">
		<topnav title="停车"></topnav>

		<div class="tingche-content">
			<div class="tc-nav">
				<div v-for="(item,index) in tctitle" :key="index">
					<div class="tc-nav-img">
						<img :src="item.img" width="100%">
					</div>
					<div class="tc-nav-xinxi">
						<div class="zise">{{item.count}}</div>
						<div>{{item.text}}</div>
					</div>
				</div>
			</div>

			<div class="tc-content">
				<div class="tc-row">
					<div>
						<div class="tc-row-title">
							<div class="left">收入对比</div>
							<div class="right">
								<el-radio v-model="shouru" label="1">按日</el-radio>
								<el-radio v-model="shouru" label="2">按周</el-radio>
								<el-radio v-model="shouru" label="3">按月</el-radio>
							</div>
							<div class="clear"></div>
						</div>
						<div>
							<div class="xiangqing">查看详情</div>
							<div id="shouru" style="width: 90%;height:280px;margin: 0 auto;"></div>
						</div>
					</div>
					<div>
						<div class="tc-row-title">
							<div>车辆监控</div>
						</div>
						<div>
							<img src="../../assets/image/zhinengyingyong/jiankong.png" width="100%">
						</div>
					</div>
					<div>
						<div class="tc-row-title">
							<div class="left">免费/异常抬杠</div>
							<div class="right">
								<el-radio v-model="taigang" label="1">按日</el-radio>
								<el-radio v-model="taigang" label="2">按周</el-radio>
								<el-radio v-model="taigang" label="3">按月</el-radio>
							</div>
							<div class="clear"></div>
						</div>
						<div>
							<div class="xiangqing">查看详情</div>
							<div id="taigang" style="width: 90%;height:280px;margin: 0 auto;"></div>
						</div>
					</div>
				</div>

				<div class="tc-row">
					<div>
						<div class="tc-row-title">
							<div>车辆出入场情况</div>
						</div>
						<div>
							<div class="xiangqing">查看详情</div>
							<div id="churuchang" style="width: 90%;height:280px;margin: 0 auto;"></div>
						</div>
					</div>
					<div>
						<div class="tc-row-title">
							<div>车辆停靠点</div>
						</div>
						<div>
							<img src="../../assets/image/zhinengyingyong/tingkao.png" style=" width:100%;height: 100%;">
						</div>
					</div>
					<div>
						<div class="tc-row-title">
							<div class="left">车牌号异常分析</div>
							<div class="right">
								<el-radio v-model="yichang" label="1">按日</el-radio>
								<el-radio v-model="yichang" label="2">按周</el-radio>
								<el-radio v-model="yichang" label="3">按月</el-radio>
							</div>
							<div class="clear"></div>
						</div>
						<div>
							<div class="xiangqing">查看详情</div>
							<div id="yichang" style="width: 90%;height:280px;margin: 0 auto;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "tingche",
		data() {
			return {
				tctitle: [{
						img: require('../../assets/image/zhinengyingyong/tingche1.png'),
						count: 5,
						text: "停车场数"
					},
					{
						img: require('../../assets/image/zhinengyingyong/tingche2.png'),
						count: 1000,
						text: "总车位数"
					},
					{
						img: require('../../assets/image/zhinengyingyong/tingche3.png'),
						count: 999,
						text: "场内车辆数"
					},
					{
						img: require('../../assets/image/zhinengyingyong/tingche4.png'),
						count: 50,
						text: "今日临时停车数"
					},
					{
						img: require('../../assets/image/zhinengyingyong/tingche5.png'),
						count: 1000,
						text: "今日临时收入数"
					},
					{
						img: require('../../assets/image/zhinengyingyong/tingche6.png'),
						count: 1000,
						text: "月卡数"
					}
				],
				shouru: "1",
				taigang: "1",
				yichang: "1",
				shourusj: {		//收入对比
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['昨天', '今天'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '收入对比',
						type: 'bar',
						barWidth: '60%',
						data: [5.5, 9.7]
					}]
				},
				taigangsj:{		//免费/异常抬杠
					legend: {
						bottom: 10,
						left: 'center',
					},
					tooltip: {},
					dataset: {
						dimensions: ['product', 'qian', 'today'],
						source: [
							{product: '昨天', 'qian': 43.3, 'today': 85.8},
							{product: '今天', 'qian': 83.1, 'today': 73.4}
						]
					},
					xAxis: {type: 'category'},
					yAxis: {},
					series: [
						{type: 'bar'},
						{type: 'bar'}
					]
				},
				churuchangsj: {		//车辆出入场情况
					color: ['#3AA1FF', '#36CBCB'],
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 车辆出入场情况 : {c} '
					},
					legend: {
						bottom: 5,
						left: 'center',
						data: ['出场', '入场']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '60%'],
						data: [{
								value: 400,
								name: '出场'
							},
							{
								value: 100,
								name: '入场'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				},
				yichangsj: {	//车牌号异常分析
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['昨天', '今天'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '车牌号异常分析',
						type: 'bar',
						barWidth: '60%',
						data: [15, 10]
					}]
				},
			}
		},
		methods: {
			echattstu(){
				const myshouru = this.$echarts.init(document.getElementById('shouru')); //收入对比
				myshouru.setOption(this.shourusj)
				const mytaigang = this.$echarts.init(document.getElementById('taigang')); //免费/异常抬杠
				mytaigang.setOption(this.taigangsj)
				const mychuruchang = this.$echarts.init(document.getElementById('churuchang')); //车辆出入场情况
				mychuruchang.setOption(this.churuchangsj)
				const myyichang = this.$echarts.init(document.getElementById('yichang')); //车牌号异常分析
				myyichang.setOption(this.yichangsj)
			}
		},
		components: {
			topnav
		},
		mounted() {
			this.echattstu()
		}
	}
</script>

<style scoped>
	.el-radio {
		margin-right: 10px !important;
	}

	.tingche {
		width: 98%;
		margin: 0 auto;
		font-size: 14px;
		background: white;
	}

	.tingche-content {
		width: 100%;
		/* height: 800px; */
		margin-bottom: 2%;
		margin-top: 2%;
		position: relative;
		border: 1px solid #E6E6FF;
	}

	.tc-nav {
		width: 100%;
		color: black;
		display: flex;
		margin: 5% 0;
	}

	.tc-nav>div {
		width: 15%;
		margin: 0 2%;
		height: 60px;
		flex-direction: column;
	}

	.tc-nav>div>div {
		display: inline-block;
		vertical-align: bottom;
	}

	.tc-nav-img {
		width: 35%;
		text-align: center;
	}

	.tc-nav-xinxi {
		width: 63%;
		text-align: center;
	}

	.tc-nav-xinxi>div {
		margin-bottom: 4%;
	}

	.zise {
		color: #957BFF;
		font-weight: bold;
		font-size: 25px;
	}

	.tc-content {
		width: 100%;
	}

	.tc-row {
		display: flex;
		margin-bottom: 3%;
	}

	.tc-row>div {
		width: 25%;
		height: 360px;
		margin: 0 0.5%;
		border: 1px solid #ccc;
		flex-direction: column;
	}

	.tc-row>div>div {
		width: 100%;
	}

	.tc-row>div:nth-of-type(2) {
		width: 45%;
	}

	.tc-row-title {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #CCCCCC;
	}

	.tc-row-title>div {
		margin: 0 1%;
	}

	.tc-row-title>div:first-child {
		width: 30%;
		font-size: 12px;
	}

	.tc-row-title>div:nth-of-type(2) {
		width: 65%;
		text-align: right;
	}

	.xiangqing {
		width: 95%;
		height: 30px;
		line-height: 30px;
		text-align: right;
		color: #623BFF;
		font-weight: bold;
	}
</style>
