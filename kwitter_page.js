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

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }