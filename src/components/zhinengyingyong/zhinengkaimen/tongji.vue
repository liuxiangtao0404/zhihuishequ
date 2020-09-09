<template>
	<div class="tongji">
		<div class="pdtongji">
			<el-radio v-model="tongji" label="1">按日</el-radio>
			<el-radio v-model="tongji" label="2">按周</el-radio>
			<el-radio v-model="tongji" label="3">按月</el-radio>
		</div>

		<div id="anri" class="tjyangshi" v-show="tongji == '1'"></div>

		<div id="anzhou" class="tjyangshi" v-show="tongji == '2'"></div>

		<div id="anyue" class="tjyangshi" v-show="tongji == '3'"></div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	export default {
		name: "tongji",
		data() {
			return {
				tongji: "1",
				anrisj : {
					color:["#1890FF","#2FC25B","#FACC14","#223273"],
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['before_seven', 'an', 'noon', 'pm']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['蓝牙', 'APP', 'WIFI', '门禁卡', '指纹识别', '人脸识别', '语音识别']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: 'before_seven',
							type: 'line',
							stack: '总量',
							data: [1, 11, 21, 14.5, 0, 21.5, 25.2]
						},
						{
							name: 'an',
							type: 'line',
							stack: '总量',
							data: [3, 22, 32, 8.5, 0, 15.2, 17]
						},
						{
							name: 'noon',
							type: 'line',
							stack: '总量',
							data: [5, 33, 43, 8.5, 0, 15.2, 8]
						},
						{
							name: 'pm',
							type: 'line',
							stack: '总量',
							data: [7, 44, 54, 14.5, 1, 21.5, 25.2]
						}
					]
				},
				anzhousj : {
					color:["#1890FF","#2FC25B","#FACC14","#223273","#8543E0","#13C2C2","#3436C7"],
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['monday','tuesday', 'wednesday', 'thursday', 'friday','saturday','sunday']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['蓝牙', 'APP', 'WIFI', '门禁卡', '指纹识别', '人脸识别', '语音识别']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: 'monday',
							type: 'line',
							stack: '总量',
							data: [1, 11, 21, 14.5, 0, 21.5, 25.2]
						},
						{
							name: 'tuesday',
							type: 'line',
							stack: '总量',
							data: [3, 22, 32, 8.5, 0, 15.2, 17]
						},
						{
							name: 'wednesday',
							type: 'line',
							stack: '总量',
							data: [5, 33, 43, 8.5, 0, 15.2, 8]
						},
						{
							name: 'thursday',
							type: 'line',
							stack: '总量',
							data: [7, 44, 54, 14.5, 1, 21.5, 25.2]
						},
						{
							name: 'friday',
							type: 'line',
							stack: '总量',
							data: [11, 66, 76, 2, 18.4, 21.5, 25.2]
						},
						{
							name: 'saturday',
							type: 'line',
							stack: '总量',
							data: [13, 77, 87, 10, 11.9, 15.2, 17]
						}
					]
				},
				anyuesj : {
					color:["##1890FF","#2FC25B","#FACC14","#223273"],
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['before_seven', 'an', 'noon', 'pm']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['蓝牙', 'APP', 'WIFI', '门禁卡', '指纹识别', '人脸识别', '语音识别']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: 'before_seven',
							type: 'line',
							stack: '总量',
							data: [1, 11, 21, 14.5, 0, 21.5, 25.2]
						},
						{
							name: 'an',
							type: 'line',
							stack: '总量',
							data: [3, 22, 32, 8.5, 0, 15.2, 17]
						},
						{
							name: 'noon',
							type: 'line',
							stack: '总量',
							data: [5, 33, 43, 8.5, 0, 15.2, 8]
						},
						{
							name: 'pm',
							type: 'line',
							stack: '总量',
							data: [7, 44, 54, 14.5, 1, 21.5, 25.2]
						}
					]
				}
			}
		},
		methods: {
			zhexiantu(){
				const myanri = this.$echarts.init(document.getElementById('anri')); //按日
				myanri.setOption(this.anrisj)
				const myanzhou = this.$echarts.init(document.getElementById('anzhou')); //按周
				myanzhou.setOption(this.anzhousj)
				const myanyue = this.$echarts.init(document.getElementById('anyue')); //按月
				myanyue.setOption(this.anyuesj)
			}
		},
		mounted() {
			this.zhexiantu()
		},
		components: {

		}
	}
</script>

<style scoped>
	.tongji {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.pdtongji {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: right;
	}
	
	.tjyangshi{
		width: 90%;
		height:600px;
		margin: 0 auto;
	}
</style>
