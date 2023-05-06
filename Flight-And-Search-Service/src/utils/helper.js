// FUnction to add constraint that arrival time should not be less than departure time
function compareTime(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}