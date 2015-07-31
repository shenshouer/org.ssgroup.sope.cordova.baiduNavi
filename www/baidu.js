var exec = require('cordova/exec');

    // 开始真实导航
    // var orderInfo = {
    //  startPointX: "",
    //  startPointY: "",
    //  endPointX: "",
    //  endPointY: ""
    // };
    // somai.baidu.startNavi
    // somai.baidu.simulateNavi


module.exports = {
    startNavi: function(pointsInfo,onSuccess,onError){
        exec(onSuccess, onError, "Baidu", "startNavi", [pointsInfo]);
    },

    // 开始模拟导航
    // pointsInfo = {} //传递空即可
    simulateNavi: function(onSuccess,onError){
        var pointsInfo = {};
        exec(onSuccess, onError, "Baidu", "simulateNavi", [pointsInfo]);
    }
};