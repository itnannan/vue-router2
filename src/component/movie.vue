<template>
	<div id="secondcomponent">
		<h1>第二页</h1>
		<a>write by{{author}}</a>
		<div class="box-card">
		      <div slot="header" class="clearfix">
		        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
		      </div>
		      <div v-for="article in articles" class="text item">
		        {{article.title}}
		      </div>
		</div>
		<div class="footer">我就试试</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				author :'干得漂亮',
				articles:[],
			}
		},
		mounted:function(){
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
		      headers:{

		      },
		      emulateJSON:true
		    }).then(function(response){
		    	this.articles = response.data.subjects
		      console.log(response);
		    })
		  }
	}

</script>
<style>
</style>