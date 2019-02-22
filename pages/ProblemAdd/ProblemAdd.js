// pages/ProblemAdd/ProblemAdd.js
import { $wuxSelect } from '../../utils/components/dist/index'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeValue: '报修',
    typeTitle:  '报修',
    houseId: null,
    houseInfo: {
      id: 11,
      name: '石伊波',
      province: '内蒙古',
      city:'鄂尔多斯市',
      country: '伊金霍洛旗',
      town: '阿镇',
      community: '万佳御园小区',
      building: '5号楼',
      unit: '1单元',
      room: '903室',
      defaultCountryArray: ["2", "3", "4"],
      defaultCountryTitle: '内蒙古,鄂尔多斯,伊金霍洛旗',
      defaultCommunityArray: ["5", "6"],
      defaultCommunityTitle: '阿镇,万佳御园',
      defaultRoomArray: ["7", "8", "9"],
      defaultRoomTitle: '5号楼,1单元,903室',
      phoneNumber: '15391257468',
      isDefaultAddress: true
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.houseId) this.setData({ houseId: options.houseId });
    // this.setData({ userInfo: app.globalData.userInfo});
    let that = this;
    wx.getUserInfo({
      success: res => {
        // 可以将 res 发送给后台解码出 unionId
        that.setData({userInfo: res.userInfo});
      }
    });
  },

  onTypeClick() {
    $wuxSelect('#wux-select-type').open({
      value: this.data.typeValue,
      options: [
        '报修',
        '投诉',
        '建议',
        '其他',
      ],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            typeValue: value,
            typeTitle: options[index],
          })
        }
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})