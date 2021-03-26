/*
 * @author: 王宇
 * @createTime: 2021-03-26 15:03:01
 * @lastUpdateTime: 2021-03-26 15:03:07
 * @describe: 封装自己的cesium类
 */

export default {
	/**
	 * 创建Viewer
	 * @param {string} : 容器ID
	 * @param {object} : options - 容器配置项
	 */
	initViewer(element) {
		return new Cesium.Viewer(element, {
			// 动画组件
			animation: false,

			// 图层选择组件：默认为true
			baseLayerPicker: false,

			// 全屏按钮
			fullscreenButton: false,

			// 时间轴组件
			timeline: false,

			// 添加自定义图层
			// imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
			// 	url : '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
			// }),

			// 设置地形
			terrainProvider : new Cesium.CesiumTerrainProvider({
				url : Cesium.IonResource.fromAssetId(3956),
				requestVertexNormals : true
			})
		});
	},

	/**
	 * 设置视角
	 * @param {viewer} : 容器
	 * @param {number} : 经度、纬度、高度：我在150米的高空看着你👀
	 * @return 返回值 :
	 */
	initViewerView(viewer, ...arg) {
		viewer.camera.setView({
			// 目的地
			destination: Cesium.Cartesian3.fromDegrees(...arg),

			// 方向/视角
			orientation: {
				// 抬头
				heading : Cesium.Math.toRadians(10.0),

				// 俯视
				pitch : Cesium.Math.toRadians(-10.0),

				// 横滚
				roll : 0.0,
			}
		})
	},
};
