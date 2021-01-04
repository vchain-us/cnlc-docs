<template>
	<img
		:src="imgSrc()" :alt="alt"
		:style="getStyle"
	>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		height: {
			type: Number,
		},
		minHeight: {
			type: Number,
		},
		maxHeight: {
			type: Number,
		},
		width: {
			type: Number,
		},
		minWidth: {
			type: Number,
		},
		maxWidth: {
			type: Number,
		},
		objectFit: {
			type: String,
			default: 'contain',
		},
	},
	computed: {
		getStyle () {
			let style = '';
			this.height && (style += `; height: ${ this.height }`);
			this.minHeight && (style += `; minHeight: ${ this.minHeight }`);
			this.maxHeight && (style += `; maxHeight: ${ this.maxHeight }`);
			this.width && (style += `; width: ${ this.width }`);
			this.minWidth && (style += `; minWidth: ${ this.minWidth }`);
			this.maxWidth && (style += `; maxWidth: ${ this.maxWidth }`);
			this.objectFit && (style += `; object-fit: ${ this.objectFit }`);
			return style;
		},
	},
	methods: {
		imgSrc() {
			try {
				return require(`~/assets/images${ this.src }`);
			}
			catch (error) {
				console.log(error);
				return null;
			}
		},
	},
};
</script>
