<template>
  <div class="hello">
    <div class="head">
      <p>{{ msg }}</p>
    </div>
    <div class="note">
      <span>使用说明：</span>
      必须保证只有结果为数字（没有的项写数字0不能空着不写），其他位置不能出现数字。
    </div>
    <div class="work-add">
      <h2>统计台</h2>
    </div>
    <div class="phone-input">
      <textarea type="text" placeholder="请填写信息" v-model="inputData" @keyup.enter="addEachData" @blur="addEachData"></textarea>
    </div>
    <div class="phone-input each-block">
      <ul>
        <li class="each-msg" v-for="(item, index) in workData" :key="index">
          <span class="delet-li" @click="deleteEach(index)">删除</span>
          <pre>{{index+1}}-{{item}}</pre>
        </li>
      </ul>
    </div>
    <div class="phone-input total-block">
      <span class="delet-li">总计</span> 
    <pre>【完成统计】
一、通话数据
未接通：<span>{{noLink}}</span>
一分钟以下：<span>{{oneDown}}</span>
一-二分钟：<span>{{twoDown}}</span>
二-三分钟：<span>{{threeDown}}</span>
三分钟以上：<span>{{threeUp}}</span>
合计外呼量：<span>{{totalLik}}</span>
二、业绩数据
今日/明日见面：<span>{{todyJM}}/{{tomoryJM}}</span>
今日/明日进件：<span>{{todyJJ}}/{{tomoryJJ}}</span>
今日/明日通过：<span>{{todyTG}}/{{tomoryTG}}</span>
今日/明日首付：<span>{{todySF}}/{{tomorySF}}</span>
    </pre>
</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "工作统计工具",
      inputData: "", //输入框输入的数据
      workData: [], //列表数据
      numData: [], //纯数字数据
      noLink: 0, //未接通
      oneDown: 0, //1分钟以下
      twoDown: 0, //2分钟以下
      threeDown: 0, //3分钟以下
      threeUp: 0, //3分钟以上
      totalLik: 0, //合计外呼数
      todyJM: 0, //今日见面
      todyJJ: 0, //今日进件
      todyTG: 0, //今日通过
      todySF: 0, //今日首付
      tomoryJM: 0, //明日见面
      tomoryJJ: 0, //明日进件
      tomoryTG: 0, //明日通过
      tomorySF: 0 //明日首付
    };
  },
  methods: {
    //添加每项数据
    addEachData: function() {
      if (this.inputData.trim() != "") {
        this.workData.push(this.inputData.trim());
        let reg = /\d+/g;
        let myData = this.inputData
          .trim()
          .match(reg)
          .join(",")
          .split(",");
        this.numData.push(myData);
        debugger;
        this.noLink = this.noLink + parseInt(myData[0]);
        this.oneDown = this.oneDown + parseInt(myData[1]);
        this.twoDown = this.twoDown + parseInt(myData[2]);
        this.threeDown = this.threeDown + parseInt(myData[3]);
        this.threeUp = this.threeUp + parseInt(myData[4]);
        this.totalLik = this.totalLik + parseInt(myData[5]);
        this.todyJM = this.todyJM + parseInt(myData[6]);
        this.tomoryJM = this.tomoryJM + parseInt(myData[7]);
        this.todyJJ = this.todyJJ + parseInt(myData[8]);
        this.tomoryJJ = this.tomoryJJ + parseInt(myData[9]);
        this.todyTG = this.todyTG + parseInt(myData[10]);
        this.tomoryTG = this.tomoryTG + parseInt(myData[11]);
        this.todySF = this.todySF + parseInt(myData[12]);
        this.tomorySF = this.tomorySF + parseInt(myData[13]);
      }
      this.inputData = "";
    },
    //删除每个数据项
    deleteEach: function(indexId) {
      this.workData.splice(indexId, 1);
      this.noLink = this.noLink - parseInt(this.numData[indexId][0]);
      this.oneDown = this.oneDown - parseInt(this.numData[indexId][1]);
      this.twoDown = this.twoDown - parseInt(this.numData[indexId][2]);
      this.threeDown = this.threeDown - parseInt(this.numData[indexId][3]);
      this.threeUp = this.threeUp - parseInt(this.numData[indexId][4]);
      this.totalLik = this.totalLik - parseInt(this.numData[indexId][5]);
      this.todyJM = this.todyJM - parseInt(myData[6]);
      this.tomoryJM = this.tomoryJM - parseInt(myData[7]);
      this.todyJJ = this.todyJJ - parseInt(myData[8]);
      this.tomoryJJ = this.tomoryJJ - parseInt(myData[9]);
      this.todyTG = this.todyTG - parseInt(myData[10]);
      this.tomoryTG = this.tomoryTG - parseInt(myData[11]);
      this.todySF = this.todySF - parseInt(myData[12]);
      this.tomorySF = this.tomorySF - parseInt(myData[13]);
      this.numData.splice(indexId, 1);
    }
  }
};
</script>

<style>
.head {
  width: 100%;
  height: 52px;
  line-height: 52px;
  background: #42b983;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
}
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.note {
  padding: 10px;
  text-align: left;
  font-size: 12px;
  color: #ff0000;
}
.note span {
  color: #333;
}
.work-add {
  padding: 6px 10px;
  text-align: left;
}
.work-add h2 {
  padding-bottom: 6px;
  font-size: 16px;
  border-bottom: 2px solid #42b983;
}
.phone-input {
  padding: 0 10px;
  text-align: left;
}
.phone-input textarea {
  font-size: 14px;
  padding: 6px 10px;
  width: 552px;
  height: 36px;
  line-height: 22px;
  color: #333;
  font-family: "微软雅黑";
  border: 1px solid #ddd;
}
.phone-input {
  text-align: left;
}
.each-msg {
  position: relative;
  float: left;
  padding: 6px 8px;
  margin: 0 10px 10px 0;
  width: 160px;
  min-height: 300px;
  border: 1px solid #ddd;
}
.each-msg:nth-child(2n){
  background: #f3f2f2;
}
.delet-li {
  display: inline-block;
  position: absolute;
  top: -4px;
  right: -6px;
  padding: 2px 4px;
  font-size: 12px;
  background: #a2a2a2;
  color: #fff;
  cursor: pointer;
}
.delet-li:hover{
  background: #868484;
}
.each-msg pre,
.total-block pre {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: #333;
  font-family: "微软雅黑";
}
.total-block {
  position: relative;
  float: left;
  padding: 6px 8px;
  margin: 0 10px 10px 10px;
  width: 160px;
  min-height: 300px;
  border: 1px solid #ddd;
  background: #fdb50c;
}
.total-block .delet-li {
  padding: 4px;
  background: #04ac60;
  border-radius: 50%;
}
.total-block pre,
a {
  color: #fff;
}
</style>
