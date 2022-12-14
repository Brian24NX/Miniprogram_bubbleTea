// pages/index/index.ts
import pageApi from '../../api/page'
import navigator from "../../utils/navigator"

Page({

  /**
   * Page initial data
   */
  data: {
    swiperList: <SwiperData[]> [],
    iconNavigations: <IconNavigation[]>[]

  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    const {swiper, iconNavigations} = await pageApi.home()
    this.setData({
      swiperList: swiper,
      iconNavigations: iconNavigations
    })
  },

  onIconNavigationTap(event: ItemParam) {
    const { type, target } = event.currentTarget.dataset.item
    navigator.to(type, target)
  },

  goToLogin() {
    wx.navigateTo({url: '/pages/login/index'})
  },
  goToStore() {
    wx.switchTab({url: '/pages/menu/index'})
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    this.getTabBar().init()

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})