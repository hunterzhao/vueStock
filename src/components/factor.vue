 
<template>
<div>
    <v-app id="inspire">
 
	    <v-container fluid grid-list-md text-md-center>
	         <v-layout row wrap>
	             <v-flex md10>
		             <v-card dark color="secondary">
		                    <div class="input-group">
					            <v-flex md9>
					              <v-text-field
					                name="input-1"
					                label="板块名称"
					                id="input-1-id"
					              ></v-text-field>
					            </v-flex>
			                    <div>
					                <v-btn color="secondary">查询</v-btn>
					            </div>
			                </div>
		             </v-card>
		         </v-flex>
		         <v-flex md2>
		                    <div>
					           <v-btn large color="secondary" fab  @click.stop="dialog = true">
					           	   <v-icon  x-large dark>settings</v-icon>
					           </v-btn>
					         </div>
                             <v-dialog
							        v-model="dialog"
							        fullscreen
							        transition="dialog-bottom-transition"
							        :overlay=false
							        scrollable
							  >
							  <v-card>
							          <v-toolbar style="flex: 0 0 auto;" dark class="secondary">
							            <v-toolbar-title>设置</v-toolbar-title>
							            <v-spacer></v-spacer>
							            <v-toolbar-items>
							              <v-btn dark flat @click.native="dialog = false">保存</v-btn>
							              <v-btn icon @click.native="dialog = false" dark>关闭</v-btn>
							            </v-toolbar-items>
							          </v-toolbar>
							          <v-card-text>
                                           <v-container grid-list-xl text-md-center>
                                                <v-layout row wrap>
                                                     <v-flex md12>
                                                         <v-card dark color="secondary">
                                                             <v-subheader>特征因子选择</v-subheader>
				                                             <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                         </v-card>
                                                     </v-flex>
                                                     <v-flex md6>
			                                             <v-card dark color="secondary" height="300px">
                                                             <v-subheader>普通设置</v-subheader>
                                                            
			                                                 <v-form v-model="valid">
															      <v-text-field
															        label="预测n日期"
															        v-model="predict_num"
															        :rules="nameRules"
															        :counter="2"
															        required
															      ></v-text-field>
															      <v-text-field
															        label="训练集大小"
															        v-model="email"
															        required
															      ></v-text-field>
															      <v-text-field
															        label="训练集大小"
															        v-model="email"
															        required
															      ></v-text-field>
															 </v-form>
			                                             </v-card>
		                                             </v-flex>
		                                             <v-flex md6>
			                                             <v-card dark color="secondary" height="300px">
			                                                 <v-subheader>高级设置</v-subheader>
			                                                  <v-form v-model="valid">
															      <v-text-field
															        label="训练次数"
															        v-model="email"
															        required
															      ></v-text-field>
															 </v-form>
															 <v-layout row wrap>
															     <v-flex md6>
															     <p>核函数类型</p>
	                                                             <v-select v-bind:items="dropdown_font" overflow label=""></v-select>
	                                                             </v-flex>
	                                                          
	                                                             <v-flex md6>
	                                                             <p>SVM类型</p>
	                                                             <v-select v-bind:items="dropdown_font" overflow label=""></v-select>
	                                                             </v-flex>
                                                             </v-layout>
			                                             </v-card>
		                                             </v-flex>
		                                             <v-flex md12>
                                                         <div>
												           <v-btn large color="white" fab>
												           	   <v-icon x-large dark>play_circle_outline</v-icon>
												           </v-btn>
												         </div>
                                                     </v-flex>
		                                             <v-flex md6>
			                                             <v-card dark color="secondary" height="450px">
                                                             <v-subheader>模型回归效果图</v-subheader>
                                                             <div id="main" style="width: 600px;height:400px;"></div>
			                                             </v-card>
		                                             </v-flex>

		                                             <v-flex md6>
			                                             <v-card dark color="secondary" height="450px">
			                                                 <v-subheader>模型回归效果描述</v-subheader>
			                                                 <v-card-text>
			                                                        max_relative_error:  60.3488842459
																	max_absolute_error:  2071.98841726
																	relativer error < 1: 0.065
																	relativer error < 2: 0.095
																	relativer error < 3: 0.185
																	relativer error < 5: 0.37
													         </v-card-text>
			                                             </v-card>
		                                             </v-flex>
		                                            
                                                </v-layout>
                                           </v-container>
							          </v-card-text>
							  
							            <div style="flex: 1 1 auto;"></div>
							    </v-card>
							</v-dialog>
		         </v-flex>
                 <v-flex md7>
			          <v-card dark color="secondary">
			                <h2>煤炭石油</h2>  
			                <div id="main0" style="width: 700px;height:400px;"></div>
			          </v-card>
			     </v-flex >
			     <v-flex md5>
			          <v-card dark color="secondary">
			                <h2>舆论热度值</h2>
	                        <div id="chart" style="width: 400px;height:400px;"></div>
			          </v-card>
			     </v-flex>
	             
                  <v-flex md7>
			           <v-card dark color="secondary">
			                <h2>成分股票</h2>  
				            <v-data-table
				                v-bind:headers="headers"
						        :items="items"
						        class="elevation-1"
						      >
						      <template slot="items" slot-scope="props">
						        <td class="text-md-right"> # </td>
						      	<td class="text-md-right">{{ props.item.id }}</td>
						        <td class="text-md-right">{{ props.item.name }}</td>
						        <td class="text-md-right">{{ props.item.price }}</td>
						      </template>
						    </v-data-table>
			          </v-card>
			     </v-flex >
	             
	             <v-flex  md5>
			            <v-card dark color="secondary">
			                <h2>热点新闻</h2>
			                <v-data-table
						        :items="newsList"
						        class="elevation-1"
						        hide-actions
						        hide-headers
						      >
						      <template slot="items" slot-scope="props">
						        <td class="text-md-left">{{ props.item.news }}</td>
						      </template>
						    </v-data-table>
			            </v-card>
			     </v-flex>
	         </v-layout> 
	    </v-container>
    </v-app>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default{
	    name: 'Factor',
        components: {
		  Multiselect
	    },
        data() {
        	return {
        	  dialog: false,
              dialog2: false,
              dialog3: false,
        	  showSet: false,
              title: "我是标题",
              alertIsOpen: false,
              showRight: false,
              tabId: 0,
              content: '',
               notifications: false,
		      sound: true,
		      widgets: false,
		      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
		      headers: [
		        {
		          text: '板块成分股',
		          align: 'left',
		          sortable: false,
		          value: 'name'
		        },
		        { text: 'id', value: '' },
		        { text: '股票名称', value: '' },
		        { text: '当前价格(￥)', value: '' }
		      ],
		      items: [
		        {
		          id: 1,
		          name: '中国石油',
		          price: '9.00'
		        },
		        {
		           id: 2,
		          name: '中国神华',
		          price: '24.16'
		        },
		        {
		           id: 3,
		          name: '陕西煤业',
		          price: '9.22'
		        },
		        {
		           id: 4,
		          name: '兰花科创',
		          price: 9.48
		        },
		        {
		           id: 5,
		          name: '大同煤业',
		          price: 6.55
		        },
                {
		           id: 6,
		          name: '中国石化',
		          price: 7.04
		        },
		        {
		           id: 7,
		          name: '昊华能源',
		          price: 8.34
		        },
		        {
		           id: 8,
		          name: '盘江股份',
		          price: 7.04
		        },
		         {
		           id: 9,
		          name: '阳泉煤业',
		          price: 7.52
		        },
		         {
		           id: 10,
		          name: '金瑞矿业',
		          price: 8.95
		        },
                
		       ],
		       newsList:[
                  {
                  	news:"首先明年的股市环境史上最差。第一今年大量新股上市，明年将有巨额解禁股压力，如果不是利益输送，没有人愿意拉高股价让解禁股套现；第二万亿融资盘压力，借钱炒股成本很高"
                  },
                  {
                  	news:"别纸望大行情，赚个饭钱跑了最安全，套上就是十年啊，哈哈哈"
                  },
                  {
                  	news:"丝路新驼铃】在异国创造“中国速度” 为缓减国内天然气供给压力，一个个“中国速度”正在土库曼斯坦上演。自2016年12月30日以来，身着红色或蓝色制服的"
                  },
                  {
                  	news:"中石油从48元跌只剩零头了！可悲!可叹!可耻！"
                  },
                  {
                  	news:"中国神油四十，中国神话五十！块钱！ 中国神油四十，中国神话五十！块钱！ 中国神油"
                  },
                  {
                  	news:"俄国与乌克兰本是兄弟之国；美国卖给乌克兰武器，两国干上了。国际油价跟着倒霉。"
                  },
                  {
                     news:"SCI标的欢迎601718 目标22.88元！超级特种服王。"
                  }
		       ],
		        options: [
		        { name: 'open', code: '0' },
		        { name: 'low', code: '1' },
		        { name: 'high', code: '2' },
		        { name: 'volume', code: '3' },
		        { name: 'close', code: '4' },
		        { name: 'turnvol', code: '5' },
		        { name: 'MA1', code: '6' },
		        { name: 'MA2', code: '7' },
		        { name: 'MA3', code: '8' },
		        { name: 'MA4', code: '9' },
		        { name: 'MA5', code: '10' },
		        { name: 'MA6', code: '11' },
		        { name: '', code: '12' }
		      ]
            }
        },
        mounted() {
            this.ShowGraphic();
            this.ShowCompass();
        },
        created: function() {
           // this.ShowGraphic();
        },
       
        methods: {
        	addTag (newTag) {
		      const tag = {
		        name: newTag,
		        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
		      }
		      this.options.push(tag)
		      this.value.push(tag)
		    },
        	countDownChanged (dismissCountDown) {
		      this.dismissCountDown = dismissCountDown
		    },
		    showAlert () {
		      this.dismissCountDown = this.dismissSecs
		    },
        	run()
        	{
                this.content = "result"
        	},
        	 showAlert() {
              this.showSet = !this.showSet;
            },

        	ShowCompass()
        	{
                let myChart = this.$echarts.init(document.getElementById('chart'))
                var option = {
				    tooltip : {
				        formatter: "{a} <br/>{b} : {c}%"
				    },
				    toolbox: {
				        feature: {
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    series: [
				        {
				            name: '今日舆情热度',
				            type: 'gauge',
				            detail: {formatter:'{value}%'},
				            data: [{value: 57.53, name: '热度值'}]
				        }
				    ]
				};
                myChart.setOption(option, true);
        	},

            ShowGraphic()
            {
            	let myChart = this.$echarts.init(document.getElementById('main0'))
            	var colors = ['#5793f3', '#d14a61', '#675bba'];
            	var timelist = []
            	for (var i =0; i< 200; i++)
            	{
                    timelist.push(i.toString())
            	}
            	
            	timelist[0]  =  "2016-9"
            	timelist[195] =  "2017-8"
            

                myChart.setOption({
		            color: colors,

				    tooltip: {
				        trigger: 'none',
				        axisPointer: {
				            type: 'cross'
				        }
				    },
				    legend: {
				        data:['真实价格', '预测价格']
				    },
				    grid: {
				        top: 70,
				        bottom: 50
				    },
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                onZero: false,
				                lineStyle: {
				                    color: colors[1]
				                }
				            },
				            interval: 18,
				            // axisPointer: {
				            //     label: {
				            //         formatter: function (params) {
				            //             return '降水量  ' + params.value
				            //                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				            //         }
				            //     }
				            // },
				            data: timelist,

				        },
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                onZero: false,
				                lineStyle: {
				                    color: colors[0]
				                }
				            },
				            // axisPointer: {
				            //     label: {
				            //         formatter: function (params) {
				            //             return '降水量  ' + params.value
				            //                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				            //         }
				            //     }
				            // },
				            interval: 18,
				            data: timelist
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            min: 3500,
				            max: 4000
				        }
				    ],
				    series: [
				        {
				            name:'真实板块指数',
				            type:'line',
				            xAxisIndex: 1,
				            smooth: true,
				            data: [3818.53, 3825.93, 3828.19, 3837.88, 3850.17, 3923.94, 3926.73, 3940.95, 3951.62, 3934.32, 3890.31, 3946.56, 3941.55, 3974.12, 3951.43, 3968.84, 3964.82, 3942.71, 3937.74, 3900.56, 3899.09, 3936.18, 3919.08, 3935.19, 3916.84, 3922.13, 3948.44, 3922.97, 3961.46, 3957.55, 3959.81, 3976.17, 3991.5, 3966.17, 3958.74, 3963.75, 3986.43, 3965.29, 3935.05, 3944.81, 3942.92, 3916.65, 3919.89, 3927.27, 3869.28, 3864.5, 3871.15, 3898.74, 3876.33, 3857.31, 3672.01, 3677.36, 3642.38, 3671.83, 3693.66, 3670.82, 3673.5, 3701.04, 3699.38, 3669.72, 3682.36, 3682.21, 3677.45, 3662.62, 3671.25, 3707.26, 3746.44, 3708.68, 3710.65, 3736.32, 3722.34, 3691.27, 3670.09, 3622.15, 3516.71, 3566.19, 3546.5, 3532.72, 3589.54, 3620.73, 3603.9, 3620.02, 3634.78, 3624.31, 3655.15, 3652.47, 3687.59, 3706.41, 3689.4, 3710.68, 3715.8, 3690.47, 3717.16, 3695.08, 3729.99, 3754.64, 3770.17, 3770.32, 3777.88, 3754.1, 3763.68, 3766.6, 3753.61, 3789.02, 3840.82, 3850.26, 3832.31, 3816.52, 3822.77, 3869.58, 3854.73, 3848.91, 3891.31, 3855.39, 3874.95, 3886.62, 3889.59, 3908.59, 3941.14, 3920.45, 3918.2, 3887.82, 3803.06, 3826.83, 3894.43, 3894.26, 3911.13, 3872.71, 3898.21, 3859.05, 3863.87, 3815.55, 3781.07, 3771.69, 3742.91, 3760.7, 3744.87, 3664.99, 3693.83, 3723.16, 3737.27, 3749.48, 3740.07, 3742.94, 3737.44, 3693.33, 3608.56, 3649.77, 3617.88, 3605.77, 3598.71, 3646.44, 3748.33, 3725.01, 3707.46, 3700.38, 3670.21, 3591.9, 3610.25, 3620.22, 3600.69, 3609.88, 3569.43, 3602.13, 3624.61, 3650.49, 3729.23, 3736.94, 3765.89, 3706.66, 3744.94, 3714.94, 3754.29, 3759.87, 3784.73, 3795.01, 3841.8, 3788.04, 3821.38, 3878.65, 3872.69, 3835.45, 3876.75, 3880.47, 3860.31, 3858.2, 3900.86, 3911.23, 3914.43, 3871.08, 3846.81, 3840.86, 3827.49, 3828.66, 3669.34, 3679.93, 3757.02, 3782.48, 3787.3, 3809.32]

				        },
				        {
				            name:'预测板块指数',
				            type:'line',
				            smooth: true,
				            data: [3934.124503163528, 3927.8560204563755, 3919.91542290076, 3919.991624035218, 3919.7125139302434, 3917.863086513002, 3917.3841752240605, 3914.9635987352203, 3910.7819628306743, 3892.6568889166756, 3874.3386437094905, 3876.8164646144464, 3891.5709051818903, 3911.239937129672, 3914.5475778611817, 3919.0564196038317, 3917.021890218229, 3918.890119942478, 3921.3628992487825, 3925.267973981691, 3928.3884026095316, 3937.3357809190657, 3941.545257591354, 3942.1048534383917, 3942.497871749493, 3942.892957282704, 3942.2402274819638, 3940.4415567489245, 3939.081356310033, 3938.399331036119, 3940.222387076249, 3938.848894789292, 3938.5469329619195, 3936.273526621348, 3936.482704171876, 3936.217964997618, 3937.5371164255735, 3937.0829702783526, 3935.161747265057, 3942.541572529611, 3950.8908406134874, 3955.573365929889, 3958.4693881283415, 3958.6864780452192, 3958.5440949375534, 3959.9257231703223, 3960.6204240054094, 3958.8567657610056, 3958.565044244738, 3955.968477075979, 3953.4055126466833, 3943.6694455999013, 3940.1547539901694, 3930.551828927047, 3924.961448161731, 3918.3231420454103, 3906.8387147046174, 3886.790974399698, 3873.3586408302804, 3870.621336866742, 3867.465208691126, 3860.6294994341188, 3775.0500613803615, 3697.8889844999494, 3697.579138996332, 3685.1491584578766, 3679.845419564232, 3680.092318760272, 3676.9433327745874, 3674.6222416644105, 3675.276702954288, 3674.668089153591, 3679.5186725276244, 3682.8991526715267, 3682.5615831555992, 3690.3687718460174, 3699.293717662192, 3696.42642634439, 3686.709026116655, 3687.5475634271766, 3686.2556287515895, 3686.482250029213, 3683.4435972832366, 3683.4468402562675, 3681.124576552667, 3649.2598720499045, 3622.3046013260087, 3619.882427038483, 3619.980788807402, 3620.2969465318124, 3620.4319507814316, 3618.142680048338, 3619.0617959345127, 3616.3694536378207, 3620.23490233162, 3627.0505599071475, 3642.8052864027786, 3653.7489537735078, 3672.263298706061, 3689.5263209624677, 3690.6783861470744, 3692.636779124096, 3702.0048991325307, 3710.138819714966, 3714.306645597068, 3716.6449775795645, 3723.775189840614, 3741.332753939068, 3752.613434056904, 3754.1896859996173, 3759.149054761463, 3765.5148599845475, 3770.5454905207416, 3772.140985394885, 3775.348493302494, 3785.579872596991, 3803.561886747961, 3819.6363751191743, 3828.2749321832357, 3839.516136341312, 3845.8989827678824, 3851.062640338116, 3852.6743780369966, 3854.839348756236, 3862.4444034761937, 3872.9500664883167, 3880.652999377327, 3888.0096273846534, 3887.427898875344, 3886.918814807834, 3888.692568205699, 3890.1878103718736, 3892.237733851973, 3891.7212496872685, 3893.6360577200207, 3893.252364688938, 3894.203313406638, 3890.250078583186, 3880.9210103963783, 3868.09203918324, 3860.8515833286187, 3842.767602787633, 3842.0295907790905, 3835.452011290338, 3796.7560682183575, 3776.2544869524513, 3765.610693544487, 3755.0753796838585, 3745.1979811857864, 3743.800170650667, 3743.493251158436, 3740.99628093968, 3740.189635677425, 3737.405687699878, 3729.0576870404384, 3707.0794531055394, 3692.060770086882, 3693.262606417271, 3706.9071377480054, 3708.668081366959, 3698.294541547785, 3697.4900380189, 3683.50758229733, 3661.9332268430835, 3648.8524529599313, 3633.977989879795, 3633.311200733801, 3620.5099006198, 3616.8925566881453, 3615.942651142555, 3622.7212735963803, 3620.6679011678157, 3621.670001593745, 3621.450011979291, 3621.4473913778984, 3621.7402704221586, 3621.2059064845484, 3636.92614331378, 3678.9135236511283, 3710.6200090147167, 3721.814475695213, 3733.2274384300867, 3741.5048318635854, 3751.067313361605, 3755.7536655268123, 3762.35083450639, 3776.8208657179243, 3786.691202134189, 3792.309955900171, 3809.5525355759682, 3829.2903693224875, 3839.7523691243946, 3850.4873256924284, 3858.8515775592823, 3866.605086471231, 3871.4341091935426, 3872.3658745970874, 3873.3053669862106, 3874.500424115327, 3865.609764836089]
				        }
				    ]
		        });
            },

            updateGraphic()
            {
               
            }
        }
    }
</script>