//创建app应用模块
var yike  = angular.module("yike",[]);

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