<template>
  <view>
    <image
      src="../../static/images/logo.png"
      class="img-logo"
      mode="aspectFit"
    />
    <block>
      <my-search></my-search>
      <view class="tabs">
        <my-tabs
          :tabsList="tabsList"
          @handleTabsCallBack="handleTabsCallBack"
          :defaultIndex="currentIndex"
        ></my-tabs>
      </view>

      <swiper
        class="swiper-box"
        :style="{
          height: swiperHeigh + 80 + 'px',
        }"
        :current="currentIndex"
        @change="change"
      >
        <swiper-item v-for="(_item, _index) in tabsList" :key="_index">
          <view>
            <uni-load-more status="loading" v-if="isLoading" />
            <view v-else>
              <view
                v-for="(item, index) in swiperListData[_index].data"
                :key="item.value"
                :class="'hot-list-item-' + _index"
              >
                <hot-list-item
                  :listData="{
                    idx: index,
                    ...item,
                  }"
                ></hot-list-item>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </block>
    <uni-load-more status="noMore" v-if="isBase" />
  </view>
</template>

<script>
import { tabsList, hotListData } from "../../data/hot";
export default {
  data() {
    return {
      tabsList: [],
      hotListData: {},
      hotListDataItem: [],
      isLoading: false,
      swiperListData: [],
      currentIndex: 0,
      swiperHeigh: 0,
      isBase: false,
    };
  },
  onReachBottom() {
    this.isBase = true;
  },
  methods: {
    change(e) {
      this.currentIndex = e.detail.current;
    },
    async handleTabsCallBack(idx) {
      this.currentIndex = idx;
      this.isBase = false;
      if (!this.swiperListData[idx].data) {
        this.isLoading = true;
        setTimeout(() => {
          this.swiperListData[idx] = {
            ...this.swiperListData[idx],
            data: this.hotListData[idx][idx],
            isCache: true,
          };
          this.isLoading = false;
          setTimeout(async () => {
            const res = await this.getSwiperHeigh();
            this.swiperHeigh = res;
          }, 0);
        }, 2000);
      }
    },
    getSwiperHeigh() {
      return new Promise((resolve, reject) => {
        const query = uni.createSelectorQuery().in(this);
        let sum = 0;
        console.log(query.selectAll(`.hot-list-item-${this.currentIndex}`));
        query
          .selectAll(`.hot-list-item-${this.currentIndex}`)
          .boundingClientRect(res => {
            console.log("res01", res);
            res.forEach(item => {
              sum += item.height;
            });
            resolve(sum);
          })
          .exec();
      });
    },
  },
  watch: {},
  async created() {
    this.tabsList = tabsList;
    this.hotListData = hotListData;
    const swierList = this.tabsList.map((swiper, idx) => {
      return {
        id: idx,
      };
    });
    swierList[0] = {
      ...swierList[0],
      data: this.hotListData[0][0],
      isCache: true,
    };
    this.swiperListData = swierList;
    this.hotListDataItem = this.hotListData[0];
    const res = await this.getSwiperHeigh();
    this.swiperHeigh = res;
  },
};
</script>

<style lang="scss" scoped>
.img-logo {
  width: 100%;
  height: 80px;
}
.tabs {
  position: sticky;
  top: 0px;
  z-index: 99;
}
</style>
