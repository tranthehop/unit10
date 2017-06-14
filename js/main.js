// function myFunction() {

// 	var email = document.getElementById('email'); 
//     var checkmail = /([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-z]+/g; 
//     if (!checkmail.test(email.value)) { 
//              alert('Hay nhap dia chi email hop le');
//              email.focus; 
//              return false; 
//     }

// }
function myFunction() {
	var username = document.getElementById('username');
    var checkuser = /[A-Za-z]{1,8}/g;
    console.log(checkuser.test(username.value))
    if(!checkuser.test(username.value)) {
    	alert('ky tu qua dai');
    	username.focus;
    }
    else
    {
    	alert('dung roi');
    }
}
var check = document.getElementById('check');
check.addEventListener('click',myFunction);

