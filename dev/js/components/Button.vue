<template>
	<button class="btn" :class="[ type ? 'btn-'+type : '' , size ? 'btn-'+size : '' , {'plain' : plain , 'disabled' : disabled } ]  " >
		<slot></slot>
	</button>
</template>

<script type="text/javascript">
	export default {
		props: {
			type: { type: String },
			size: { type: String },
			plain: { type: Boolean },
			disabled: { type: Boolean }
		}
	}
</script>