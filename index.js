
// credential verification and callback function 
function login(callback) {
    var username = document.getElementById('userid').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
      callback(); // Call the provided callback function if login is successful
    } else {
      alert('Invalid login credentials');
    }
  }

  function todopage() {
    window.location.href = 'todo.html';
  }