
var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 17 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('#hours, .hours').html('00');
        $('#mins, .mins').html('00');
        $('#secs, .secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + hours;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('#hours, .hours').html(hours);
        $('#mins, .mins').html(mins);
        $('#secs, .secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}
GetCount();
