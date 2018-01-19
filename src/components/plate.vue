<template>
    <div>
         <h1 style="text-align:left;float:left;">板块联动</h1>
         <h2 style="text-align:right;float:left;">推荐</h2>
         <hr style="clear:both;"/>
         <div class="row"> 
               <div class="col-lg-8">
		               <div class="input-group">
				            <span class="input-group-addon">开始</span>
				            <input type="text" class="form-control" placeholder="2017-1-1">
				        </div>
				        <div class="input-group">
				            <span class="input-group-addon">结束</span>
				            <input type="text" class="form-control" placeholder="2017-12-13">
				        </div>

                </div><!-- /.col-lg-6 -->
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
				  <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
				</div>

               </div><!-- /.col-lg-6 -->
              <!--  <div class="col-lg-4">
                    <h2>舆论热度值</h2>
                     <div id="chart" style="width: 400px;height:400px;"></div>
               </div> -->
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
               </div><!-- /.col-lg-6 -->
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
         </div>
        
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