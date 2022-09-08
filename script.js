
window.onload(timeTheme_Home())
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function dateTime() {
  document.getElementById('datetime').innerHTML = Date();
}

function myContactno() {
  alert("My Phone Number is\n\n+8801907419299");
}

function myEmail() {
  alert("My Email Address is\n\nihtheramchowdhury@gmail.com");
}

function addfunction() {
  var x = document.getElementById('n1').value;
  var q = parseInt(x);
  var y = document.getElementById('n2').value;
  var r = parseInt(y);
  var z = q + r;
  document.getElementById("result").innerHTML = z;
}

function sub() {
  var x = document.getElementById("n1").value;
  var y = document.getElementById("n2").value;
  var z = x - y;
  document.getElementById("result").innerHTML = z;

}

function mul() {
  var x = document.getElementById("n1").value;
  var y = document.getElementById("n2").value;
  var z = x * y;
  document.getElementById("result").innerHTML = z;
}

function div() {
  var x = document.getElementById("n1").value;
  var y = document.getElementById("n2").value;
  var z = x / y;
  document.getElementById("result").innerHTML = z;
}
function timeofDay() {

  if (new Date().getHours() < 5) {
    document.getElementById('sky').innerHTML = " &#x262A ";
    document.getElementById('greet').innerHTML = " Good Evening!";
  }

  else if (new Date().getHours() < 11) {
    document.getElementById('sky').innerHTML = " &#9788 ";
    document.getElementById('greet').innerHTML = " Good Morning!";

  }

  else if (new Date().getHours() < 17) {

    document.getElementById('sky').innerHTML = " &#9925 ";
    document.getElementById('greet').innerHTML = " Good Afternoon!";

  }

  else if (new Date().getHours() < 23.59) {

    document.getElementById('sky').innerHTML = " &#x263D ";
    document.getElementById('greet').innerHTML = " Good Evening!";

  }
}

function timeTheme() {

  if (new Date().getHours() < 5) {
    document.getElementById('theme').href = 'nightglow.css';

    // document.getElementById('homelink').href='index_nightglow.html';
    // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  }

  else if (new Date().getHours() < 11) {
    document.getElementById('theme').href = 'daylight.css';

    // document.getElementById('homelink').href='index.html';
    // document.getElementById('cvlnk').href = 'cv.html';


  }

  else if (new Date().getHours() < 17) {
    document.getElementById('theme').href = 'daylight.css';

    // document.getElementById('homelink').href='index.html';
    // document.getElementById('cvlnk').href = 'cv.html';
  }

  else if (new Date().getHours() < 23.59) {
    document.getElementById('theme').href = 'nightglow.css';

    // document.getElementById('homelink').href='index_nightglow.html';
    // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  }

}


function lightTheme() {
  document.getElementById('avatar').src = "image1.jpg";
  document.getElementById('theme').href = 'daylight.css';

  // document.getElementById('homelink').href='index.html';
  // document.getElementById('cvlnk').href = 'cv.html';
  // document.getElementById('cvh').href = 'cv.html';
}
function darkTheme() {
  document.getElementById('avatar').src = "image2.jpg";
  document.getElementById('theme').href = 'nightglow.css';

  // document.getElementById('homelink').href='index_nightglow.html';
  // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  // document.getElementById('cvh').href = 'cv_nightglow.html';
}


//HOMEPAGE SCRIPT___________________________________________________________________

function timeofDay_Home() {

  if (new Date().getHours() < 5) {
    document.getElementById('sky').innerHTML = " &#x262A ";
    document.getElementById('greet').innerHTML = " Good Evening!";
  }

  else if (new Date().getHours() < 11) {
    document.getElementById('sky').innerHTML = " &#9788 ";
    document.getElementById('greet').innerHTML = " Good Morning!";

  }

  else if (new Date().getHours() < 17) {

    document.getElementById('sky').innerHTML = " &#9925 ";
    document.getElementById('greet').innerHTML = " Good Afternoon!";

  }

  else if (new Date().getHours() < 23.59) {

    document.getElementById('sky').innerHTML = " &#x263D ";
    document.getElementById('greet').innerHTML = " Good Evening!";

  }
}

function timeTheme_Home() {

  if (new Date().getHours() < 5) {
    document.getElementById('theme').href = 'nightglow.css';

    // document.getElementById('homelink').href='index_nightglow.html';
    // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  }

  else if (new Date().getHours() < 11) {
    document.getElementById('theme').href = 'daylight.css';

    // document.getElementById('homelink').href='index.html';
    // document.getElementById('cvlnk').href = 'cv.html';
  }

  else if (new Date().getHours() < 17) {
    document.getElementById('theme').href = 'daylight.css';

    // document.getElementById('homelink').href='index.html';
    // document.getElementById('cvlnk').href = 'cv.html';
  }

  else if (new Date().getHours() < 23.59) {
    document.getElementById('theme').href = 'nightglow.css';

    // document.getElementById('homelink').href='index_nightglow.html';
    // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  }


}

function lightTheme_Home() {
  document.getElementById('avatar').src = "image1.jpg";
  document.getElementById('theme').href = 'daylight.css';

  // document.getElementById('homelink').href='index.html';
  // document.getElementById('cvlnk').href = 'cv.html';
  // document.getElementById('cvh').href = 'cv.html';
}

function darkTheme_Home() {
  document.getElementById('avatar').src = "image2.jpg";
  document.getElementById('theme').href = 'nightglow.css';

  // document.getElementById('homelink').href='index_nightglow.html';
  // document.getElementById('cvlnk').href = 'cv_nightglow.html';
  // document.getElementById('cvh').href = 'cv_nightglow.html';
}


//CV Page Script________________________________________________________________


function timeTheme_CV() {

  if (new Date().getHours() < 5) {
    document.getElementById('theme').href = 'nightglow.css';
    // document.getElementById('homelink').href='index_nightglow.html';
  }

  else if (new Date().getHours() < 11) {
    document.getElementById('theme').href = 'daylight.css';

    // document.getElementById('homelink').href ='index.html';
  }

  else if (new Date().getHours() < 17) {
    document.getElementById('theme').href = 'daylight.css';
    // document.getElementById('homelink').href='index.html';
  }

  else if (new Date().getHours() < 23.59) {
    document.getElementById('theme').href = 'nightglow.css';
    // document.getElementById('homelink').href='index_nightglow.html';
  }

}


function lightTheme_CV() {
  document.getElementById('theme').href = 'daylight.css';
  // document.getElementById('homelink').href='index.html';
}
function darkTheme_CV() {
  document.getElementById('theme').href = 'nightglow.css';
  // document.getElementById('homelink').href='index_nightglow.html';
}