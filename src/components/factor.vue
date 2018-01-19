 
<template>
<div>
    <v-app id="inspire">
 
	    <v-container fluid grid-list-md text-md-center>
	         <v-layout row wrap>
	             <!-- <v-flex xs12>
	                 <v-card dark color="purple">
				         <h1 style="text-align:left;float:left;">特征因子</h1>
				         <h2 style="text-align:right;float:left;">推荐</h2>
				         <hr style="clear:both;"/>
			         </v-card>
	             </v-flex> -->
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
					                <v-btn color="primary">查询</v-btn>
					            </div>
			                </div>
		             </v-card>
		         </v-flex>
		         <v-flex d-flex md2>
		             <!-- <v-card dark color="red"> -->
		                    <div>
					           <v-btn large color="red" fab  @click.stop="dialog = true">
					           	   <v-icon  x-large dark>settings</v-icon>
					           </v-btn>
					         </div>

					         <!--============================================================-->
                                <v-dialog
							        v-model="dialog"
							        fullscreen
							        transition="dialog-bottom-transition"
							        :overlay=false
							        scrollable
							      >
							        <v-card>
							            <v-toolbar style="flex: 0 0 auto;" dark class="primary">
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
                                                         <v-card dark color="gray">
                                                             <v-subheader>特征因子选择</v-subheader>
				                                             <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                         </v-card>
                                                     </v-flex>
                                                     <v-flex md6>
			                                             <v-card dark color="red" height="300px">
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
			                                             <v-card dark color="green" height="300px">
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
                                                         <!-- <v-card dark color="white">
                                                         	 <v-btn color="primary">测试模型效果</v-btn>
                                                         </v-card> -->
                                                         <div>
												           <v-btn large color="yellow" fab>
												           	   <v-icon x-large dark>play_circle_outline</v-icon>
												           </v-btn>
												         </div>
                                                     </v-flex>
		                                             <v-flex md6>
			                                             <v-card dark color="blue" height="450px">
                                                             <v-subheader>模型回归效果图</v-subheader>
                                                             <!-- <img src="static/1.png"/> -->
                                                             <div id="main" style="width: 600px;height:400px;"></div>
			                                             </v-card>
		                                             </v-flex>

		                                             <v-flex md6>
			                                             <v-card dark color="black" height="450px">
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

					         <!--==============================================================-->
		             <!-- </v-card> -->
		         </v-flex>
                 <v-flex md7>
			          <v-card dark color="primary">
			                <h2>石油化工</h2>  
			                <div id="main" style="width: 600px;height:400px;"></div>
			          </v-card>
			     </v-flex >
			     <v-flex md5>
			          <v-card dark color="green">
			                <h2>舆论热度值</h2>
	                        <div id="chart" style="width: 400px;height:400px;"></div>
			          </v-card>
			     </v-flex>
	             
                  <v-flex md7>
			           <v-card dark color="yellow">
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
			            <v-card dark color="purple">
			                <h2>热点新闻</h2>
			                <v-data-table
						        :items="newsList"
						        class="elevation-1"
						        hide-actions
						        hide-headers
						      >
						      <template slot="items" slot-scope="props">
						        <td class="text-md-center">{{ props.item.news }}</td>
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
    //       modal: modal,
	   //    tabs: tabset,
		  // tab: tab,
		  // tabGroup: tabGroup,
		  Multiselect
	   },
	   // el: '#app',
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
		          price: 17.8
		        },
		        {
		           id: 2,
		          name: '中国石油',
		          price: 17.8
		        },
		        {
		           id: 3,
		          name: '中国石油',
		          price: 17.8
		        }
		       ],
		       newsList:[
                  {
                  	news:"fiakshdkfjhaskjdhfkjas"
                  },
                  {
                  	news:"lkfahsdkjfhaklsdhfkask"
                  },
                  {
                  	news:"klSDHFKJHSDKJFHKASJDHK"
                  }
		       ],
		        options: [
		        { name: '保险', code: '0' },
		        { name: '仓储物流', code: '1' },
		        { name: '电器机械', code: '2' },
		        { name: '电热供应', code: '3' },
		        { name: '电子设备', code: '4' },
		        { name: '金属制品', code: '5' },
		        { name: '建材家居', code: '6' },
		        { name: '酒及饮料', code: '7' },
		        { name: '零售业', code: '8' },
		        { name: '农林牧渔', code: '9' },
		        { name: '煤炭石油', code: '10' },
		        { name: '券商', code: '11' },
		        { name: '生态环境', code: '12' }
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
				            name: '业务指标',
				            type: 'gauge',
				            detail: {formatter:'{value}%'},
				            data: [{value: 50, name: '热度值'}]
				        }
				    ]
				};

                setInterval(function () {
				    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
				    myChart.setOption(option, true);
				},2000);
        	},

            ShowGraphic()
            {
            	let myChart = this.$echarts.init(document.getElementById('main'))
            	var colors = ['#5793f3', '#d14a61', '#675bba'];
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
				            axisPointer: {
				                label: {
				                    formatter: function (params) {
				                        return '降水量  ' + params.value
				                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				                    }
				                }
				            },
				            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
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
				            axisPointer: {
				                label: {
				                    formatter: function (params) {
				                        return '降水量  ' + params.value
				                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				                    }
				                }
				            },
				            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value'
				        }
				    ],
				    series: [
				        {
				            name:'2015 降水量',
				            type:'line',
				            xAxisIndex: 1,
				            smooth: true,
				            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				        },
				        {
				            name:'2016 降水量',
				            type:'line',
				            smooth: true,
				            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
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