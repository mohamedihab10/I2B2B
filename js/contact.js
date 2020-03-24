var enter = document.querySelector('#login');
  enter.addEventListener('click', loadsignup)
  function loadJoke() {
            const url = '  http://localhost:3000';
            fetch('http://localhost:3000/signup').then(function (response) {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			
			return
		}
	}
	console.log("incorrect username or password")
})