# 百度地图导航cordova ios 插件
# org.ssgroup.sope.cordova.baiduNavi

这是一个整合了百度导航sdk的cordova ios 插件

## 安装

由于github限制了上传文件的大小，最大为100MB，而百度导航sdk中的一个框架文件libbaiduNaviSDK.a超过了100MB，本仓库中已经删除了这个文件。如果有需要，请下载百度sdk之后将libbaiduNaviSDK.a放置于src/ios/libs/BaiduNaviSDK/目录下即可

###1、cordova plugin add https://github.com/shenshouer/org.ssgroup.sope.cordova.baiduNavi
###2、将下载百度导航sdk中的libbaiduNaviSDK.a放置于src/ios/libs/BaiduNaviSDK/

## 接口描述
		// 真实导航
		startNavi: function(pointsInfo,onSuccess,onError){
        	exec(onSuccess, onError, "Baidu", "startNavi", [pointsInfo]);
    	},

    	// 开始模拟导航
    	// pointsInfo = {} //传递空即可
    	simulateNavi: function(onSuccess,onError){
        	var pointsInfo = {};
        	exec(onSuccess, onError, "Baidu", "simulateNavi", [pointsInfo]);
    	}
模拟导航中不需要传入实际的开始坐标与结束地标，程序中已经写死。
真实导航中坐标数据格式如下：

		var orderInfo = {
			startPointX: "",
			startPointY: "",
			endPointX: "",
			endPointY: ""
		};


## 使用
	
1、使用xcode打开cordova生成的ios项目

2、在appDelegate.m文件中：

导入头文件
	#import "BNCoreServices.h"

在- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions方法下添加：

	[BNCoreServices_Instance initServices:@"你自己的key"];
    [BNCoreServices_Instance startServicesAsyn:nil fail:nil];

在js中调用方法如下：

		somai.baidu.startNavi(orderInfo, successhandler, errorhandler);
    	somai.baidu.simulateNavi(successhandler, errorhandler);

参考：https://github.com/shenshouer/NaviExample