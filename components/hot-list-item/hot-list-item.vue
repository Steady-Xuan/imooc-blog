<template>
  <view class="content-box pr">
    <view class="content-index">
      <image :src="indexUrl" mode="aspectFit" class="img-idx" />
      <view
        class="content-index-text"
        :class="{ white: listData.idx < 3, black: listData.idx > 2 }"
        >{{ listData.idx + 1 }}</view
      >
    </view>
    <view class="content-detail">
      <view class="content-detail-title mb text-ellipes mt">
        {{ listData.title }}
      </view>
      <view class="content-detail-detail mb text-ellipes">
        {{ listData.detail }}
      </view>
      <view class="content-detail-footer">
        <view class="content-detail-footer-author mb f12 c99">
          {{ listData.author }}
        </view>
        <view class="content-detail-footer-hot cprimary">
          {{ listData.hot | Formmater }}热度
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "hot-list-item",
  props: {
    listData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      indexUrl: "",
      currentIndex: 0,
    };
  },
  created() {
    this.currentIndex = this.listData.idx;

    if (this.currentIndex < 3) {
      this.indexUrl = require(`@/static/images/ranking-${
        this.currentIndex + 1
      }.png`);
    } else {
      this.indexUrl = require(`@/static/images/ranking-other.png`);
    }
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  display: flex;
  justify-content: flex-start;
  margin: 20rpx;
  border-radius: 15rpx;
  box-shadow: 2px 2px 5px 1px rgba(143, 143, 143, 0.1);
  .content-index {
    width: 60rpx;
    margin-left: 20rpx;
    position: relative;
    &-text {
      position: absolute;
      margin-top: -46rpx;
      margin-left: 10rpx;
      font-size: 14px;
    }
  }
  .content-detail {
    width: 100%;
    &-title {
      font-weight: bold;
    }
    &-detail {
      font-size: 16px;
      color: #333;
      //   height: 200rpx;
    }
  }
  .content-detail-footer {
    display: flex;
    justify-content: space-between;
    &-hot {
      margin-right: 40rpx;
    }
  }
  .mb {
    margin-bottom: 20rpx;
  }
  .img-idx {
    width: 40rpx;
    margin-top: 25rpx;
    height: 40rpx;
    margin-right: 10rpx;
  }
  .white {
    color: white;
  }
  .black {
    color: #333;
  }
}
</style>
