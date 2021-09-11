function trashTaskIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function trashTalkPerson(options) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
    repairman: ["鎖個螺絲", "隨身帶隻扳手", "拆個輪胎", "每天一身黑"],
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];
  
  const personList = require('./tasker.json')


  let trashTalker = " ";
  if(!options.who) return trashTalker += '請選擇想要幹話的對像.'
  
  // <<-- 尋找發話者名稱,發話陣列 -->
  // const taskList1 = Object.entries(task).find((item) => {
  //   if (item[0] === options.who) {
  //     // console.log(item[1])
  //     return item[0];
  //   }
  // });
  // console.log(taskList1[0],taskList1[1])

  //  <<-- 尋找發話者第一個方式 -->>
  const tasker = task[options.who]

  //  <<-- 尋找發話者第二個方式 -->> 
  const randomTask = task[Object.keys(task).find(item => item === options.who
  )]
//  <<-- 尋找發話者三個方式 -->> 
  const taskPerson = personList.find((item) => {
    if (item.name === options.who) {
      return (item.name);
    }
  })
  // console.log(tasker,randomTask,taskPerson)
 
    trashTalker += `身為一個${taskPerson.chname}，${trashTaskIndex(tasker)}${trashTaskIndex(phrase)}吧!`;
  //  trashTalker += `身為一個${taskPerson.chname}，${trashTaskIndex(tasker)}${trashTaskIndex(phrase)}吧!`;

  // trashTalker += `身為一個${taskPerson.chname}，${trashTaskIndex(taskList[1])}${trashTaskIndex(phrase)}吧!`;
  //  console.log(trashTalker)
  return trashTalker;
}

module.exports = trashTalkPerson;
