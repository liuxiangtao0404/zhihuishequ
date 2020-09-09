<template>
	<div class="fangwufenlei">
		<topnav title="房屋分类统计"></topnav>

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

			<div class="nianfen">
				<el-select v-model="nianfenjieshou" placeholder="所有年份" size="small">
					<el-option v-for="item in nianfen" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>

			<div class="zhuxingtu">
				<div id="zhuxing"  style="width: 90%;height:500px;margin: 0 auto;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	import topnav from '../../components/topnav.vue' //头部
	export default {
		name: "fangwufenxi",
		data() {
			return {
				fwfltitle: [{
						img: require('../../assets/image/shujutongji/fwtj1.jpg'),
						count: 1000,
						text: "毛胚数"
					},
					{
						img: require('../../assets/image/shujutongji/fwtj2.jpg'),
						count: 500,
						text: "精装数"
					},
					{
						img: require('../../assets/image/shujutongji/fwtj3.jpg'),
						count: 100,
						text: "豪华精装数"
					},
					{
						img: require('../../assets/image/shujutongji/fwtj4.jpg'),
						count: 100,
						text: "入住数"
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
				zhuxingsj: {
					color:["#3AA1FF","#4ECB73"],
					legend: {
						bottom: 10,
						left: 'center'
					},
					tooltip: {},
					dataset: {
						source: [
							['product', 'house_num', 'house_area'],
							['毛坯', 1000, 90],
							['精装', 500, 120],
							['豪华精装', 100, 150],
							['入住', 100, 98]
						]
					},
					xAxis: {
						type: 'category'
					},
					yAxis: {},
					series: [
						{
							type: 'bar'
						},
						{
							type: 'bar'
						}
					]
				}
			}
		},
		methods: {
			zhexian(){
				const myzhuxing = this.$echarts.init(document.getElementById('zhuxing')); //收入对比
				myzhuxing.setOption(this.zhuxingsj)
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
	.fangwufenxi {
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
		margin: 0 4%;
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
</style>
