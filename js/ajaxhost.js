

function ajax() {
    let username = document.getElementById('Username').value;
    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '../../controller/signupcheck/validationcheck.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('availability').innerHTML = this.responseText;
         
            if(this.responseText.trim() === "Username already exists"){
                document.getElementById('submit').disabled = true;
            } else {
                
                document.getElementById('submit').disabled = false;
            }
        }
    };

    xhttp.send('username=' + username);
}


function ajax1() {
    let phone = document.getElementById('phone').value;
    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '../../controller/signupcheck/validationcheck.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('availability1').innerHTML = this.responseText;
           
            if(this.responseText.trim() === "number already exists"){
                document.getElementById('submit').disabled = true;
            } else {
              
                document.getElementById('submit').disabled = false;
            }
        }
    };

    xhttp.send('phone=' + phone);
}

function ajax2() {
    let address = document.getElementById('address').value;
    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '../../controller/signupcheck/validationcheck.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('availability2').innerHTML = this.responseText;
            
            if(this.responseText.trim() === "Address already exists"){
                document.getElementById('submit').disabled = true;
            } else {
                
                document.getElementById('submit').disabled = false;
            }
        }
    };

    xhttp.send('address=' + address);
}






function ajax5() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '../controller/signupcheck/forgotpasswordvalid.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('availability4').innerHTML = this.responseText;
            
            if (this.responseText.trim() === "Matched") {
                document.getElementById('submit').disabled = false;
            } else {
                
                document.getElementById('submit').disabled = true;
            }
        }
    };


    xhttp.send('username=' + username +'&email=' + email +'&phone=' + phone );
}
