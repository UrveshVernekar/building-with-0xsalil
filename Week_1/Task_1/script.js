// Function to convert Seconds to Minutes and Seconds
function secondsToMinutesAndSeconds(seconds) {
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return (
        minutes + " : " + seconds
    );
}
console.log(secondsToMinutesAndSeconds(170));

// Function to converts Milliseconds to Minutes and Seconds
function millisecondsToMinutesAndSeconds(milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return (
        minutes + " : " + seconds
    );
}
console.log(millisecondsToMinutesAndSeconds(71000)) // 01 : 11
