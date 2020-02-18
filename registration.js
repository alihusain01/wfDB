function myFunction() {
    // Get the checkbox
    var radio = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (radio.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function myFunction2() {
    var radio = document.getElementById("myCheck2");

    var text = document.getElementById("text");

    if (radio.checked == true) {
        text.style.display = "none";
    } else {


    }
}

    function writeUserData(name, ID, Guest) {
        firebase.database().collection("StudentDirectory").add({
            Name: document.getElementById(name),
            ID: document.getElementById(ID),
            Guest: document.getElementById(Guest),


        }).then(r => 0) ;
    }

