<template>
	<div class="home">
		<div class="home-top">
			<div>
				<img src="../assets/image/shouye/home_top1.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>楼宇数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top2.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>等级人口数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top3.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>智能设备数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top4.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>智能家居数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top5.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>预约挂号数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top6.jpg" width="35%">
				<div style="display: inline-block;">
					<div class="zicuzi">100</div>
					<div>系统报警数</div>
				</div>
			</div>
		</div>

		<div class="home-center">
			<div class="tu">
				<div class="bingtu">
					<div class="bingtu_first">
						<div>房屋类别统计</div>
						<div>单位：个</div>
					</div>
					<div>
						<div id="fangwu" style="width: 100%;height:350px;"></div>
					</div>
				</div>
				<div class="zhuxing">
					<div class="bingtu_first bingtu_left">
						<div>设备分布图</div>
					</div>
					<div style="width: 100%;height:350px;background: #000066;">
						<ve-bmap :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></ve-bmap>
					</div>
				</div>
				<div class="bingtu">
					<div class="bingtu_first">
						<div>设备状态</div>
						<div>单位：个</div>
					</div>
					<div>
						<div id="shebei" style="width: 100%;height:350px;"></div>
					</div>
				</div>
			</div>

			<div class="tu">
				<div class="bingtu">
					<div class="bingtu_first bingtu_left">
						<div>预约挂号统计</div>
					</div>
					<div>
						<div id="guahao" style="width: 100%;height:350px;"></div>
					</div>
				</div>
				<div class="zhuxing">
					<div class="bingtu_first bingtu_left">
						<div>缴费统计</div>
					</div>
					<div>
						<div id="jiaofei" style="width: 100%;height:350px;"></div>
					</div>
				</div>
				<div class="bingtu">
					<div class="bingtu_first bingtu_left">
						<div>报修统计</div>
					</div>
					<div>
						<div id="baoxiu" style="width: 100%;height:350px;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	export default {
		name: "home",
		data() {
			this.chartSettings = {
				key: 'yPBkKkT4zxDrOgbqSnKTlrpOg7BDWCDr',
				bmap: {
					center: [113.12942, 29.3719],
					zoom: 14,
					roam: true,
					mapStyle: {}
				}
			}
			this.chartTooltip = {
				show: true
			}
			return {
				fangwu: {		//房屋类别统计
					color: ['#3AA1FF', '#36CBCB', '#4ECB73', '#FBD437'],
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 房屋类别统计 : {c} '
					},
					legend: {
						bottom: 10,
						left: 'center',
						data: ['毛胚', '简装', '精装', '豪华装修']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						data: [{
								value: 200,
								name: '毛胚'
							},
							{
								value: 200,
								name: '简装'
							},
							{
								value: 250,
								name: '精装'
							},
							{
								value: 400,
								name: '豪华装修'
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
				shebeisj: {		//设备状态
					color: ['#3AA1FF', '#4ECB73', '#36CBCB'],
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 设备状态 : {c} '
					},
					legend: {
						bottom: 5,
						left: 'center',
						data: ['在线', '离线', '忙碌']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '60%'],
						data: [{
								value: 335,
								name: '在线'
							},
							{
								value: 310,
								name: '离线'
							},
							{
								value: 330,
								name: '忙碌'
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
				guahao: {		//预约挂号统计
					color: ['#3AA1FF', '#36CBCB', '#4ECB73'],
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 预约挂号统计 : {c} '
					},
					legend: {
						bottom: 10,
						left: 'center',
						data: ['正在预约', '预约成功', '预约失败']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						data: [{
								value: 200,
								name: '正在预约'
							},
							{
								value: 200,
								name: '预约成功'
							},
							{
								value: 350,
								name: '预约失败'
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
				jiaofei: {		//缴费统计
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
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
						data: ['水费', '电费', '停车费', '燃气费', '固话宽带', '有线电视', '物业费'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '缴费统计',
						type: 'bar',
						barWidth: '60%',
						data: [1000, 2500, 2000, 2000, 1500, 250, 750]
					}]
				},
				baoxiu: {		//报修统计
					color: ['#3AA1FF', '#4ECB73', '#36CBCB'],
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 报修统计 : {c} '
					},
					legend: {
						bottom: 5,
						left: 'center',
						data: ['正在处理', '已修复', '未修复']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '60%'],
						data: [{
								value: 150,
								name: '正在处理'
							},
							{
								value: 200,
								name: '已修复'
							},
							{
								value: 250,
								name: '未修复'
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
				chartSeries: [{
					type: 'scatter',
					coordinateSystem: 'bmap',
					data: [
						[113.132855, 29.37029, 1] // 经度，维度，value，...
					]
				}]
			}
		},
		methods: {
			echartu() { //设备饼图
				// 基于准备好的dom，初始化echarts实例
				const myfangwu = this.$echarts.init(document.getElementById('fangwu')); //房屋类别统计
				const myshebei = this.$echarts.init(document.getElementById('shebei')); //设备状态
				const myguahao = this.$echarts.init(document.getElementById('guahao')); //预约挂号统计
				const myjiaofei = this.$echarts.init(document.getElementById('jiaofei')); //缴费统计
				const mybaoxiu = this.$echarts.init(document.getElementById('baoxiu')); //报修统计
				// const 
				myshebei.setOption(this.shebeisj)
				myfangwu.setOption(this.fangwu)
				myguahao.setOption(this.guahao)
				myjiaofei.setOption(this.jiaofei)
				mybaoxiu.setOption(this.baoxiu)
			}
		},
		mounted() {
			this.echartu()
		}
	}
</script>

<style scoped>
	.home {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.home-top {
		width: 100%;
		height: 100px;
		margin-top: 2%;
		display: flex;
		border: 1px solid #e6e6ff;
	}

	.home-top>div {
		width: 16%;
		height: 70px;
		margin: 1% 2%;
		flex-direction: column;
		padding-top: 0.5%;
		box-sizing: border-box;
	}

	.home-top>div:first-child {
		padding-top: 0;
	}

	.home-top>div>img {
		vertical-align: bottom;
		margin-right: 5%;
	}

	.zicuzi {
		color: #623bfe;
		font-size: 30px;
		font-weight: bold;
	}




	.home-center {
		margin-top: 2%;
	}

	.tu {
		width: 100%;
		display: flex;
		margin: 3% 0;
	}

	.tu>div {
		flex-direction: column;
	}

	.bingtu {
		width: 27%;
		height: 450px;
		border: 1px solid #CFCFFF;
	}

	.bingtu_first {
		width: 100%;
		height: 40px;
		padding: 0 2%;
		box-sizing: border-box;
		font-size: 14px;
		line-height: 40px;
		border-bottom: 1px solid #CFCFFF;
	}

	.bingtu_first>div {
		display: inline-block;
	}

	.bingtu_first>div:first-child {
		float: left;
	}

	.bingtu_first>div:last-child {
		float: right;
	}

	.bingtu_left>div {
		float: left !important;
	}

	.zhuxing {
		width: 42%;
		height: 450px;
		margin: 0 2%;
		border: 1px solid #CFCFFF;
	}
</style>
