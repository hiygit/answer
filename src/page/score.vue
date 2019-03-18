<template>
	<div>

		成绩是:{{score}}
		<!-- <Item></Item> -->
		<!-- element-ui mint-ui -->
		<!-- node 接口 -->
		<!-- 微信小程序     node接口   
			
		element  管理系统-->
	</div>
</template>

<script>
	/* import Item from '../components/item'
	export default{
		components:{
			Item
		}
	} */
	import {mapState} from "vuex"
	export default {
		computed: mapState(['answerid']),
		data() {
			return {
				score: 0,
				rightAnswer: [2, 7, 12, 13, 18],
				tips:['菜鸟','还行']
			}
		},
		methods: {
			getscore(){
				this.answerid.forEach((item, index)=>{
					if (item == this.rightAnswer[index]) {
						this.score += 20
					}
				})
			}
		},
		mounted() {
			this.getscore()
		},

	}
</script>

<style>
</style>