<template>
	<label class="H-radio">
		<span class="H-radio-input" :class="{'disabled':disabled, 'checked':model===label}">
			<span class="H-radio-inner"></span>
			<input type="radio" class="H-radio-original" :value="label" v-model="model" :name="name">
		</span>
		{{model===label}}
		{{model}}
		{{label}}
		<span class="H-radio-label">
			<slot></slot>
		</span>
	</label>
</template>
<script type="text/javascript">
	export default{
		props:{
			label:{},
			disabled: Boolean,
			name: String
		}
	}
</script>