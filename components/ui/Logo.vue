<template>
	<section class="logo-wrapper">
		<div v-if="text && !icon">
			<img
				class="logo" :src="getAsset"
				:class="getLogoSize" :alt="getAlt"
				:title="getTitle"
			>
			<span
				v-if="text === 'default'" class="text--logo"
				:class="[getTextSize, getTextColor]"
			>
				{{ getText }}
			</span>
			<span
				v-else class="text--logo"
				:class="[getTextSize, getTextColor]"
			>
				{{ text }}
			</span>
		</div>
		<div v-else>
			<img
				class="logo" :src="getAsset"
				:class="getLogoSize" :alt="getAlt"
				:title="getTitle"
			>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Logo',

	props: {
		svg: { type: Boolean, default: true },
		align: { type: String, default: 'left' },
		size: { type: String, default: 'normal' },
		color: { type: String, default: 'blue' },
		text: { type: String, default: 'default' },
		icon: { type: Boolean, default: false },
	},

	computed: {
		getText () {
			return `Codenotary Cloud® v${ process.env.V_VERSION }`;
		},
		getAlt () {
			return `CodeNotary ${ this.getText }`;
		},
		getTitle () {
			return `CodeNotary ${ this.getText }`;
		},
		getSize () {
			return this.size || 'normal';
		},
		getColor () {
			return this.color === 'blue' ? '' : `_${ this.color }`;
		},
		getMime () {
			return this.svg ? 'svg' : 'png';
		},
		getPath () {
			return `images/logo/logo${ this.text && !this.icon ? '_text' : '' }`;
		},
		getIcon () {
			return this.icon ? '_icon' : '';
		},
		getAsset () {
			return `${ this.getPath }${ this.getIcon }${ this.getColor }.${ this.getMime }`;
		},
		getTextColor () {
			return 'text--blue';
		},
		getAlign () {
			return this.align === 'center' ? '_justify-content-center' : '_justify-content-start';
		},
		getLogoSize () {
			return `logo--${ this.icon ? 'icon--' : '' }${ this.getSize }`;
		},
		getTextSize () {
			return `text--${ this.icon ? 'icon--' : '' }${ this.getSize }`;
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

section.logo-wrapper {
	position: relative;
	display: inline-block;
	width: auto;
	height: auto;

	> div {
		display: block;
		position: relative;
		flex: 0 0 auto;
	}

	.logo {
		display: block;
		height: auto !important;

		&:focus {
			outline: 0 !important;
			border: none !important;
		}
	}

	.logo-- {
		&x-small {
			max-width: 104.5px !important;
			width: 104.5px !important;
		}

		&small {
			max-width: 170px !important;
			width: 170px !important;
		}

		&normal {
			max-width: 240px !important;
			width: 240px !important;
		}

		&big {
			max-width: 248px !important;
			height: 54.5px;
		}

		&icon-- {
			&x-small {
				max-width: 16px !important;
				width: 16px !important;
			}

			&small {
				max-width: 32px !important;
				width: 32px !important;
			}

			&normal {
				max-width: 48px !important;
				width: 48px !important;
			}

			&big {
				max-width: 64px !important;
				width: 64px !important;
			}
		}
	}

	.text-- {
		&x-small {
			position: absolute;
			font-size: 7px;
			top: 34px;
			left: 26px;
		}

		&small {
			position: absolute;
			font-size: 10px;
			top: 36px;
			left: 54px;
		}

		&normal {
			position: absolute;
			font-size: 12px;
			top: 48px;
			left: 78px;
			font-weight: 500;
		}

		&big {
			position: absolute;
			font-size: 14px;
			top: 56px;
			left: 62px;
		}

		&icon-- {
			&small {
				position: absolute;
				font-size: 9px;
				top: 38px;
				left: 16px;
			}

			&normal {
				position: absolute;
				font-size: 10px;
				top: 36px;
				left: 24px;

				&.second-row {
					top: 46px;
					left: 14px;
				}
			}

			&big {
				position: absolute;
				font-size: 14px;
				top: 56px;
				left: 16px;
			}
		}

		&white {
			color: $color-white !important;
		}

		&blue {
			color: $color-primary !important;
		}
	}
}
</style>
