<template>
	<div id="entry">
		<div id="cesiumContainer"></div>
	</div>
</template>

<script>
import myCesium from "@/utils/cesiumMethods";

// Viewer实例，三维地球容器
let viewer

export default {
	name: "entry",
	mounted() {
		viewer = myCesium.initViewer("cesiumContainer")
		myCesium.initViewerView(viewer, 116.39, 39.9, 150.0)
	}
};
</script>

<style scoped>
	#cesiumContainer {
		width: 100%;
		height: 100%;
	}
</style>
