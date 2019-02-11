// utils/components/CustomeredPicker/CustomeredPicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    cols: Number,
    region: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiIndex: [0, 0],
    multiArray: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCityByProvinceIndex: function (indexOfProvince) {
      let originalData = this.data.region;
      let city = originalData[indexOfProvince].children;
      return city;
    },

    bindMultiPickerColumnChange(e){
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };

      if (e.detail.column == 0) {
        let label = this.data.region[e.detail.value].label;
        console.log(label);
        let city = this.getCityByProvinceIndex(e.detail.value);
        console.log('city'); console.log(city);
        data.multiArray[1] = city;
        console.log('multiArray'); console.log(data.multiArray);
        this.setData(data);
        this.setData({
          multiIndex: [e.detail.value, 0]
        });
      }
    }
  },

  lifetimes:{
    attached(){
      let originalData = this.data.region;
      let multiArray = [];
      let province = [];
      // let city = [];
      for (let i = 0; i < originalData.length; i++) {
        let temp = {
          label: originalData[i].label,
          value: originalData[i].value
        }
        province.push(temp);
      }

      let indexOfProvince = this.data.multiIndex[0];
      let indexOfCity = this.data.multiIndex[1];

      let city = originalData[indexOfProvince].children;
      multiArray.push(province);
      multiArray.push(city);

      this.setData({
        multiArray: multiArray
      })
    }
  }

})
