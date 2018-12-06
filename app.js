// Initialize Firebase
var config = {
    apiKey: "AIzaSyAQjd_8tuAf4Pp4-Zv989Y6fTDcU6y3bGg",
    authDomain: "fir-auth-javascript-b3cbd.firebaseapp.com",
    databaseURL: "https://fir-auth-javascript-b3cbd.firebaseio.com",
    projectId: "fir-auth-javascript-b3cbd",
    storageBucket: "fir-auth-javascript-b3cbd.appspot.com",
    messagingSenderId: "462518443655"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var auth = firebase.auth();

  const txtEmail = document.querySelector('.txt-email');
  const txtPassword = document.querySelector('.txt-password');
  const txtEmailLogin = document.querySelector('.txt-email-login');
  const txtPasswordLogin = document.querySelector('.txt-password-login');
  const btnSignUp = document.getElementById('btn-sign-up');
  const signUpForm = document.getElementById('sign-up-form');
  const logInForm = document.getElementById('login-form');
  const btnLogIn = document.getElementById('btn-login');
  const btnLogout = document.getElementById('btn-logout');
  const status = document.getElementById('status');
  const formTitles1 = document.querySelector('.form-titles-1')
  const formTitles2 = document.querySelector('.form-titles-2')
  
  signUpForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = txtEmail.value;
      const pass = txtPassword.value;
      console.log(email)
      console.log(pass)
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message))
  })

  logInForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = txtEmailLogin.value;
      const pass = txtPasswordLogin.value;
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message))
  })

  auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          // User is logged in 
          console.log(firebaseUser);
          txtEmail.classList.add('hide');
          txtPassword.classList.add('hide');
          btnSignUp.classList.add('hide');
          btnLogout.classList.remove('hide');
          btnLogIn.classList.add('hide');
          txtEmailLogin.classList.add('hide');
          txtPasswordLogin.classList.add('hide');
          formTitles1.classList.add('hide');
          formTitles2.classList.add('hide');
          status.innerHTML = 'Status: <span class="status-green">Logged in</span>'
      } else {
          // User is logged out
          console.log('not logged in');  
          txtEmail.classList.remove('hide');
          txtPassword.classList.remove('hide');
          btnSignUp.classList.remove('hide');
          btnLogout.classList.add('hide');
          btnLogIn.classList.remove('hide');
          txtEmailLogin.classList.remove('hide');
          txtPasswordLogin.classList.remove('hide');
          formTitles1.classList.remove('hide');
          formTitles2.classList.remove('hide');
          status.innerHTML = 'Status: <span class="status-red">Not logged in</span>'
      }
  })

btnLogout.addEventListener('click', function(){
    auth.signOut()
})