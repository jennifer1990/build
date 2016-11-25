<template>
	<page   :total:"total" 
			:pages:"pages" 
			:page_current="page_current" 
			:page_size:"10"></page>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				total:0,
				pages:7,
				page_current:2
			}
		},
		ready () {
			this.total = 121
		}
	}
</script>