<template>
	<div class="kuandai">
		<div class="navtop">
			<div class="tab-top left">
				<div :class="{'tab-active':tab == 1}" @click="tabqiehuan(1)">个人充值交费</div>
				<div :class="{'tab-active':tab == 2}" @click="tabqiehuan(2)">宽带包年续费</div>
			</div>
			<div class="zhangdan right">
				查看历史账单
			</div>
		</div>
		<div class="clear"></div>		<!-- 清除浮动 -->
		<div class="tab-content">
			<div v-show="tab == 1">
				<div class="kuangkuang">
					<div class="kktitle">填写充值信息</div>
					<div class="kk-content">
						<div>
							<div class="hangkuai">产品类型：</div>
							<div class="hangkuai">
								<el-select v-model="leixing" placeholder="请选择产品类型" size="small" style="width: 70%;">
									<el-option label="宽带" value="宽带"></el-option>
									<el-option label="固化" value="固化"></el-option>
									<el-option label="宽带" value="宽带"></el-option>
									<el-option label="手机" value="手机"></el-option>
								</el-select>
							</div>
						</div>
						<div>
							<div class="hangkuai">所在城市：</div>
							<div class="suozaichengshi hangkuai">
								<div><img src="../../../assets/image/zhihuiwuye/dibiao.png" width="60%"></div>
								<div><span>长沙</span></div>
								<div><a href="#">[切换城市]</a></div>
							</div>
						</div>
						<div>
							<div class="hangkuai">充值号码：</div>
							<div class="hangkuai">
								<el-input v-model="haoma" placeholder="请输入充值号码" size="small" style="width: 70%;"></el-input>
							</div>
						</div>
						<div>
							<div class="hangkuai">确认号码：</div>
							<div class="hangkuai">{{haoma}}</div>
						</div>
					</div>
				</div>
				<div class="kuangkuang">
					<div class="kktitle">选择支付方式</div>
					<div class="kk-content">
						<div>
							<div class="hangkuai">充值金额/元：</div>
							<div class="hangkuai chongzhi">
								<div :class="{'hangkuai':true,'shenglan':jeqiehuan == 1}" @click="jinetab(1)">50</div>
								<div :class="{'hangkuai':true,'shenglan':jeqiehuan == 2}" @click="jinetab(2)">100</div>
								<div :class="{'hangkuai':true,'shenglan':jeqiehuan == 3}" @click="jinetab(3)">200</div>
								<div :class="{'hangkuai':true,'shenglan':jeqiehuan == 4}" @click="jinetab(4)">300</div>
								<span>其他：</span>
								<span>
									<el-input v-model="jine" size="small" style="width: 20%;" @focus="jinetab(5)"></el-input>
								</span>
							</div>
						</div>
						<div>
							<div class="hangkuai">验证码：</div>
							<div class="hangkuai">
								<el-input v-model="czyzm" placeholder="请输入验证码" size="small" style="width: 40%;"></el-input>
								<img src="../../../assets/image/zhihuiwuye/yzm.png" style="vertical-align: middle;margin-left: 2%;">
							</div>
						</div>
						<div>
							<div class="hangkuai">支付方式：</div>
							<div class="hangkuai">
								<el-radio v-model="zffs" label="1">
									<img src="../../../assets/image/zhihuiwuye/zhifubao.png" width="60%">
								</el-radio>
								<el-radio v-model="zffs" label="2">
									<img src="../../../assets/image/zhihuiwuye/weixin.png" width="50%">
								</el-radio>
							</div>
						</div>
						<div>
							<div class="hangkuai"></div>
							<div class="hangkuai">
								<el-button type="primary" style="width: 80%;">立即缴费</el-button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-show="tab == 2">
				<div class="kuangkuang">
					<div class="kktitle">填写充值信息</div>
					<div class="kk-content">
						<div>
							<div class="hangkuai">宽带账号：</div>
							<div class="hangkuai">
								<el-input v-model="kdname" placeholder="请输入宽带账号" size="small" style="width: 70%;"></el-input>
							</div>
						</div>
						<div>
							<div class="hangkuai">确认账号：</div>
							<div class="hangkuai">
								{{kdname}}
							</div>
						</div>
						<div>
							<div class="hangkuai">宽带密码：</div>
							<div class="hangkuai">
								<el-input v-model="kdpwd" placeholder="请输入宽带密码" size="small" style="width: 70%;"></el-input>
							</div>
						</div>
						<div>
							<div class="hangkuai">验证码：</div>
							<div class="hangkuai">
								<el-input v-model="kdyzm" placeholder="请输入宽带验证码" size="small" style="width: 40%;"></el-input>
								<img src="../../../assets/image/zhihuiwuye/yzm.png" style="vertical-align: middle;">
							</div>
						</div>
						<div>
							<div class="hangkuai"></div>
							<div class="hangkuai">
								<el-button type="primary" style="width: 70%;margin-right: 1%;">立即缴费</el-button>
								<span style="color: #FF6600;">续费有效期一年</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "kuandai",
		data() {
			return {
				tab:1,
				leixing:"",				//产品类型
				haoma:"",				//充值号码
				czyzm:"",				//充值验证码
				zffs: '1',				//选择支付的软件
				jeqiehuan:1,			//金额的tab切换
				jine:'',				//其他金额充值
				kdname:'',				//宽带账号
				kdpwd:'',				//宽带密码
				kdyzm:'',				//宽带验证码
			}
		},
		methods:{
			tabqiehuan(id){
				this.tab = id
			},
			jinetab(jine){
				this.jeqiehuan = jine
			}
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.hangkuai{
		display: inline-block;
	}
	.kuandai {
		width: 100%;
		height: 750px;
	}
	.navtop{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #E4E4E4;
	}
	
	.tab-top{
		width: 90%;
		display: flex;
	}
	.tab-top>div{
		cursor: pointer;
		width: 15%;
		text-align: center;
		font-size: 14px;
		border: 1px solid #E4E4E4;
		flex-direction: column;
	}
	.tab-active{
		color: white;
		background: #C0C0FF;
	}
	
	.zhangdan{
		width: 10%;
		color: #0000FF;
		cursor: pointer;
		text-align: center;
	}
	

	.kuangkuang{
		position: relative;
		width: 90%;
		height: 300px;
		margin: 2% auto;
		border: 1px solid #E4E4E4;
	}
	.kktitle{
		width: 150px;
		height: 30px;
		font-size: 13px;
		text-align: center;
		line-height: 30px;
		border: 1px solid #E4E4E4;
		background: white;
		position: absolute;
		top: -15px;
		left: 3%;
	}
	.kk-content{
		width: 50%;
		margin: 5% auto;
	}
	.kk-content>div{
		margin: 3% 0;
	}
	.kk-content>div>div:first-child{
		width: 20%;
		text-align: right;
	}
	.kk-content>div>div:last-child{
		width: 80%;
	}
	.suozaichengshi{
		display: inline-block;
	}
	.suozaichengshi>div{
		display: inline-block;
		margin-left: 2%;
	}
	.suozaichengshi>div a{
		color: #0000FF;
	}
	
	.chongzhi>div{
		cursor: pointer;
		width: 13%;
		height: 30px;
		line-height: 30px;
		color: black;
		margin: 0 0.5%;
		text-align: center;
		border-radius: 5px;
		border: 1px solid #989898;
		background: white;
	}
	.shenglan{
		color: white !important;
		background: #169AD4 !important;;
	}
</style>
