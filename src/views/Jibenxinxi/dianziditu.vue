<template>
	<div>
		<!-- <ve-bmap :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></ve-bmap> -->
		<div id="allmap" class="allmap"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				center: {lng: 116.40387397, lat: 39.91488908}
			}
		},
		methods:{
			ready () {//地图加载
				let map = new BMap.Map('allmap')
				let point = new BMap.Point(this.center.lng, this.center.lat)
				map.centerAndZoom(point, 10)
				map.enableScrollWheelZoom(true)
				map.enableDoubleClickZoom(true)
				var geolocation = new BMap.Geolocation()
				geolocation.getCurrentPosition((r) => {
					if (r.point) {
						this.center.lng = r.longitude
						this.center.lat = r.latitude
						let markers = new BMap.Marker(r.point)
						map.addOverlay(markers)
						map.panTo(r.point)
						map.centerAndZoom(r.point, 16)
					}
				}, { enableHighAccuracy: true })
			},

		},
		mounted() {
			this.ready()
		}
	}
</script>

<style scoped>
	#allmap{
		width: 100%;
		height: 600px;
	}
</style>
