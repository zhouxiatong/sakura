//模式
var wallpapermode = 1;
//壁纸目录
var backgroundRoute = "url('imgs/1.jpg')";
// 当前壁纸
var currentImg = "";
// 目录储存
var files = {};
// 自定义壁纸
var custom = {};
// 背景样式
var bgStyle = 1;
/* 监听配置 */
window.wallpaperPropertyListener = {
	applyUserProperties: function(properties) {
		// 自定义壁纸
		if(properties.image) {
			custom = properties.image.value;
			shouldShow();
		}
		if(properties.customdirectory) {
			if(properties.customdirectory) {
				changeBackground();
			} else {
				shouldShow();
			}
		}
		//默认壁纸
		if(properties.DefaultWallpaper) {
			backgroundRoute = "url('images/Background/" + properties.DefaultWallpaper.value + ".jpg')"
			shouldShow();
		}
		//更换壁纸样式
		if(properties.imagedisplaystlye){
            bgStyle = properties.imagedisplaystlye.value;
            shouldShow();
        }
	}
};
/** 变换背景 */
function changeBackground() {
	switch(wallpapermode) {
		case 1: //单一壁纸模式
			shouldShow();
			break;
	}
}
/** 应该展示的背景 */
var shouldShow = function() {
	switch(wallpapermode) {
		//单一壁纸模式
		case 1:
			document.body.style.backgroundImage = "";
			if(custom) {
				document.body.style.background = "url('" + 'file:///' + custom + "')";
				//document.body.style.backgroundImage="url('"+'file:///' + custom + "')";
			} else {
				//document.body.style.background = "url('imgs/1.jpg')";
				document.body.style.background = backgroundRoute;
				//document.body.style.backgroundImage = "url('imgs/1.jpg')";
			}
			//设置壁纸样式
			setBackgroundStyle();
			break;
	}
};

var setBackgroundStyle = function() {
	//单壁纸样式
	switch(bgStyle) {
		case 1:
			// 填充
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundPosition = "center";
			break;
		case 2:
			// 拉伸
			//document.body.style.backgroundImage = "";
			//document.body.style.background="url('"+'file:///' + img + "')";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "100% 100%";
			document.body.style.backgroundPosition = "center";
			break;
		case 3:
			// 适应
			//document.body.style.backgroundImage = "";
			//document.body.style.background="url('"+'file:///' + img + "')";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "contain";
			document.body.style.backgroundPosition = "center";
			break;
		case 4:
			// 平铺
			//document.body.style.backgroundImage = "";
			//document.body.style.background="url('"+'file:///' + img + "')";
			document.body.style.backgroundRepeat = "repeat";
			break;
		case 5:
			// 居中
			//document.body.style.backgroundImage = "";
			//document.body.style.background="url('"+'file:///' + img + "')";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundPosition = "center";
			break;
		default:
	}
};