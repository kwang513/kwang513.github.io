function sendMessage() {
    var x1 = document.forms["form1"]["name"].value;
    var x2 = document.forms["form1"]["email"].value;
    var x3 = document.forms["form1"]["message"].value;
    if (x1 == "" || x2 == "" || x3 == "") {
        alert("Error! Empty field!");
    }
    else {
        alert("Name: " + x1 + "\nEmail: " + x2 + "\nMessage: " + x3);
    }

}
