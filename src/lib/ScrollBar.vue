<template>
	<div
		class="scroll-wrapper"
		ref="scrollBarWrapper"
		@wheel.prevent="scrollBarWheel"
		:style="wrapperStyle"
	>
		<div ref="content"><slot></slot></div>
		<div class="scroll-track" :style="outStyle" v-show="ifShowBar">
			<div
				:style="innerStyle"
				ref="scrollInner"
				@mousedown="dragBar"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ScrollBar',
	props: {
		options: Object,
	},
	data() {
		return {
			ifShowBar: true,
			innerStyle: {
				width: '100%',
				borderRadius: '8px',
				backgroundColor: 'grey',
				position: 'absolute',
				top: '0px',
			},
			outStyle: {
				width: '8px',
				borderRadius: '10px',
				backgroundColor: '#fff',
			},
			observer: null,
			top: 0,
      top2: 0,
      level: 20,
			isDown: false,
			scrollHeight: 0,
			contentHeight: 0,
			wrapperHeight: 0,
			wrapperStyle: {},
		}
	},
	created() {
		if (this.options.innerStyle) {
      this.innerStyle.width = this.options.innerStyle.width||'100%'
      this.innerStyle.backgroundColor = this.options.innerStyle.backgroundColor||'grey'
      this.innerStyle.borderRadius = this.options.innerStyle.borderRadius||'0px'
		}
		if (this.options.outStyle) {
   //   this.outStyle = this.options.outStyle
      this.outStyle.width = this.options.outStyle.width||'5px'
      this.outStyle.backgroundColor = this.options.outStyle.backgroundColor||'#fff'
      this.outStyle.borderRadius = this.options.outStyle.borderRadius||'0px'
    }
    this.level = this.options.level||20
	},
	mounted: function() {
		let that = this
		this.$refs.content.style.top = '0'
		that.toShowBar()
		that.$forceUpdate()
		this.observer = new MutationObserver(
			function() {
				that.toShowBar()
			}.bind(this)
		)

		// Setup the observer
		this.observer.observe(this.$refs.content, {
			attributes: true,
			childList: true,
			characterData: true,
			subtree: true,
		})
	},
	beforeDestroy: function() {
		// Clean up
		this.observer.disconnect()
	},
	methods: {
		scrollBarWheel(e) {
			let contentHeight = this.$refs.content.offsetHeight
			let scrollWrapperHeight = this.$refs.scrollBarWrapper.offsetHeight
			let disd =
				this.$refs.content.offsetHeight -
				this.$refs.scrollBarWrapper.offsetHeight
			let disd2 =(scrollWrapperHeight -(scrollWrapperHeight * scrollWrapperHeight) /contentHeight) /disd
			if (e.wheelDelta > 0) {
				if (this.top <= -this.level) {
					this.top += this.level
					this.top2 -= disd2 * this.level
				} else {
					this.top = 0
					this.top2 = 0
				}
				this.$refs.content.style.top = this.top + 'px'
				this.innerStyle.top = this.top2 + 'px'
			}
			if (e.wheelDelta < 0 && (this.top + disd > this.level)) {
				this.top -= this.level
				this.top2 += disd2 * this.level
				this.$refs.content.style.top = this.top + 'px'
				this.innerStyle.top = this.top2 + 'px'
			}
			if (e.wheelDelta < 0 &&this.top + disd <= this.level &&this.top + disd > 0) {
				this.top = this.wrapperHeight - this.contentHeight
				this.$refs.content.style.top = this.top + 'px'
				this.top2 = this.wrapperHeight - this.$refs.scrollInner.offsetHeight 
				this.innerStyle.top = this.top2 + 'px'
      }
		},
		toShowBar() {
			this.contentHeight = this.$refs.content.offsetHeight
			this.wrapperHeight = this.$refs.scrollBarWrapper.offsetHeight
			if (this.contentHeight > this.wrapperHeight) {
				this.ifShowBar = true
				this.$refs.content.style.position = 'absolute'
				this.innerStyle.height =
					(this.wrapperHeight / this.contentHeight) * 100 + '%'
			} else {
				this.ifShowBar = false
			}
		},
		dragBar() {
			let rate =
				(this.contentHeight - this.wrapperHeight) /
				(this.wrapperHeight - this.$refs.scrollInner.offsetHeight)
			let that = this
			let t = that.$refs.scrollBarWrapper.offsetTop
			document.onmousemove = function() {
				that.wrapperStyle = {
					boxShadow: '2px 2px 10px 0px rgba(54,55,55,0.06)',
				}
				let h = that.wrapperHeight - that.$refs.scrollInner.offsetHeight
				if (event.pageY - t > 0 || event.pageY - t == 0) {
					if (event.pageY - t < h) {
						that.top2 = event.pageY - t
						that.top = -that.top2 * rate
					}
				} 
				if(event.pageY - t >= h){
					that.top2 = h
					that.top = that.wrapperHeight-that.contentHeight  
				}
				that.innerStyle.top = that.top2 + 'px'
				that.$refs.content.style.top = that.top + 'px'
			}
			document.onmouseup = function() {
				that.wrapperStyle = { boxShadow: 'none' }
				document.onmousemove = null
			}
		},
	},
}
</script>
<style scoped>
@media (min-width: 768px) {
	.scroll-wrapper {overflow: hidden;}
}
@media (max-width: 768px) {
  .scroll-wrapper {overflow: auto;}
  .scroll-track {display: none;}
}  
.scroll-wrapper {
	position: relative;
	/* overflow: hidden; */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.scroll-track {
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
}
.scroll-inner-bar {
	position: absolute;
}
</style>
