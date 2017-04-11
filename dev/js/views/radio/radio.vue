<template>

	<br>
	<br>
	<br>

	<div style="margin: 100px;">
		<radio name="a" :model="label" label="1">备选项1</radio>
		<radio name="a" :model="label" label="2">备选项2</radio>
	</div>
	
</template>
<script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>