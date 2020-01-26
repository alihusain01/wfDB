function getRandomNumber() {
    return Math.floor((Math.random() * 9999) + 1000);

}

window.onload = function() {
    const rand = getRandomNumber(0, 9);
    document.getElementById("yourNumber").innerHTML = rand;
    $('#myNumber').html(rand);
};