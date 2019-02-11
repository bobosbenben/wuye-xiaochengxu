// pages/MyHouseAdd/MyHouseAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    communityData: [{
      "label": "万佳御园",
      "value": "6",
      "children": null
    }, {
        "label": "天隆佳园",
        "value": "7",
        "children": null
      }],
    countryAndTownData: [{
      "label": "伊旗",
      "value": "4",
      "children": [
        {
          "label": "上湾",
          "value": "17",
          "children": null
        },
        {
          "label": "阿镇",
          "value": "5",
          "children": null
        }
      ]
    },
      {
        "label": "乌审旗",
        "value": "22",
        "children": null
      }],
    provinceAndCityData: [{ "label": "内蒙古", "value": "2", "children": [{ "label": "鄂尔多斯", "value": "3", "children": null }, { "label": "包头", "value": "10", "children": null }] }, { "label": "陕西", "value": "23", "children": [{"label":"榆林市","value":"24","children":null},{"label":"西安市","value":"27","children":null}] }],
    roomData: [
      {
        "label": "5号楼",
        "value": "7",
        "children": [
          {
            "label": "1单元",
            "value": "8",
            "children": [
              {
                "label": "903室",
                "value": "9",
                "children": null
              },
              {
                "label": "103室",
                "value": "26",
                "children": null
              }
            ]
          },
          {
            "label": "1单元",
            "value": "25",
            "children": null
          }
        ]
      },
      {
        "label": "7号楼",
        "value": "24",
        "children": [
          {
            "label": "1单元",
            "value": "8",
            "children": [
              {
                "label": "112室",
                "value": "9",
                "children": null
              },
              {
                "label": "113室",
                "value": "26",
                "children": null
              }
            ]
          },
          {
            "label": "2单元",
            "value": "25",
            "children": [
              {
                "label": "222室",
                "value": "9",
                "children": null
              },
              {
                "label": "223室",
                "value": "26",
                "children": null
              }
            ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onPickerChoosed: function(e){
    console.log("接收到数据：");
    console.log(e.detail);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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