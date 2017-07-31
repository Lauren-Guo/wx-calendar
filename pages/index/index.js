//index.js
const weeks = ["日", "一", "二", "三", "四", "五", "六"];
const calender = { 
  data: {
    weeks: weeks,
    timeline:{
      year  : new Date().getFullYear(),
      month: new Date().getMonth() + 1
    },
    // 存放日历的空白格子
    emptyArray: [],
    // 存放日历的实际日期
    nonemptyArray: []
  },
  onShow() {
    this.nonemptyDays();
  },
  changeMonth(e) {
    if (e.currentTarget.dataset.type === "prev") {
      this.data.timeline.month === 1 ? this.setData({ timeline: { year: this.data.timeline.year -= 1, month: 12 } }) : this.setData({ timeline: { year: this.data.timeline.year, month: this.data.timeline.month -= 1 } }) 
    } else {
      this.data.timeline.month === 12 ? this.setData({ timeline: { year: this.data.timeline.year += 1, month: 1 } }) : this.setData({ timeline: { year: this.data.timeline.year, month: this.data.timeline.month += 1 } }) 
    }
    this.nonemptyDays();
  },
  emptyDays(nowWeek) {
    if (nowWeek === 0) {
      this.setData({
        "emptyArray": []
      });
    } else {
      const emptyArray = [];
      for (let i = 0; i < nowWeek; i++) {
        emptyArray.push(i);
      };
      this.setData({
        "emptyArray": emptyArray
      });
    }
  },
  nonemptyDays() {
    /* allDays 存储的是每月一共有多少天，用new Date (xxxx,xx,0).getDate();
    *  nowWeek 存放的是每月的1号是星期数组的下标
    */
    const allDays = new Date(this.data.timeline.year, this.data.timeline.month, 0).getDate();
    const nowWeek = new Date(Date.UTC(this.data.timeline.year, this.data.timeline.month - 1, 1)).getDay();
    const nonemptyArray = [];
    this.emptyDays(nowWeek);
    for (let i = 1; i <= allDays; i++) {
      nonemptyArray.push(i);
    };
    this.setData({
      "nonemptyArray": nonemptyArray
    });
  }
};
Page(calender);


