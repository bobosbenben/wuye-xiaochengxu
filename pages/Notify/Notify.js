// pages/Notify/Notify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      id: 1,
      title: '停电通知',
      content: '由于供电线路检修，以下小区将在18:30',
      time: '2019-02-14',
      thumb: 'https://duobifuwu-1252535629.cos.ap-beijing.myqcloud.com/wuye/system/%E9%80%9A%E7%9F%A5%20(1).png'
    }, {
        id: 2,
        title: '停水通知',
        content: '由于供电线路检修，以下小区将在18:30开始停电：万佳御园、太阳城西部片区，停电时间将持续24个小时,请大家做好停电的准备，电力恢复后将第一时间通知大家',
        time: '2019-02-14',
        thumb: 'https://duobifuwu-1252535629.cos.ap-beijing.myqcloud.com/wuye/system/%E9%80%9A%E7%9F%A5%20(1).png'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})