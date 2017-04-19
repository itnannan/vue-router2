<template>
	<div id="all">
		<h1>课程</h1>
		<div>
			<table class="table table-bordered">
				<thead>
					<tr><th>序号</th><th>课程</th><th>关注</th></tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in arrayData">
						<td>{{index+1}}</td>
						<td>{{item.name}}</td>
						<td>{{item.age}}</td>
					</tr>
				</tbody>
			</table>
			<div class="pager" id="pager">
				<template v-for="item in pageCount+1">
					<span v-if="item==1" class="btn btn-default" v-on:click="showPage(pageCurrent-1,$event)">上一页</span>
					<span v-if="item>0&&item<=pageCount-1&&item>=showPagesStart&&item<=showPageEnd&&item<=pageCount" class="btn btn-default" v-on:click="showPage(item,$event)">{{item}}</span>
					<span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(pageCurrent+1,$event)">下一页</span>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				course:[
					{name:'新手指南之玩转实验楼',age:76471},
					{name:'Linux 基础入门sss',age:93388},
					{name:'C语言实现大数计算器',age:167},
					{name:'C++实现智能指针',age:163},
					{name:'PHP 封装分页类',age:140},
					{name:'新手指南之转实验楼1',age:76471},
					{name:'Linux 基础入门1',age:93388},
					{name:'C语言实现大数计算器1',age:167},
					{name:'C++实现智能指针1',age:163},
					{name:'PHP 封装分页类1',age:140},
					{name:'新手指南之玩转实验楼2',age:76471},
					{name:'Linux 基础入门2',age:93388},
					{name:'C语言实现大数计算器2',age:167},
					{name:'C++实现智能指针2',age:163},
					{name:'C++实现智能指针2',age:163},
					{name:'C++实现智能指针3',age:163},
					{name:'C++实现智能指针3',age:163},
					{name:'C++实现智能指针3',age:163},
					{name:'PHP 封装分页类3',age:140},
					{name:'PHP 封装分页类3',age:14053453}
				],
				 //当前页面
				pageCurrent: 1,
				//分页大小，每页有多少条
				pagesize : 5 ,
				//开始显示的分页按钮
				showPagesStart: 1,
				//结束显示的分页按钮
				showPageEnd: 10,
				//分页数据
				arrayData: [],
			}
		},
		computed:{
			pageCount: function () {
				return (Math.ceil(this.course.length/this.pagesize))+1;
			}
		},
		methods:{
			//方法中传入页码
			showPage: function (pageIndex) {
				//判断页码
				if (pageIndex > 0) {
					if (pageIndex > this.pageCount) {
						pageIndex = this.pageCount;
					}
					//定义初始数据
					var newPageInfo = [];
					//循环输出每页内容
					for (var i = 0; i < this.pagesize; i++) {
						newPageInfo[newPageInfo.length] = {
						name: this.course[i + (pageIndex - 1)*5].name,
						age:this.course[i + (pageIndex - 1)*5].age
						};
					}
					this.pageCurrent = pageIndex;
					//数据渲染给arrayData
					this.arrayData = newPageInfo;
				}

			}
		},
		created: function (){
			this.showPage(1)
		}
	}
</script>