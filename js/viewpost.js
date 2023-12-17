function showAllPosts() {
    var showAllP = document.getElementById('showAllP').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../../controller/postcheck/viewApost.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('postsContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send('ShowAllPosts'+showAllP);
}

function showMyPosts() {
    var showMyP= document.getElementById('showMyP').value;
    var username= document.getElementById('username').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../../controller/postcheck/viewApost.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('postsContainer').innerHTML = xhr.responseText;
        }
    };

    xhr.send('username=' +username + '&showmypost=' + showMyP);
}


function showEditForm(postId) {

    var editForm = document.getElementById('editForm' + postId);
    editForm.style.display = (editForm.style.display == 'none') ? 'block' : 'none';
}
function editPost(postId,username) {
  
    var houseNumber = document.getElementById('editHouseNumber' + postId).value;
    var numberOfRooms = document.getElementById('editNumberOfRooms' + postId).value;
    var rent = document.getElementById('editRent' + postId).value;
    var address = document.getElementById('editAddress' + postId).value;
    var genderRadios = document.getElementsByName('editPreferableGender' + postId);
   
    var preferableGender = '';
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            preferableGender = genderRadios[i].value;
            break;
        }
    }

 
    if (preferableGender === '') {
        alert('Please select a preferable gender.');
        return;
    }


    var postData = {
        'username': username,
        'post_id': postId,
        'houseNumber': houseNumber,
        'numberOfRooms': numberOfRooms,
        'preferableGender': preferableGender,
        'rent': rent,
        'address': address
    };


    var data = JSON.stringify(postData);


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../../controller/postcheck/editpostcheker.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  
    xhr.send('postData=' + data);

    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(this.responseText);
            if(response.success){
                
                document.getElementById('houseNumber' + postId).innerText = response.houseNumber;
                document.getElementById('numberOfRooms' + postId).innerText = response.numberOfRooms;
                document.getElementById('preferableGender' + postId).innerText = response.preferableGender;
                document.getElementById('rent' + postId).innerText = response.rent;
                document.getElementById('address' + postId).innerText = response.address;
               
                document.getElementById('editForm' + postId).style.display = 'none';
                alert('Successfully updated post');
            } else {
                alert('Failed to update post');
            }
        }
    };
}

function validateEditForm(postId) {
    
    var houseNumber = document.getElementById('editHouseNumber' + postId).value;
    var numberOfRooms = document.getElementById('editNumberOfRooms' + postId).value;
    var rent = document.getElementById('editRent' + postId).value;
    var address = document.getElementById('editAddress' + postId).value;
    var genderMale = document.getElementById('editGenderMale' + postId).checked;
    var genderFemale = document.getElementById('editGenderFemale' + postId).checked;
    var genderOther = document.getElementById('editGenderOther' + postId).checked;

  
    if (!houseNumber || !numberOfRooms || !rent || !address || (!genderMale && !genderFemale && !genderOther)) {
        alert('Please fill out all fields.');
        return false;
    }

 
    if (isNaN(rent) || rent <= 0) {
        alert('Please enter a valid number for rent.');
        return false;
    }

   
    return true;
}
