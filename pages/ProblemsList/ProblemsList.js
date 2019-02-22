// pages/ProblemsList/ProblemsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      array: [{
        id: 11,
        community: '万佳御园小区',
        building: '5号楼',
        unit: '1单元',
        room: '903室',
        phoneNumber: '15391257468',
        isDefaultAddress: true,
        description: '下水道早就堵上了，一直没有人来给修，打电话也不接'
      }, {
        id: 12,
        community: '万佳御园小区',
        building: '7号楼',
        unit: '2单元',
        room: '101室',
        phoneNumber: '15391257468',
        isDefaultAddress: false,
        description: '有人占用了我的车位了'
      }],

      pageIndex: 1,
    });
  },

  onProblemSelected:function(e){
    console.log('选中了一个工单', e.currentTarget.dataset.id);
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