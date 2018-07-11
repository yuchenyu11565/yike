//创建app应用模块
//调用自己写的控制器模块Controller ，在依赖中写控制器模块的名称
var yike  = angular.module("yike",["Controller","ngRoute"]);

//run方法在模块创建好之后会直接执行
yike.run(["$rootScope",function($rootScope){
	//给头部的a标签绑定单击事件，点击可以实现侧边导航的显示或者隐藏
	//给collapse类定义值，通过这个值决定collapse是否有效
	$rootScope.collapse = false;
	$rootScope.toggle = function(){
		$rootScope.collapse = !$rootScope.collapse
		//显示或隐藏导航栏标题内容
		//获取导航栏中所有的dd
		var dds = document.querySelectorAll("dd");
		
		 //遍历循环每个dd，实现所有的显示隐藏的效果
		 //显示是 translate值为0， 此时collapsed 值为true 
		if ($rootScope.collapse) { 	//如果有，测进入循环，此时显示
			for (var i = 0; i < dds.length; i++) {
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(0)';
			}	
	   }else{ //此时隐藏状态
	   		for (var i = 0; i < dds.length; i++) {
   				dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(-100%)';
	   			};	
	   }
	}
}])

yike.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");  //修复
}])

//配置路由
yike.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:"/index"  //跳转index处理
	}).when("/index",{
		templateUrl:"./views/list.html",
		controller:"indexCtrl"
	}).when("/older",{
		templateUrl:"./views/older.html",
		controller:"olderCtrl"
	}).when("/author",{
		templateUrl:"./views/author.html",
		controller:"authorCtrl"
	 }).when("/category",{
		templateUrl:"./views/older.html",
		controller:"categoryCtrl"
	}).when("/favourite",{
		templateUrl:"./views/favourite.html",
		controller:"favouriteCtrl"
	}).when("/settings",{
		templateUrl:"./views/settings.html",
		controller:"settingsCtrl"
	})
}])