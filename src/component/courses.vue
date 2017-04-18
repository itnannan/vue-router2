<template>
	<div id="courses">
        <h1 class="header">vue</h1>
		<p class="font">这是课程by{{author}}</p>
        <ul>
            <li><router-link to="/courses/all">全部课程</router-link></li>
            <li><router-link to="/courses/preview">即将上线</router-link></li>
            <li><router-link to="/courses/develop">开发者</router-link></li>
        </ul>
        <router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				author : 'tangpeinan'
			}
		}
	}
</script>
<style>
	 
</style>