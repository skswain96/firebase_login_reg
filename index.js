firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //window.location = './hello.html';
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("reg_div").style.display = "none";
    document.getElementById("maincontent").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("foot").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
//signup
function reg(){

  var userEmail = document.getElementById("reg_email_field").value;
  var userPass = document.getElementById("reg_password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
//login
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
//log out

function logout(){
  firebase.auth().signOut();
  window.location = './index.html';
}
