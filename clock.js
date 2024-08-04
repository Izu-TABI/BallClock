let today;
let todayYear;
let todayMonth;
let todayDate;
let todayHours;
let todayMinutes;
let todaySeconds;
let text;
let MinutesTextChange;

function getNowDate() {
  today = new Date();
  todayYear = today.getFullYear();
  todayMonth = today.getMonth() + 1;
  todayDate = today.getDate();
  todayHours = today.getHours();
  todayMinutes = today.getMinutes();

  text;
  MinutesTextChange;

}

function animate() {
  getNowDate();
  today = new Date();
  todaySeconds = today.getSeconds();
  document.getElementById('secondsId').setAttribute('style', `margin-top: 10px;height: 10px; width: ${((todaySeconds + (today.getMilliseconds() * 0.001)) / 60) * 500}px; background-color: rgba(196, 196, 196, 0.708); zIndex: 10;`);
  clock();
  // 再帰
  requestAnimationFrame(animate);
}


function clock() {
  //表示用
  function timer() {
    if (todayHours < 10) {
      todayHours = '0' + todayHours;
    }
    if (todayMinutes < 10) {
      todayMinutes = '0' + todayMinutes;
    }
    document.getElementById('hoursId').innerHTML = '<p>' + todayHours + '</p>';
    document.getElementById('minutesId').innerHTML = '<p>' + todayMinutes + '</p>';
    document.getElementById('dateId').innerHTML = '<p>' + todayYear + '年' + '&nbsp;' + todayMonth + '月' + todayDate + '日' + '</p>';

  }
  timer();

}
animate();
