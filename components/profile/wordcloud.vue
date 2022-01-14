<template>
    <div>
        <v-navigation-drawer
				app
				clipped
				v-model="drawer"
			>
				<div style="padding: 8px;">
					<v-switch
						class="ma-0 pa-0"
						hide-details
						label="show progress"
						v-model="progressVisible"
					></v-switch>
				</div>
				<v-divider></v-divider>
				<div
					style="
						display: grid;
						gap: 8px;
						padding: 8px;
					"
				>
					<v-textarea
						:rows="9"
						filled
						hide-details
						label="words & weights"
						v-model="wordsText"
					></v-textarea>
					<v-btn
						block
						color="primary"
						@click="generateWordsText"
					>generate randomly</v-btn>
				</div>
				<v-divider></v-divider>
				<div
					style="
						display: grid;
						gap: 16px;
						padding: 8px;
					"
				>
					<v-select
						:items="fontFamilyValues"
						filled
						hide-details
						label="font family"
						v-model="fontFamily"
					>
						<template v-slot:item="props">
							<span
								:style="{fontFamily: props.item}"
							>{{ props.item }}</span>
						</template>
					</v-select>
					<div>
						<v-input
							label="color"
							hide-details
						></v-input>
						<v-btn-toggle
							dense
							mandatory
							v-model="colorItemIndex"
						>
							<v-btn
								v-for="(item, itemIndex) in colorItems"
								:key="itemIndex"
								:value="itemIndex"
								icon
							>
								<div
									style="
										display: flex;
										height: 24px;
										margin: 2px;
										width: 24px;
									"
								>
									<div
										v-for="(colo,key) in item"
                                        :key="key"
										:style="{backgroundColor: color}"
										style="flex: 1 1 0%;"
									></div>
								</div>
							</v-btn>
						</v-btn-toggle>
					</div>
					<div>
						<v-input
							label="rotation"
							hide-details
						></v-input>
						<v-btn-toggle
							dense
							mandatory
							v-model="rotationItemIndex"
						>
							<v-btn
								v-for="(item, itemIndex) in rotationItems"
								:key="itemIndex"
								:value="itemIndex"
								icon
							>
								<vue-svg
									:src="item.svg"
									fill="currentColor"
									height="24"
									width="24"
								></vue-svg>
							</v-btn>
						</v-btn-toggle>
					</div>
					<div>
						<div
							style="
								align-items: center;
								display: flex;
								justify-content: space-between;
							"
						>
							<v-input
								label="spacing"
								hide-details
							></v-input>
							<v-chip
								small
							>{{ Math.round(spacing * 100) }}%</v-chip>
						</div>
						<v-slider
							:max="spacingValues.length - 1"
							:min="0"
							hide-details
							ticks
							v-model="spacingValueIndex"
						></v-slider>
					</div>
					<v-select
						:items="animationItems"
						filled
						hide-details
						label="enter/leave animation"
						v-model="animation"
					></v-select>
					<div>
						<div
							style="
								align-items: center;
								display: flex;
								justify-content: space-between;
							"
						>
							<v-input
								label="animation duration"
								hide-details
							></v-input>
							<v-chip
								small
							>{{ Math.round(animationDuration / 1000) }}s</v-chip>
						</div>
						<v-slider
							:max="animationDurationValues.length - 1"
							:min="0"
							hide-details
							ticks
							v-model="animationDurationValueIndex"
						></v-slider>
					</div>
					<div>
						<div
							style="
								align-items: center;
								display: flex;
								justify-content: space-between;
							"
						>
							<v-input
								label="animation overlap"
								hide-details
							></v-input>
							<v-chip
								small
							>{{ Math.round(animationOverlap * 100) }}%</v-chip>
						</div>
						<v-slider
							:max="animationOverlapValues.length - 1"
							:min="0"
							hide-details
							ticks
							v-model="animationOverlapValueIndex"
						></v-slider>
					</div>
					<v-select
						:items="animationEasingValues"
						filled
						hide-details
						label="animation easing"
						v-model="animationEasing"
					></v-select>
					<div>
						<div
							style="
								align-items: center;
								display: flex;
								justify-content: space-between;
							"
						>
							<v-input
								label="font size ratio"
								hide-details
							></v-input>
							<v-chip
								small
							>{{ Math.round(fontSizeRatio * 100) }}%</v-chip>
						</div>
						<v-slider
							:max="fontSizeRatioValues.length - 1"
							:min="0"
							hide-details
							ticks
							v-model="fontSizeRatioValueIndex"
						></v-slider>
					</div>
				</div>
			</v-navigation-drawer>
			<v-app-bar
				app
				clipped-left
				dark
			>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
				<v-toolbar-title>VueWordCloud</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn
					href="https://github.com/SeregPie/VueWordCloud"
					icon
					target="_blank"
				>
					<v-icon>mdi-github</v-icon>
				</v-btn>
			</v-app-bar>
			<v-content>
				<v-container
					fill-height
					overflow-hidden
				>
					<div
						style="
							height: 100%;
							position: relative;
							width: 100%;
						"
					>
						<div
							:style="(progressVisible && progress)
								? {
									filter: 'blur(8px)',
									opacity: 0.3,
									pointerEvents: 'none',
									transform: 'scale(0.7,0.7)',
								}
								: {}
							"
							style="
								bottom: 0;
								left: 0;
								position: absolute;
								right: 0;
								top: 0;
								transition-duration: 1s;
							"
						>
							<vue-word-cloud
								:animation-duration="animationDuration"
								:animation-easing="animationEasing"
								:animation-overlap="animationOverlap"
								:color="color"
								:enter-animation="enterAnimation"
								:font-family="fontFamily"
								:font-size-ratio="fontSizeRatio"
								:leave-animation="leaveAnimation"
								:load-font="loadFont"
								:progress.sync="progress"
								:rotation="rotation"
								:spacing="spacing"
								:words="words"
							>
								<template v-slot="props">
									<v-tooltip top>
										<template v-slot:activator="{on}">
											<div
												style="cursor: pointer;"
												v-on="on"
												@click="onWordClick(props.word)"
											>{{ props.text }}</div>
										</template>
										<div
											style="text-align: center;"
										>{{ props.text }}<br/>({{ props.weight }})</div>
									</v-tooltip>
								</template>
							</vue-word-cloud>
						</div>
						<v-scale-transition>
							<v-progress-circular
								v-if="progressVisible && progress"
								:rotate="-90"
								:size="200"
								:value="(progress.completedWords / progress.totalWords) * 100"
								:width="20"
								class="v-no-animation"
								color="primary"
								style="
									bottom: 0;
									left: 0;
									margin: auto;
									position: absolute;
									right: 0;
									top: 0;
								"
							>{{ progress.completedWords }} of {{ progress.totalWords }}</v-progress-circular>
						</v-scale-transition>
					</div>
				</v-container>
			</v-content>
			<v-snackbar
				:timeout="2000"
				bottom
				v-model="snackbarVisible"
			>{{ snackbarText }}</v-snackbar>
    </div>
</template>

<script>
    export default {
        data: function() {
			return {
				animation: undefined,
				animationDurationValueIndex: 2,
				animationDurationValues: [0, 1000, 5000, 10000],
				animationEasing: undefined,
				animationEasingValues: [
					'ease',
					'linear',
					'ease-in',
					'ease-out',
					'ease-in-out',
					'cubic-bezier(0.1,0.7,1.0,0.1)',
				],
				animationItems: [
					{
						text: 'bounce',
						value: ['bounceIn', 'bounceOut'],
					},
					{
						text: 'fade',
						value: ['fadeIn', 'fadeOut'],
					},
					{
						text: 'flipX',
						value: ['flipInX', 'flipOutX'],
					},
					{
						text: 'flipY',
						value: ['flipInY', 'flipOutY'],
					},
					{
						text: 'rotate',
						value: ['rotateIn', 'rotateOut'],
					},
					{
						text: 'zoom',
						value: ['zoomIn', 'zoomOut'],
					},
				],
				animationOverlapValueIndex: 1,
				animationOverlapValues: [0, 1/5, 1/2, 1],
				colorItemIndex: undefined,
				colorItems: [
					['#d99cd1', '#c99cd1', '#b99cd1', '#a99cd1'],
					['#403030', '#f97a7a'],
					['#31a50d', '#d1b022', '#74482a'],
					['#ffd077', '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47'],
				],
				drawer: true,
				fontFamily: undefined,
				fontFamilyValues: [
					'Abril Fatface',
					'Annie Use Your Telescope',
					'Anton',
					'Bahiana',
					'Baloo Bhaijaan',
					'Barrio',
					'Finger Paint',
					'Fredericka the Great',
					'Gloria Hallelujah',
					'Indie Flower',
					'Life Savers',
					'Londrina Sketch',
					'Love Ya Like A Sister',
					'Merienda',
					'Nothing You Could Do',
					'Pacifico',
					'Quicksand',
					'Righteous',
					'Sacramento',
					'Shadows Into Light',
				],
				fontSizeRatioValueIndex: 0,
				fontSizeRatioValues: [0, 1/20, 1/5, 1/2, 1],
				progress: undefined,
				progressVisible: true,
				rotationItemIndex: undefined,
				rotationItems: [
					{
						value: 0,
						svg: (function() {
							var div = document.createElement('div');
							div.appendChild((function() {
								var svg = document.createElementNS(svgNS, 'svg');
								svg.setAttribute('viewBox', '0 0 12 12');
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									return path;
								})());
								return svg;
							})());
							return URL.createObjectURL(new Blob([div.innerHTML]));
						})(),
					},
					{
						value: 7/8,
						svg: (function() {
							var div = document.createElement('div');
							div.appendChild((function() {
								var svg = document.createElementNS(svgNS, 'svg');
								svg.setAttribute('viewBox', '0 0 12 12');
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									path.setAttribute('transform', 'rotate(315 6 6)');
									return path;
								})());
								return svg;
							})());
							return URL.createObjectURL(new Blob([div.innerHTML]));
						})(),
					},
					{
						value: function(word) {
							var chance = new Chance(word[0]);
							return chance.pickone([0, 3/4]);
						},
						svg: (function() {
							var div = document.createElement('div');
							div.appendChild((function() {
								var svg = document.createElementNS(svgNS, 'svg');
								svg.setAttribute('viewBox', '0 0 12 12');
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									return path;
								})());
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									path.setAttribute('transform', 'rotate(90 6 6)');
									return path;
								})());
								return svg;
							})());
							return URL.createObjectURL(new Blob([div.innerHTML]));
						})(),
					},
					{
						value: function(word) {
							var chance = new Chance(word[0]);
							return chance.pickone([0, 1/8, 3/4, 7/8]);
						},
						svg: (function() {
							var div = document.createElement('div');
							div.appendChild((function() {
								var svg = document.createElementNS(svgNS, 'svg');
								svg.setAttribute('viewBox', '0 0 12 12');
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									return path;
								})());
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									path.setAttribute('transform', 'rotate(45 6 6)');
									return path;
								})());
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									path.setAttribute('transform', 'rotate(90 6 6)');
									return path;
								})());
								svg.appendChild((function() {
									var path = document.createElementNS(svgNS, 'path');
									path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z');
									path.setAttribute('transform', 'rotate(315 6 6)');
									return path;
								})());
								return svg;
							})());
							return URL.createObjectURL(new Blob([div.innerHTML]));
						})(),
					},
					{
						value: function(word) {
							var chance = new Chance(word[0]);
							return chance.random();
						},
						svg: (function() {
							var div = document.createElement('div');
							div.appendChild((function() {
								var svg = document.createElementNS(svgNS, 'svg');
								svg.setAttribute('viewBox', '0 0 2 2');
								svg.appendChild((function() {
									var circle = document.createElementNS(svgNS, 'circle');
									circle.setAttribute('cx', 1);
									circle.setAttribute('cy', 1);
									circle.setAttribute('r', 1);
									return circle;
								})());
								return svg;
							})());
							return URL.createObjectURL(new Blob([div.innerHTML]));
						})(),
					}
				],
				snackbarText: '',
				snackbarVisible: false,
				spacingValueIndex: 1,
				spacingValues: [0, 1/4, 1/2, 1, 2],
				wordsText: undefined,
			};
		},
		computed: {
			animationDuration: function() {
				return this.animationDurationValues[this.animationDurationValueIndex];
			},
			animationOverlap: function() {
				return this.animationOverlapValues[this.animationOverlapValueIndex];
			},
			color: function() {
				var colors = this.colorItems[this.colorItemIndex];
				return function() {
					return chance.pickone(colors);
				};
			},
			enterAnimation: function() {
				return [
					'animated',
					this.animation[0],
				]
					.map(function(value) {
						return 'animate__' + value;
					})
					.join(' ');
			},
			fontSizeRatio: function() {
				return this.fontSizeRatioValues[this.fontSizeRatioValueIndex];
			},
			leaveAnimation: function() {
				return [
					'animated',
					this.animation[1],
				]
					.map(function(value) {
						return 'animate__' + value;
					})
					.join(' ');
			},
			rotation: function() {
				var item = this.rotationItems[this.rotationItemIndex];
				return item.value;
			},
			spacing: function() {
				return this.spacingValues[this.spacingValueIndex];
			},
			words: function() {
				return this.wordsText
					.split(/[\r\n]+/)
					.map(function(line) {
						return /^(.+)\s+(-?\d+)$/.exec(line);
					})
					.filter(function(matched) {
						return matched;
					})
					.map(function(matched) {
						var text = matched[1];
						var weight = Number(matched[2]);
						return [text, weight];
					});
			},
		},
		watch: {
			progress: function(currentProgress, previousProgress) {
				if (previousProgress) {
					this.progressVisible = false;
				}
			},
		},
		created: function() {
			this.generateWordsText();
			this.animation = chance.pickone(this.animationItems).value;
			this.animationEasing = chance.pickone(this.animationEasingValues);
			this.colorItemIndex = chance.integer({min: 0, max: this.colorItems.length - 1});
			this.fontFamily = chance.pickone(this.fontFamilyValues);
			this.rotationItemIndex = chance.integer({min: 0, max: this.rotationItems.length - 1});
		},
		methods: {
			generateWordsText: function() {
				this.wordsText = [
					[9, 1, 3],
					[4, 5, 15],
					[2, 5, 15],
					[1, 25, 150],
				]
					.reduce(function(returns, item) {
						var weight = item[0];
						var minCount = item[1];
						var maxCount = item[2];
						var count = chance.integer({min: minCount, max: maxCount});
						chance.n(function() {
							var word = chance.word();
							returns.push(word+' '+weight);
						}, count);
						return returns;
					}, [])
					.join('\n');
			},
			loadFont: function(fontFamily, fontStyle, fontWeight, text) {
				return (new FontFaceObserver(fontFamily, {style: fontStyle, weight: fontWeight})).load(text);
			},
			onWordClick: function(word) {
				this.snackbarVisible = true;
				this.snackbarText = word[0];
			},
		},
    }
</script>

<style lang="scss" scoped>

</style>