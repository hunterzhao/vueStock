<template>
    <div>
    <v-app id="inspire">
         <v-container fluid grid-list-md text-md-center>
             <v-layout row wrap>
                 <v-flex md10>
                      <v-card dark color="secondary">
				         <v-layout row wrap>
				              <v-flex md4>
					                   <v-menu
								          lazy
								          :close-on-content-click="false"
								          v-model="menu"
								          transition="scale-transition"
								          offset-y
								          full-width
								          :nudge-right="40"
								          max-width="290px"
								          min-width="290px"
								        >
								          <v-text-field
								            slot="activator"
								            label="开始"
								            v-model="date"
								            prepend-icon="event"
								            readonly
								          ></v-text-field>
								          <v-date-picker type="month" v-model="date" no-title scrollable actions>
								            <template slot-scope="{ save, cancel }">
								              <v-card-actions>
								                <v-spacer></v-spacer>
								                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
								                <v-btn flat color="primary" @click="save">OK</v-btn>
								              </v-card-actions>
								            </template>
								          </v-date-picker>
								        </v-menu>
					         </v-flex>
					         <v-spacer></v-spacer>
			                 <v-flex md4>
			                            <v-menu
								          lazy
								          :close-on-content-click="false"
								          v-model="modal"
								          transition="scale-transition"
								          offset-y
								          full-width
								          :nudge-right="40"
								          max-width="290px"
								          min-width="290px"
								        >
								          <v-text-field
								            slot="activator"
								            label="结束"
								            v-model="date2"
								            prepend-icon="event"
								            readonly
								          ></v-text-field>
								          <v-date-picker type="month" v-model="date2" no-title scrollable actions>
								            <template slot-scope="{ save, cancel }">
								              <v-card-actions>
								                <v-spacer></v-spacer>
								                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
								                <v-btn flat color="primary" @click="save">OK</v-btn>
								              </v-card-actions>
								            </template>
								          </v-date-picker>
								        </v-menu>
			                 </v-flex>
			             </v-layout>
			             </v-card>
                 </v-flex>
                 <v-flex md2>
                     <div>
			           <v-btn large color="yellow" fab>
			           	   <v-icon x-large dark>play_circle_outline</v-icon>
			           </v-btn>
			         </div>
                 </v-flex>
                 <v-flex md12>
                       <v-card dark color="green">
                         <v-subheader>板块选择</v-subheader>
                         <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                     </v-card>
                 </v-flex>
                 <v-flex md12>
					    <div v-for="item in items" :key="item.title">
					          <v-layout row wrap>
					              <v-flex md4 offset-md1>
                                      <v-card dark :color="item.color" height="100">
                                             <v-card-title>{{item.left}}</v-card-title>
                                             <v-card-text>
                                                   <v-icon>{{item.left_status}}</v-icon>
                                                   <span>{{item.left_rate}}</span>
									         </v-card-text>
                                      </v-card>
					              </v-flex>
                                  <v-flex md2 >
                                      <v-card dark color="yellow" height="100">
                                             <v-card-title>关联度</v-card-title>
                                             <v-card-text>
                                                   <span> {{item.rate}}</span>
									         </v-card-text>
                                      </v-card>
                                  </v-flex> 
					              <v-flex md4>
                                      <v-card dark :color="item.color" height="100">
                                             <v-card-title>{{item.right}}</v-card-title>
                                             <v-card-text>
                                                    <v-icon>{{item.right_status}}</v-icon>
                                                   <span> {{item.right_rate}} </span>
									         </v-card-text>
                                      </v-card>
					              </v-flex>
				              </v-layout>
					    </div>
                 </v-flex>
             </v-layout>
         </v-container>
              <!--  <div class="col-lg-8">
		               

               
                <div class="col-lg-2">
                        <button class="btn btn-primary" style="text-align:right;float:right;">计算</button>
                </div>
         </div>

         <div class="row"> 
               <div class="col-lg-10">
		            <h2>板块集合</h2>  
		         <div>
				  <label class="typo__label">已选中</label>
				  <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
				
				</div>

               
         </div>
         
         <div class="row"> 
               <div class="col-lg-6">
		            <h2>板块关联情况</h2>  
		            <table class="table table-hover">
						 <thead>
						    <tr>
						      <th>板块名称</th>
						      <th>涨跌幅区间</th>
						      <th>关系</th>
						      <th>板块名称</th>
						      <th>涨跌幅区间</th>
						      <th>关联度</th>
						    </tr>
						 </thead>
						 <tbody>
						    <tr>
						      <td>电子元器件</td>
						      <td>涨幅大于2%</td>
						      <td>====></td>
						      <td>半导体</td>
						      <td>涨幅大于2%</td>
						      <td>0.8019</td>
						    </tr>
						    <tr>
						      <td>电子元器件</td>
						      <td>跌幅大于2%</td>
						      <td>====></td>
						      <td>半导体</td>
						      <td>跌幅大于2%</td>
						      <td>0.8621</td>
						    </tr>
						     <tr>
						      <td>化纤</td>
						      <td>跌幅大于2%</td>
						      <td>====></td>
						      <td>半导体</td>
						      <td>跌幅大于2%</td>
						      <td>0.8118</td>
						    </tr>
						</tbody>
					</table> 
               </div>
               <div class="col-lg-4">
                    <h2>热点新闻</h2>
                    <div class="table-responsive">
					  <table class="table">
					    <thead>
					      <tr>
					        <th>id</th>
					        <th>内容</th>
					        </tr>
					    </thead>
					    <tbody>
					      <tr>
					        <td>1</td>
					        <td>未来石油价格要涨</td>
					      <tr>
					        <td>2</td>
					        <td>天然气开采有了新的突破</td>
					      </tr>
					      <tr>
					        <td>3</td>
					        <td>牛市来了</td>
					      </tr>
					      <tr>
					        <td>4</td>
					        <td>三个月的目标完成了</td>
					      </tr>
					    </tbody>
					  </table>
					</div>
               </div>
         </div> -->
        </v-app>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default{
	   name: 'Plate',
	   components: {
	     Multiselect
	   },
	   data () {
	    return {
	      date: null,
	      date2: null,
		  menu: false,
		  modal: false,
	      value: [
	        // { name: 'Javascript', code: '0' }
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
	      ],
	      items:[
             {left: '电子元器件', left_rate: '涨2%', left_status: 'trending_up', right:'半导体', right_rate: '涨2%', rate:'0.8019', right_status: 'trending_up', color: 'red'},
             {left: '电子元器件', left_rate: '跌2%', left_status: 'trending_down', right:'半导体', right_rate: '跌2%', rate:'0.8621', right_status: 'trending_down', color: 'green'}
	      ]
	    }
	   },
	   methods: {
	    addTag (newTag) {
	      const tag = {
	        name: newTag,
	        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
	      }
	      this.options.push(tag)
	      this.value.push(tag)
	    }
	  }
    }
</script>