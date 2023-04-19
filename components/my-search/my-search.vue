<template>
  <view>
    <view class="serach-box">
      <image
        src="@/static/images/search.png"
        mode="aspectFit"
        class="search-img"
      />
      <text class="search-placeholder">{{ placeholder }}</text>
      <view class="input-search"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-search",
  props: {
    placeholder: {
      type: String,
      default: "uniapp 自定义组件",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  width: 700rpx;
  height: 60rpx;
  margin: 0rpx 20rpx;
  border: 1px solid #cccccc;
  border-radius: 30rpx;
}
.serach-box {
  position: relative;
  .search-placeholder {
    display: block;
    position: absolute;
    left: 110rpx;
    top: 10rpx;
    color: #cccccc;
  }
  .search-img {
    width: 60rpx;
    height: 60rpx;
    display: block;
    position: absolute;
    left: 30rpx;
    top: 2rpx;
  }
}
</style>
