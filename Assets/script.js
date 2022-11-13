var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

var timeBlock = $('.description');

var pastTime = $('<div>');
var presentTime = $('<div>');
var futureTime = $('<div>');

pastTime.attr('class', 'past');
presentTime.attr('class', 'present');
futureTime.attr('class', 'future');

function getTime () {
    var currentHour = dayjs().get('h');

    for (i = 9; i < 18; i++) {
        if (currentHour === i) {
            currentHour = presentTime;
            timeBlock.style = presentTime
        } else if (currentHour > i) {
            currentHour = pastTime;
            timeBlock.style = pastTime;
        } else {
            currentHour = futureTime;
            timeBlock.style = futureTime;
        }
    }
}


