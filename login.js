function test() {
    var userInput = document.getElementById('inputUser').value;
    var userPass = document.getElementById('inputPass').value;
    var firebaseRef= firebase.database().ref();

    if(userInput == firebase.database().Users.username){
        window.alert("yh");
    }}
