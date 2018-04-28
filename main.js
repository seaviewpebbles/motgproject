  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBkJgd8AgtBQ3lorzAaTS8mLsG97zsHbM",
    authDomain: "contact-b9d20.firebaseapp.com",
    databaseURL: "https://contact-b9d20.firebaseio.com",
    projectId: "contact-b9d20",
    storageBucket: "contact-b9d20.appspot.com",
    messagingSenderId: "173355236570"
  };
  firebase.initializeApp(config);

// reference messages collection
var messagesRef = firebase.database().ref('messages');



//listen for fork submit
document.getElementById('onlineqoute').addEventListener('submit', submitForm);
function submitForm(e){
e.preventDefault();

//get values
var name = getInputVal('name');
var email = getInputVal('email');
var radio = getInputVal('ageinfoyes');
var additionalinfo = getInputVal('additionalinfo');

//save message
saveMessage(name, email, ageinfoyes, additionalinfo);

//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';   
},3000);

//clear form
document.getElementById('onlineqoute').reset();
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

 //save message to firebase

 function saveMessage(name, email, ageinfoyes, additionalinfo ){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
name:name,
email:email,
radio:ageinfoyes,
additionalinfo:additionalinfo

    });
  }