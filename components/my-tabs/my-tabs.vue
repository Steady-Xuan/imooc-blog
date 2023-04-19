<template>
  <view>
    <scroll-view
      scroll-x
      class="scroll-view"
      :scroll-left="scrollLeft"
      scroll-with-animation
    >
      <view class="tabs-box">
        <view v-for="(item, index) in tabsList" :key="index">
          <view
            :id="'_tab_' + index"
            class="tabs-item"
            :class="{ 'tabs-item-active': activeIndex === index }"
            @click="
              e => {
                handleToggle(index, e);
              }
            "
          >
            {{ item.label }}
            <view
              v-if="activeIndex === index"
              :style="{
                width: ' 80rpx',
                height: '5rpx',
                backgroundColor: '#f01414',
                marginLeft: sliderLeft + 20 + 'px',
                marginRight: '20px',
                marginTop: '20rpx',
              }"
            />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "my-tabs",
  props: {
    tabsList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
      sliderLeft: 0,
      scrollLeft: 0,
    };
  },
  watch: {
    defaultIndex: {
      handler(nv, ov) {
        this.activeIndex = nv;
        this.handleToggle(nv);
      },
      immediate: true,
      deep: true,
    },
    tabsList: {
      handler(nv) {},
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleToggle(idx, e) {
      this.activeIndex = idx;
      this.scrollLeft = idx * 90 + "rpx";
      this.$emit("handleTabsCallBack", idx);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-box {
  display: flex;
  justify-content: flex-start;
}
.tabs-item {
  width: 160rpx;
  margin-top: 40rpx;
  text-align: center;
}
.tabs-item-active {
  color: #f01414;
}
.scroll-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>
