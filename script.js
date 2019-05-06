var dates = [
"5/12/19 21:00:00 CST-0500",
"5/19/19 21:00:00 CST-0500",
"5/26/19 21:00:00 CST-0500",
"6/2/19 21:00:00 CST-0500",
"6/9/19 21:00:00 CST-0500",
"6/16/19 21:00:00 CST-0500",
"6/23/19 21:00:00 CST-0500",
"6/30/19 21:00:00 CST-0500",
"7/7/19 21:00:00 CST-0500",
"7/14/19 21:00:00 CST-0500",
"7/21/19 21:00:00 CST-0500",
"7/28/19 21:00:00 CST-0500",
"8/4/19 21:00:00 CST-0500",
"8/11/19 21:00:00 CST-0500",
"8/18/19 21:00:00 CST-0500",
"8/25/19 21:00:00 CST-0500",
"9/1/19 21:00:00 CST-0500",
"9/8/19 21:00:00 CST-0500",
"9/15/19 21:00:00 CST-0500",
"9/22/19 21:00:00 CST-0500",
"9/29/19 21:00:00 CST-0500",
"10/6/19 21:00:00 CST-0500",
"10/13/19 21:00:00 CST-0500",
"10/20/19 21:00:00 CST-0500",
"10/27/19 21:00:00 CST-0500",
"11/3/19 21:00:00 CST-0500",
"11/10/19 21:00:00 CST-0500",
"11/17/19 21:00:00 CST-0500",
"11/24/19 21:00:00 CST-0500",
"12/1/19 21:00:00 CST-0500",
"12/8/19 21:00:00 CST-0500",
"12/15/19 21:00:00 CST-0500",
"12/22/19 21:00:00 CST-0500",
"12/29/19 21:00:00 CST-0500"
];


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      for each(date in dates) {
        var deadline = ;
      }
      var deadline = ;
      initializeClock('clockdiv', deadline);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "5/12/19 21:00:00 CST-0500";
initializeClock('clockdiv', deadline);

//"May 12 2019 21:00:00"