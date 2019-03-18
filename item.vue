<template>
	<div>
		<!-- 
          1.如果是home则显示home页内容反之answer页内容

		 -->
		 <div v-if="father=='home'">
			   <div class="title">第一周</div>
			   <div><Router-link to="/answer">开始</Router-link></div>
		 </div>
		 <div v-if="father=='answer'">
			   <div>
				   <ul>
					   <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="chooseItem(index)">
						   <span class="circle" :class="{'choose':choosNum==index}">{{getType(index)}}</span>
						   <span>{{item.answer_name}}</span>
					   </li>
				   </ul>
			   </div>
			   <div v-if="itemNum<itemDetail.length" @click="nextItem">下一题</div>
			   <div v-else ><Router-link to="/score">提交</Router-link></div>
		 </div>

	</div>
</template>

<script>
/**
 * 1.必须选择答案 才能进行下一题
 * 2.计算分数
 *   2.1  规定一题多少分
 *   2.2  要进行id的校验
 *   2.3  提交时会少加最后一道题的得分
 * 
 */
import {mapState,mapActions} from "vuex"
export default {
	props:["father"],
	data(){
		return{
			choosNum:null
		}
	},
	computed:mapState(["itemDetail","itemNum"]),
	methods:{
		...mapActions(["addNext"]),
      	getType(index){
			switch(index){
				case 0: return "A";
				case 1: return "B";
				case 2: return "C";
				case 3: return "D"
				break
			}
		},
		chooseItem(index){
          this.choosNum=index
		},
		//下一题 普通版
		// addNum(){
		//    this.$store.state.itemNum++
		//    console.log(this.$store.state.itemNum)
		// }
		//vuex版
		nextItem(){
           this.addNext()
		}
	},
	mounted() {
	  
	},

}
</script>

<style>
.choose{
	background:yellow
}
</style>
