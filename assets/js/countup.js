/* 
Count Up
*/
// set beginning date
const initialDate = '2004-01-20 20:39:15';

/**
 * Set a Timer Function
 * @param {*} initialDate 
 */
function setTimer(initialDate) {
    setTimeout(function () {
        writeTime(initialDate);
    }, 500);
}

/**
 * Write Time to countUp Element
 * use moment.js to calculate the time
 * @param {*} initialDate 
 */
function writeTime(initialDate) {
    var timeResult = '';

    var now = moment();
    var created = moment(initialDate);

    // years
    var years = now.diff(created, 'year');
    timeResult += years + ' years ';

    // months
    created = created.add(years, 'year');
    var months = now.diff(created, 'months')
    timeResult += months + ' months ';

    // days
    created = created.add(months, 'months');
    var days = now.diff(created, 'days');
    timeResult += days + ' days ';

    // hours
    created = created.add(days, 'days');
    var hours = now.diff(created, 'hours');
    timeResult += hours + ' hours ';

    //minutes
    created = created.add(hours, 'hours');
    var minutes = now.diff(created, 'minutes');
    timeResult += minutes + ' minutes ';

    //seconds
    created = created.add(minutes, 'minutes');
    var seconds = now.diff(created, 'seconds');
    timeResult += seconds + ' seconds ';
    document.getElementById('countUp').innerHTML = timeResult;
    setTimer(initialDate);
}

// start the process on document load
document.addEventListener('DOMContentLoaded', function () {
    writeTime(initialDate);
});