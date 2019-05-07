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
"12/29/19 21:00:00 CST-0500",
"1/5/2020 21:00:00 CST-0500",
"1/12/2020 21:00:00 CST-0500",
"1/19/2020 21:00:00 CST-0500",
"1/26/2020 21:00:00 CST-0500",
"February 2 2020 21:00:00 CST-0500",
"February 9 2020 21:00:00 CST-0500",
"February 16 2020 21:00:00 CST-0500",
"February 23 2020 21:00:00 CST-0500",
"March 1 2020 21:00:00 CST-0500",
"March 8 2020 21:00:00 CST-0500",
"March 15 2020 21:00:00 CST-0500",
"March 22 2020 21:00:00 CST-0500",
"March 29 2020 21:00:00 CST-0500",
"April 5 2020 21:00:00 CST-0500",
"April 12 2020 21:00:00 CST-0500",
"April 19 2020 21:00:00 CST-0500",
"April 26 2020 21:00:00 CST-0500",
"May 3 2020 21:00:00 CST-0500",
"May 10 2020 21:00:00 CST-0500",
"May 17 2020 21:00:00 CST-0500",
"May 24 2020 21:00:00 CST-0500",
"May 31 2020 21:00:00 CST-0500",
"June 7 2020 21:00:00 CST-0500",
"June 14 2020 21:00:00 CST-0500",
"June 21 2020 21:00:00 CST-0500",
"June 28 2020 21:00:00 CST-0500",
"July 5 2020 21:00:00 CST-0500",
"July 12 2020 21:00:00 CST-0500",
"July 19 2020 21:00:00 CST-0500",
"July 26 2020 21:00:00 CST-0500",
"August 2 2020 21:00:00 CST-0500",
"August 9 2020 21:00:00 CST-0500",
"August 16 2020 21:00:00 CST-0500",
"August 23 2020 21:00:00 CST-0500",
"August 30 2020 21:00:00 CST-0500",
"September 6 2020 21:00:00 CST-0500",
"September 13 2020 21:00:00 CST-0500",
"September 20 2020 21:00:00 CST-0500",
"September 27 2020 21:00:00 CST-0500",
"October 4 2020 21:00:00 CST-0500",
"October 11 2020 21:00:00 CST-0500",
"October 18 2020 21:00:00 CST-0500",
"October 25 2020 21:00:00 CST-0500",
"November 1 2020 21:00:00 CST-0500",
"November 8 2020 21:00:00 CST-0500",
"November 15 2020 21:00:00 CST-0500",
"November 22 2020 21:00:00 CST-0500",
"November 29 2020 21:00:00 CST-0500",
"December 6 2020 21:00:00 CST-0500",
"December 13 2020 21:00:00 CST-0500",
"December 20 2020 21:00:00 CST-0500",
"December 27 2020 21:00:00 CST-0500",
];

var datesAmount = dates.length
var i = 0;
var deadline = (dates[i]);

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
  clearInterval(timeinterval);
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
if (t.total <=0)  {
        clearInterval(timeinterval);
        i++;
        var deadline = (dates[i]);
        initializeClock('clockdiv', deadline);
}
  
}

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);

}
initializeClock('clockdiv', deadline);

//"May 6 2019 18:12:00 CST-0500";