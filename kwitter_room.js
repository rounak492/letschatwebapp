var firebaseConfig = {
    apiKey: "AIzaSyBDxSaxVXrjt6HikYd2FeLca7CJImzsJsc",
    authDomain: "kwitter-131a2.firebaseapp.com",
    databaseURL: "https://kwitter-131a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-131a2",
    storageBucket: "kwitter-131a2.appspot.com",
    messagingSenderId: "782980945376",
    appId: "1:782980945376:web:170907c441446ea489c785",
    measurementId: "G-D195TVHZFR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}