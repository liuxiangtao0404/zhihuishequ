<template>
	<div class="jiaofeifenlei">
		<topnav title="缴费分析统计"></topnav>
		
		<div class="fwfl-content">
			<div class="fwfl-nav">
				<div v-for="(item,index) in fwfltitle" :key="index">
					<div class="fwfl-nav-img">
						<img :src="item.img" width="100%">
					</div>
					<div class="fwfl-nav-xinxi">
						<div class="dazi">{{item.count}}</div>
						<div>{{item.text}}</div>
					</div>
				</div>
			</div>
		
			<div class="zhexiankuang">
				<div style="text-align: left;text-indent: 10px;display: inline-block;">收费分析</div>
				<div class="nianfen">
					<el-select v-model="nianfenjieshou" placeholder="所有年份" size="small">
						<el-option v-for="item in nianfen" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="zhuxingtu">
					<div id="zhexian1"  style="width: 90%;height:500px;margin: 0 auto;"></div>
				</div>
			</div>
		
			<div class="zhexiankuang">
				<div style="text-align: left;text-indent: 10px;display: inline-block;">欠费分析</div>
				<div class="nianfen">
					<el-select v-model="nianfenjieshou" placeholder="所有年份" size="small">
						<el-option v-for="item in nianfen" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="zhuxingtu">
					<div id="zhexian2"  style="width: 90%;height:500px;margin: 0 auto;"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	import topnav from '../../components/topnav.vue' //头部
	export default{
		name: "fangwufenxi",
		data() {
			return {
				fwfltitle: [{
						img: require('../../assets/image/shujutongji/jffx1.jpg'),
						count: 1000,
						text: "水费"
					},
					{
						img: require('../../assets/image/shujutongji/jffx2.jpg'),
						count: 500,
						text: "电费"
					},
					{
						img: require('../../assets/image/shujutongji/jffx3.jpg'),
						count: 100,
						text: "煤气费"
					},
					{
						img: require('../../assets/image/shujutongji/jffx4.jpg'),
						count: 100,
						text: "宽带费"
					},
					{
						img: require('../../assets/image/shujutongji/jffx5.jpg'),
						count: 100,
						text: "停车费"
					},
					{
						img: require('../../assets/image/shujutongji/jffx6.jpg'),
						count: 100,
						text: "物业费"
					}
				],
				nianfenjieshou: "",
				nianfen: [{
						value: '2019年',
						label: '2019年'
					},
					{
						value: '2018年',
						label: '2018年'
					},
					{
						value: '2017年',
						label: '2017年'
					},
					{
						value: '2016年',
						label: '2016年'
					},
					{
						value: '2015年',
						label: '2015年'
					},
					{
						value: '2014年',
						label: '2014年'
					},
					{
						value: '2013年',
						label: '2013年'
					},
					{
						value: '2012年',
						label: '2012年'
					},
					{
						value: '2011年',
						label: '2011年'
					},
					{
						value: '2010年',
						label: '2010年'
					},
					{
						value: '2009年',
						label: '2009年'
					},
					{
						value: '2008年',
						label: '2008年'
					}
				],
				zhexian1sj:{
					color:["#B9DDFF"],
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['水费', '电费', '煤气费', '宽带费', '停车费', '物业费']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [500, 1000, 1200, 900, 1000, 200],
						type: 'line',
						areaStyle: {}
					}]
				},
				zhexian2sj:{
					color:["#B9DDFF"],
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['水费', '电费', '煤气费', '宽带费', '停车费', '物业费']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [200, 800, 900, 500, 300, 50],
						type: 'line',
						areaStyle: {}
					}]
				}
			}
		},
		methods:{
			zhexian(){
				const myzhexian1 = this.$echarts.init(document.getElementById('zhexian1')); //收入对比
				myzhexian1.setOption(this.zhexian1sj)
				const myzhexian2 = this.$echarts.init(document.getElementById('zhexian2')); //收入对比
				myzhexian2.setOption(this.zhexian2sj)
			}
		},
		components: {
			topnav
		},
		mounted() {
			this.zhexian()
		}
	}
</script>

<style scoped>
	.jiaofeifenlei {
		width: 98%;
		margin: 0 auto;
		background: white;
	}
	
	/* 头部 */
	.fwfl-nav {
		width: 100%;
		color: black;
		display: flex;
		margin: 5% 0;
	}
	
	.fwfl-nav>div {
		width: 15%;
		margin: 0 1%;
		height: 80px;
		padding: 1%;
		box-sizing: border-box;
		border: 1px solid black;
		border-radius: 10px;
		flex-direction: column;
	}
	
	.fwfl-nav>div>div {
		display: inline-block;
		vertical-align: bottom;
	}
	
	.fwfl-nav-img {
		width: 35%;
		text-align: center;
	}
	
	.fwfl-nav-xinxi {
		width: 63%;
		text-align: center;
	}
	
	.fwfl-nav-xinxi>div {
		margin-bottom: 4%;
	}
	
	.dazi {
		font-size: 24px;
	}
	
	/* 选择年份 */
	.nianfen {
		width: 75%;
		margin: 0 auto;
		text-align: right;
	}
	
	
	.zhexiankuang{
		border: 1px solid #CFCFFF;
		margin: 1% 0;
		padding: 1% 0;
		box-sizing: border-box;
	}
</style>
