//创建一个独立的控制器模块，名字叫Controller
//该模块专门用于创建各个控制器
angular.module("Controller",[])
//创建navsCtrl控制器，给导航栏绑定数据，模拟从后台获取
.controller("navsCtrl",["$scope",function($scope){
	$scope.navs = [
					{"href":"#/index","icon":"icon-home","text":"今日一刻"},
					{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
					{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
					{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
					{"href":"#/favourite","icon":"icon-heart","text":"我喜欢的"},
					{"href":"#/settings","icon":"icon-cog","text":"设置"}
						];
}])

//创建index控制器
.controller("indexCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 0;//一开始  num为0 第一个导航栏选中 
	$rootScope.title = "今日一刻";
	$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})
}])
//创建older控制器  往期内容
.controller("olderCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 1
	$rootScope.title = "往期内容";
	$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/older.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})
}])
	//热门作者
.controller("authorCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 2
	$rootScope.title = "热门作者";
	$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/author.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		// $scope.posts = result.data.posts;
		// $rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})

}])
.controller("categoryCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 3
	$rootScope.title = "栏目浏览";
		$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})
}])
.controller("favouriteCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 4
	$rootScope.title = "我喜欢的";
		$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})
}])
.controller("settingsCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 5
	$rootScope.title = "设置";
		$rootScope.isShow = true;  //加载图片 一开始是属于显示状态
	//获取当前时间2018-7-11
	var today = new Date()
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time)
	//发送请求，获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){  //success 方法被淘汰，以后使用then方法
		console.log(result.data.posts)
		//绑定数据传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false; //获取数据，加载完成，图片隐藏
	})
}])