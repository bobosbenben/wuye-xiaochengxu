// utils/components/CustomeredPicker/CustomeredPicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    text: String,
    cols: Number,
    dataArray: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiIndex: [0,0],
    multiArray: [],
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //只有2个层级时，修改了第一层级，第二层级的内容随着改变
    getSecondByFirstIndex: function (indexOfFirst) {
      let originalData = this.data.dataArray;
      let second = originalData[indexOfFirst].children;
      if(second == null || second == undefined) second = [];
      return second;
    },

    //有3个层级时，修改了第一层级时，第二层级的内容随着改变，第三层级默认是0
    getThirdByFirstIndex: function(indexOfFirst){
      let originalData = this.data.dataArray;
      let second = originalData[indexOfFirst].children;
      if (second == null || second == undefined) second = [];
      let third = second[0] == undefined?[]:second[0].children;
      if (third == null || third == undefined) third = [];
      return third;
    },
    //有3个层级，修改了第二层级，第三层级的内容随着改变
    getThirdBySecondAndFirstIndex: function(indexOfFirst,indexOfSecond){
      let originalData = this.data.dataArray;
      let second = originalData[indexOfFirst].children;

      let third = second[indexOfSecond] == undefined?[]:second[indexOfSecond].children;
      if (third == null || third == undefined) third = [];
      return third;
    },

    //选中了一个选项
    bindMultiPickerChange(e){
      this.setData({
        multiIndex: e.detail.value
      });
      let originalData = this.data.dataArray;
      let cols = this.data.cols;
      let id = [];
      id.push(originalData[e.detail.value[0]].value);
      let content = originalData[e.detail.value[0]].label;
      if(cols == 2) {
        id.push(originalData[e.detail.value[0]].children[e.detail.value[1]].value);
        content = content + "," + originalData[e.detail.value[0]].children[e.detail.value[1]].label;
      }
      if (cols == 3) {
        id.push(originalData[e.detail.value[0]].children[e.detail.value[1]].value);
        id.push(originalData[e.detail.value[0]].children[e.detail.value[1]].children[e.detail.value[2]].value);
        content = content + "," + originalData[e.detail.value[0]].children[e.detail.value[1]].label +"," + originalData[e.detail.value[0]].children[e.detail.value[1]].children[e.detail.value[2]].label;
      }
      this.setData({content:content});
      let myEventData = {
        name: this.data.name,
        value: id
      }
      this.triggerEvent('onPickerChoosed',myEventData);
    },

    //滑动改变了picker
    bindMultiPickerColumnChange(e){
      let cols = this.data.cols;
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };

      let multiIndex = [];
      multiIndex.push(e.detail.value);
      multiIndex.push(0);
      data.multiIndex = multiIndex;

      data.multiArray[1] = [{
        "label": "万佳御园",
        "value": "6",
        "children": null
      }, {
          "label": "天隆佳园",
          "value": "7",
          "children": null
        }]

        this.setData(data);



      // if (e.detail.column == 0) {
      //   let second = this.getSecondByFirstIndex(e.detail.value);
      //   let third = this.getThirdByFirstIndex(e.detail.value);
        
      //   if(cols >= 2) data.multiArray[1] = second;
      //   if(cols >= 3) data.multiArray[2] = third;

      //   let multiIndex = [];
      //   if(cols >= 1) multiIndex.push(e.detail.value);
      //   if(cols >= 2) multiIndex.push(0);
      //   if(cols >= 3) multiIndex.push(0);
      //   data.multiIndex = multiIndex;

      //   this.setData(data);
      // }
      // else if(e.detail.column == 1){
      //   if(cols >= 3) {
      //     let indexOfFirst = this.data.multiIndex[0];
      //     let indexOfSecond = e.detail.value;

      //     let third = this.getThirdBySecondAndFirstIndex(indexOfFirst,indexOfSecond);
      //     data.multiArray[2] = third;
      //     data.multiIndex = [indexOfFirst,indexOfSecond,0];
      //     this.setData(data);
      //   }
      // }
    }
  },

  lifetimes:{
    //组件挂载时初始化data
    attached(){
      let originalData = this.data.dataArray;
      let cols = this.data.cols;
      let multiArray = [];
      let indexOfFirst = this.data.multiIndex[0];
      let indexOfSecond = this.data.multiIndex[1];

      let first = [];
      for (let i = 0; i < originalData.length; i++) {
        let temp = {
          label: originalData[i].label,
          value: originalData[i].value
        }
        first.push(temp);
      }

      let second = [];
      let secondOriginalData = originalData[indexOfFirst].children;
      if (secondOriginalData == null || secondOriginalData == undefined) secondOriginalData = [];
      for (let i = 0; i < secondOriginalData.length; i++) {
        let temp = {
          label: originalData[indexOfFirst].children[i].label,
          value: originalData[indexOfFirst].children[i].value
        }
        second.push(temp);
      }

      let third = [];
      let thirdOriginalData = secondOriginalData[indexOfSecond] == undefined?[]:secondOriginalData[indexOfSecond].children;
      if (thirdOriginalData == null || thirdOriginalData == undefined) thirdOriginalData = [];
      for (let i = 0; i < thirdOriginalData.length; i++) {
        let temp = {
          label: secondOriginalData[indexOfSecond].children[i].label,
          value: secondOriginalData[indexOfSecond].children[i].value
        }
        third.push(temp);
      }

      if(cols >= 1) multiArray.push(first);
      if(cols >= 2) multiArray.push(second);
      if(cols == 3) multiArray.push(third);

      this.setData({
        multiArray: multiArray
      })
    }
  }

})
